export interface WeekSchedule {
  days: DaySchedule[];
};

export interface DaySchedule {
  id: string;
  dayName: string;
  periods: Period[];
}

export interface Period {
  id: string;
  start: string;
  end: string;
  isClassTime: boolean;
  description: string;
}
