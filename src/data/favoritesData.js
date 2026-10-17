/**
 * PERSONAL FAVORITES DATA
 * 
 * Curated selections across Music, Movies, and Books.
 * Each category contains rich metadata, media assets, and quotes/notes.
 */

export const favoritesData = {
  music: {
    category: "Music",
    tagline: "Heavy Rotation",
    description: "Sonic backdrops fueling engineering flow states, late-night deep work, and creative focus.",
    items: [
      {
        id: "m1",
        title: "Starboy",
        artist: "The Weeknd ft. Daft Punk",
        genre: "Electro-Pop / Synthwave",
        year: "2016",
        badge: "On Repeat",
        note: "Infectious basslines and flawless synth production from legendary french house pioneers.",
        cover: "/images/favorites/starboy.jpg",
        audioSrc: "/audio/starboy.m4a",
        fallbackAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/71/d6/1171d6ad-3c96-e027-2af6-58028426588c/mzaf_15137631797407745471.plus.aac.p.m4a",
        duration: "0:30",
        link: "https://music.youtube.com/watch?v=34Na4j8AVgA"
      },
      {
        id: "m2",
        title: "Midnight City",
        artist: "M83",
        genre: "Synthwave / Dream Pop",
        year: "2011",
        badge: "Flow State",
        note: "Ethereal soundscapes, nostalgic nocturnal energy, and an iconic saxophone crescendo.",
        cover: "/images/favorites/midnight-city.jpg",
        audioSrc: "/audio/midnight-city.m4a",
        fallbackAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/24/09/79/2409794c-3d5d-af26-580e-7dc00ee4f207/mzaf_369629549966021675.plus.aac.p.m4a",
        duration: "0:30",
        link: "https://music.youtube.com/watch?v=dX3k_QDnzHE"
      },
      {
        id: "m3",
        title: "Something About Us",
        artist: "Daft Punk",
        genre: "French House / Nu-Disco",
        year: "2001",
        badge: "Timeless",
        note: "Warm analog basslines with emotive Rhodes piano chords and heartfelt robotic vocals.",
        cover: "/images/favorites/something-about-us.jpg",
        audioSrc: "/audio/something-about-us.m4a",
        fallbackAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e5/6e/07/e56e0775-d44c-fc79-a8d8-78b46a825738/mzaf_9538225478116277548.plus.aac.p.m4a",
        duration: "0:30",
        link: "https://music.youtube.com/watch?v=em0MknB6wFo"
      },
      {
        id: "m4",
        title: "Resonance",
        artist: "HOME",
        genre: "Chillwave / Synth",
        year: "2014",
        badge: "Deep Work",
        note: "The quintessential retro synth nostalgia soundtrack engineered for uninterrupted focus.",
        cover: "/images/favorites/resonance.jpg",
        audioSrc: "/audio/resonance.m4a",
        fallbackAudio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/bb/1a/33bb1a1a-1448-3118-6891-639e61784145/mzaf_3810752549913623044.plus.aac.p.m4a",
        duration: "0:30",
        link: "https://music.youtube.com/watch?v=8GW6sLrK40k"
      }
    ]
  },

  movies: {
    category: "Cinema",
    tagline: "Visual Narratives",
    description: "Atmospheric direction, mind-bending concepts, and timeless storytelling that challenge perception.",
    items: [
      {
        id: "f1",
        title: "Interstellar",
        creator: "Christopher Nolan",
        genre: "Sci-Fi / Drama",
        year: "2014",
        badge: "Masterpiece",
        rating: "8.7",
        runtime: "169 min",
        poster: "/images/favorites/interstellar.jpg",
        quote: "Mankind was born on Earth. It was never meant to die here.",
        link: "https://www.imdb.com/title/tt0816692/"
      },
      {
        id: "f2",
        title: "Blade Runner 2049",
        creator: "Denis Villeneuve",
        genre: "Neo-Noir / Cyberpunk",
        year: "2017",
        badge: "Aesthetic",
        rating: "8.0",
        runtime: "164 min",
        poster: "/images/favorites/blade-runner-2049.jpg",
        quote: "All the best memories are hers.",
        link: "https://www.imdb.com/title/tt1856101/"
      },
      {
        id: "f3",
        title: "The Prestige",
        creator: "Christopher Nolan",
        genre: "Psychological Thriller",
        year: "2006",
        badge: "Mind-Bending",
        rating: "8.5",
        runtime: "130 min",
        poster: "/images/favorites/the-prestige.jpg",
        quote: "Now you're looking for the secret. But you won't find it of course, because of course, you're not really looking.",
        link: "https://www.imdb.com/title/tt0482571/"
      },
      {
        id: "f4",
        title: "Inception",
        creator: "Christopher Nolan",
        genre: "Sci-Fi / Heist",
        year: "2010",
        badge: "Visionary",
        rating: "8.8",
        runtime: "148 min",
        poster: "/images/favorites/inception.jpg",
        quote: "An idea is like a virus. Resilient. Highly contagious.",
        link: "https://www.imdb.com/title/tt1375666/"
      }
    ]
  },

  books: {
    category: "Literature",
    tagline: "The Bookshelf",
    description: "Architecture, engineering philosophy, mental models, and relentless focus.",
    items: [
      {
        id: "b1",
        title: "Designing Data-Intensive Applications",
        creator: "Martin Kleppmann",
        genre: "System Design",
        year: "2017",
        badge: "Essential",
        cover: "/images/favorites/ddia.jpg",
        takeaway: "Reliability, scalability, and maintainability are not incidental; they are the core tenets of engineering excellence.",
        link: "https://www.goodreads.com/book/show/23466395-designing-data-intensive-applications"
      },
      {
        id: "b2",
        title: "Atomic Habits",
        creator: "James Clear",
        genre: "Productivity & Psychology",
        year: "2018",
        badge: "Foundational",
        cover: "/images/favorites/atomic-habits.jpg",
        takeaway: "You do not rise to the level of your goals. You fall to the level of your systems.",
        link: "https://www.goodreads.com/book/show/40121378-atomic-habits"
      },
      {
        id: "b3",
        title: "Clean Code",
        creator: "Robert C. Martin",
        genre: "Software Craftsmanship",
        year: "2008",
        badge: "Classic",
        cover: "/images/favorites/clean-code.jpg",
        takeaway: "Code is read vastly more often than it is written. Clean code always looks like it was written by someone who cares.",
        link: "https://www.goodreads.com/book/show/3735293-clean-code"
      },
      {
        id: "b4",
        title: "Deep Work",
        creator: "Cal Newport",
        genre: "Focus & Philosophy",
        year: "2016",
        badge: "Mindset",
        cover: "/images/favorites/deep-work.jpg",
        takeaway: "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable.",
        link: "https://www.goodreads.com/book/show/25744928-deep-work"
      }
    ]
  }
};
