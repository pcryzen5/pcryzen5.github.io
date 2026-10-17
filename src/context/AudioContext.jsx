import { createContext, useContext, useState, useRef, useEffect } from "react";
import { favoritesData } from "../data/favoritesData";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const tracks = favoritesData.music.items;

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);
  const currentTrack = tracks[currentTrackIndex];

  // Helper to format seconds into mm:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) return "0:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Synchronize audio element volume and playback when track changes
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) => {
          console.warn("Autoplay / Audio play was prevented:", err);
          setIsPlaying(false);
        });
    }
  }, [currentTrackIndex]);

  // Handle play/pause toggle for current track
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio playback error:", err);
          setIsPlaying(false);
        });
    }
  };

  // Select and play a specific track
  const selectTrack = (index) => {
    if (index === currentTrackIndex) {
      togglePlay();
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        setTimeout(() => {
          audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }, 50);
      }
    }
  };

  // Next track
  const handleNext = () => {
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
  };

  // Previous track
  const handlePrev = () => {
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(true);
  };

  // Scrubber seeking
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Volume slider
  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume || 0.8;
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        tracks,
        currentTrackIndex,
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        togglePlay,
        selectTrack,
        handleNext,
        handlePrev,
        handleSeek,
        handleVolume,
        toggleMute,
        formatTime,
      }}
    >
      {/* Global Singleton Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 30)}
        onEnded={handleNext}
        onError={() => {
          if (audioRef.current && audioRef.current.src !== currentTrack.fallbackAudio) {
            audioRef.current.src = currentTrack.fallbackAudio;
            if (isPlaying) audioRef.current.play().catch(() => {});
          }
        }}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
