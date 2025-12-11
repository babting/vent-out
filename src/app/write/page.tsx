"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [angerLevel, setAngerLevel] = useState(50);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isBurning, setIsBurning] = useState(false); // Add isBurning state
  const router = useRouter();

  const causeTags = ["상사", "야근", "동료", "월급", "미래", "그냥"];

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleBurn = () => {
    setIsBurning(true); // Set isBurning to true on click
    // Simulate a 2-second loading delay
    setTimeout(() => {
      setIsBurning(false); // Set isBurning to false after delay
      router.push("/receipt");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 font-sans">
      <h1 className="text-2xl font-bold text-[#FF00FF] mb-6 text-center">분노 배설하기</h1>

      {/* Step 1: Emotion Thermometer */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2 text-[#39FF14]">지금 얼마나 빡쳤나요?</h2>
        <div className="text-center mb-4">
          <span className="text-3xl font-bold text-[#FF00FF]">
            {angerLevel}°C
          </span>
        </div>
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={angerLevel}
            onChange={(e) => setAngerLevel(Number(e.target.value))}
            className="w-full h-3 rounded-lg appearance-none cursor-pointer range-slider-gradient"
          />
        </div>
      </section>

      {/* Step 2: Cause Tags */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2 text-[#39FF14]">누가/무엇이 문제인가요?</h2>
        <div className="flex flex-wrap gap-2">
          {causeTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 border rounded-full text-base transition-colors duration-200 
                ${selectedTags.includes(tag)
                  ? "bg-transparent border-[#FF00FF] text-[#FF00FF] shadow-neon-pink"
                  : "border-gray-600 text-gray-400 hover:border-[#39FF14] hover:text-[#39FF14]"
                }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Step 3: Vent & Burn */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-[#39FF14]">분노 배설 & 소각</h2>
        <textarea
          className="w-full h-40 p-3 mb-4 bg-[#1E1E1E] border border-[#FF00FF] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39FF14] text-base"
          placeholder="여기에 당신의 분노를 배설하세요..."
        ></textarea>
        <button
          onClick={handleBurn} // Connect handler function
          disabled={isBurning} // Disable button when burning
          className="w-full py-3 bg-red-600 text-white text-xl font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 hover:bg-red-700 transition-all duration-300 animate-pulse-burn"
        >
          {isBurning ? (
            <>🔥 소각 중...</> // Show loading text and flame icon
          ) : (
            <>
              <Flame size={28} />
              소각하기 (Burn)
            </>
          )}
        </button>
      </section>
    </div>
  );
}
