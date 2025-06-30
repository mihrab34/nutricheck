import React from "react";
import { Heart } from "lucide-react";

const comments = [
  {
    id: 1,
    name: "Rihanna Adwoa",
    time: "45 mins ago",
    text:
      "So I tried this at home and I really loved it. I think I may have added too much pepper but I love it nonetheless.",
    likes: 12,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Rihanna Adwoa",
    time: "45 mins ago",
    text:
      "So I tried this at home and I really loved it. I think I may have added too much pepper but I love it nonetheless.",
    likes: 12,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
];

export default function CommentsSection() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 ">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1C1C51] flex items-center">
          Comments
          <span className="ml-3 text-sm bg-gray-100 text-gray-700 rounded-md px-2.5 py-0.5 font-medium">14</span>
        </h2>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
          Add your comment
        </button>
      </div>

      {/* Comments */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div key={c.id} className="border-b border-gray-100 pb-6">
            <div className="flex space-x-4">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium text-[#1C1C51]">{c.name}</h4>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-400">{c.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500 leading-relaxed">{c.text}</p>
                <div className="mt-2 flex items-center text-gray-400 text-sm">
                  <Heart size={16} className="mr-1" />
                  <span className="text-gray-400">{c.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 text-md font-medium px-6 py-2 rounded-sm transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}
