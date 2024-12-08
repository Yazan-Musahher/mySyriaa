"use client";

import React, { useEffect, useRef, useState } from "react";
import Timeline from "./components/Timeline";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleScroll = () => {
    if (!isPlaying) {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll listener to start audio playback
    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPlaying]);

  return (
    <div className="relative max-w-6xl mx-auto py-10">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <button
        onClick={() => {
          const audio = audioRef.current;
          if (audio) {
            if (isPlaying) {
              audio.pause();
              setIsPlaying(false);
            } else {
              audio.play().catch((err) => {
                console.error("Error playing audio:", err);
              });
              setIsPlaying(true);
            }
          }
        }}
        className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
      >
        {isPlaying ? "⏸ إيقاف الموسيقى" : "▶️ تشغيل الموسيقى"}
      </button>

      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white">مرحبا بكم في السورية الحرة</h1>
        <p className="mt-4 text-xl text-white">
          معاً نوثق تاريخ الثورة السورية وأحداثها.
        </p>
      </header>
      <Timeline />
    </div>
  );
}
