import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';

interface HeaderProps {
  currentTime: Date;
}

export function Header({ currentTime }: HeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="schedule-title text-4xl font-bold text-purple-800 mb-4">
        <span className="emoji-bounce inline-block mr-2">✨</span>
        派蒙的旅行计划表！
        <span className="emoji-bounce inline-block ml-2">🎒</span>
      </h1>
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-flex shadow-sm">
          <Clock className="text-purple-600" />
          <p className="text-lg text-purple-600">
            现在时间: {currentTime.toLocaleString('zh-CN')}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
            <MapPin className="text-pink-500" />
            <span className="text-pink-600">拉萨 ➜ 北京 ➜ 秦皇岛</span>
          </div>
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
            <Calendar className="text-blue-500" />
            <span className="text-blue-600">12月9日 - 12月27日</span>
          </div>
        </div>
      </div>
    </header>
  );
}