import React from 'react';
import { useScheduleTracker } from './hooks/useScheduleTracker';
import { scheduleItems } from './data/scheduleItems';
import { Header } from './components/Header';
import { ScheduleItem } from './components/ScheduleItem';

function App() {
  const { getItemStatus, currentTime } = useScheduleTracker();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <Header currentTime={currentTime} />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  description={item.description}
                  status={getItemStatus(item.time)}
                />
              ))}
            </div>
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-600">
          <p className="bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-flex items-center gap-2">
            <span className="emoji-bounce">💫</span>
            诶嘿～旅行者要记得按时完成任务哦！
            <span className="emoji-bounce">✨</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;