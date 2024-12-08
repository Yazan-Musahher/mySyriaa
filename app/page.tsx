"use client";

import React, { useEffect, useRef, useState } from "react";
import Timeline from "./components/Timeline";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleInteraction = () => {
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error playing audio:", err));
    }
    setOverlayVisible(false); // Remove overlay after interaction
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Error playing audio:", err));
      }
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto py-10">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Overlay */}
      {overlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <h1 className="text-white text-3xl font-bold mb-4">
            مرحباً بكم في السورية الحرة
          </h1>
          <p className="text-white text-lg mb-8">
            اضغط على الزر أدناه للمتابعة الموقع
          </p>
          <button
            onClick={handleInteraction}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-xl hover:bg-green-600 transition"
          >
            اضغط هنا للدخول
          </button>
        </div>
      )}

      {/* Notification Banner */}
      <div className="fixed top-0 left-0 right-0 bg-green-600 text-white text-center py-0.25 z-40 shadow-md">
        التحديث الكامل للموقع قادم قريباً بإذن الله تعالى
      </div>

      {/* Pause/Play Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-40 hover:bg-green-600 transition top-auto right-auto bottom-4 left-1/2 transform -translate-x-1/2"
      >
        {isPlaying ? "⏸ إيقاف الموسيقى" : "▶️ تشغيل الموسيقى"}
      </button>

      {/* Main Content */}
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
