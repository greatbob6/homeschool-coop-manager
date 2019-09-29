import React from 'react';
import './ClassSchedule.css';

import DaySchedule from '../DaySchedule/DaySchedule';

import { WeekSchedule } from '../../model/Schedule';

const ClassSchedule: React.FC = () => {
  const data : WeekSchedule = {
    days: [
      {
        dayName: 'Wednesday',
        periods: [
          { start: '09:00 AM', end: '10:00 AM', isClassTime: true, description: '' },
          { start: '10:00 AM', end: '11:00 AM', isClassTime: true, description: '' },
          { start: '11:00 AM', end: '12:00 PM', isClassTime: true, description: '' },
          { start: '12:00 PM', end: '01:00 PM', isClassTime: false, description: 'Lunch Break' },
          { start: '01:00 PM', end: '02:00 PM', isClassTime: true, description: '' }
        ]
      },
      {
        dayName: 'Thursday',
        periods: [
          { start: '09:00 AM', end: '10:00 AM', isClassTime: true, description: '' },
          { start: '10:00 AM', end: '11:00 AM', isClassTime: true, description: '' },
          { start: '11:00 AM', end: '12:00 PM', isClassTime: true, description: '' },
          { start: '12:00 PM', end: '01:00 PM', isClassTime: false, description: 'Lunch Break' },
          { start: '01:00 PM', end: '02:00 PM', isClassTime: true, description: '' }
        ]
      }
    ]
  };

  return (
    <div className="ClassSchedule">
      {data.days.map(day =>
        <DaySchedule key={day.dayName} day={day} />
      )}
    </div>
  );
}

export default ClassSchedule;
