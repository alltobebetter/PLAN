export function parseScheduleDate(scheduleTime: string): Date {
  const [month, day, time] = scheduleTime.split(' ');
  const currentYear = new Date().getFullYear();
  
  // Handle date range (e.g., "12月 22-23")
  if (day.includes('-')) {
    const [startDay] = day.split('-');
    return new Date(currentYear, 11, parseInt(startDay));
  }

  // Handle specific time
  if (time) {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(currentYear, 11, parseInt(day), hours, minutes);
  }

  // Handle day only
  return new Date(currentYear, 11, parseInt(day));
}

export function getScheduleStatus(scheduleTime: string, currentTime: Date) {
  const scheduleDate = parseScheduleDate(scheduleTime);
  
  // For date ranges, check if we're within the range
  if (scheduleTime.includes('-')) {
    const [month, dayRange] = scheduleTime.split(' ');
    const [startDay, endDay] = dayRange.split('-').map(Number);
    const endDate = new Date(currentTime.getFullYear(), 11, endDay, 23, 59, 59);
    
    if (currentTime >= scheduleDate && currentTime <= endDate) {
      return 'in-progress';
    }
    return currentTime > endDate ? 'completed' : 'upcoming';
  }

  // For specific times
  const nextScheduleTime = scheduleTime.split(' ')[2];
  if (nextScheduleTime) {
    const [nextHours, nextMinutes] = nextScheduleTime.split(':').map(Number);
    const nextScheduleDate = new Date(scheduleDate);
    nextScheduleDate.setHours(nextHours, nextMinutes);
    
    if (currentTime >= scheduleDate && currentTime < nextScheduleDate) {
      return 'in-progress';
    }
  }

  return currentTime > scheduleDate ? 'completed' : 'upcoming';
}