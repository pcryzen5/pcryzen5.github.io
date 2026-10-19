import { useEffect, useState } from "react";

export default function ModelEmbed({
  project = "e_f9976c6444268336a7e4",
  style = {},
  aspectRatio = "949/777"
}) {
  const [, setScriptLoaded] = useState(false);

  useEffect(() => {
    const src = "https://thrine.app/embed/v1.js";
    const existing = document.querySelector(`script[src="${src}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = src;
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div
      className="relative w-full flex items-center justify-center transition-all duration-500 overflow-hidden"
      style={{
        width: "100%",
        aspectRatio: aspectRatio
      }}
    >
      {/* Thrine 3D Model Custom Element */}
      <model-embed
        project={project}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          aspectRatio: aspectRatio,
          ...style
        }}
      />
    </div>
  );
}
