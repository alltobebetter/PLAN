export type ScheduleStatus = 'completed' | 'in-progress' | 'upcoming';

export interface ScheduleItem {
  time: string;
  description: string;
}