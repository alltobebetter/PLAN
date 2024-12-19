import { useState, useEffect } from 'react';
import { getScheduleStatus } from '../utils/dateUtils';
import type { ScheduleStatus } from '../types/schedule';

export function useScheduleTracker() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getItemStatus = (scheduleTime: string): ScheduleStatus => {
    return getScheduleStatus(scheduleTime, currentTime);
  };

  return { getItemStatus, currentTime };
}