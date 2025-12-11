"use client";

import { Heart, MessageSquare, Megaphone } from "lucide-react"; // Example icons

const FeedCard = () => {
  const post = {
    id: 1,
    title: "오늘 정말 화나는 일이 있었어.",
    content:
      "회사에서 말도 안 되는 지시를 받아서 너무 스트레스받는다... 정말 다 때려치우고 싶어.",
    category: "분노",
    author: "익명의 벤터",
    time: "2시간 전",
  };

  return (
    <div className="bg-[#1E1E1E] border border-[#FF00FF] rounded-lg p-3 mb-3 shadow-lg text-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-[#39FF14]">{post.title}</h3>
        <span className="text-xs text-gray-500">{post.time}</span>
      </div>
      <p className="text-sm text-gray-300 mb-3">{post.content}</p>

      <div className="flex justify-around border-t border-gray-700 pt-3">
        <button className="flex flex-col items-center text-gray-400 hover:text-[#FF00FF] transition-colors">
          <Heart size={18} />
          <span className="text-xs mt-1">위로하기</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#FF00FF] transition-colors">
          <MessageSquare size={18} />
          <span className="text-xs mt-1">욕해주기</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-[#FF00FF] transition-colors">
          <Megaphone size={18} /> {/* Using Megaphone as a placeholder for '사이다' */}
          <span className="text-xs mt-1">사이다</span>
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
