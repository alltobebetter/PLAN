import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { ScheduleStatus } from '../types/schedule';

interface ScheduleItemProps {
  time: string;
  description: string;
  status: ScheduleStatus;
}

export function ScheduleItem({ time, description, status }: ScheduleItemProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-l-4 border-green-400 hover:bg-green-100';
      case 'in-progress':
        return 'bg-yellow-50 border-l-4 border-yellow-400 hover:bg-yellow-100';
      default:
        return 'bg-gray-50 border-l-4 border-gray-300 hover:bg-gray-100';
    }
  };

  const getStatusEmoji = () => {
    switch (status) {
      case 'completed':
        return '🎉';
      case 'in-progress':
        return '⏳';
      default:
        return '📌';
    }
  };

  const StatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />;
    }
  };

  return (
    <div className={`schedule-item flex items-start gap-4 p-4 rounded-lg transition-all hover:shadow-md ${getStatusStyles()}`}>
      <StatusIcon />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            {time}
          </span>
          <span className="emoji-bounce inline-block">{getStatusEmoji()}</span>
        </div>
        <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}