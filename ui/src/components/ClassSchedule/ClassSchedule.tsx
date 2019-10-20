import React from 'react';
import './ClassSchedule.css';

import DaySchedule from '../DaySchedule/DaySchedule';

import { WeekSchedule } from '../../model/Schedule';
import { Class } from '../../model/Class';

interface ClassScheduleProps {
  schedule: WeekSchedule;
  classes: Class[];
}

const ClassSchedule: React.FC<ClassScheduleProps> = (props) => {
  return (
    <div className="ClassSchedule">
      {props.schedule.days.map(day => {
        const dayPeriodIds = day.periods.map(p => p.id);
        const dayClasses = props.classes.filter(c => c.period_ids.some(p => dayPeriodIds.includes(p)));

        return (
          <DaySchedule key={day.dayName} day={day} classes={dayClasses} />
        );
      })}
    </div>
  );
}

export default ClassSchedule;
