export interface WeekSchedule {
  days: DaySchedule[];
};

export interface DaySchedule {
  dayName: string;
  periods: Period[];
}

export interface Period {
  start: string;
  end: string;
  isClassTime: boolean;
  description: string;
}
