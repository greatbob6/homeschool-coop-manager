import React from 'react';
import './DaySchedule.css';

import { DaySchedule as DayScheduleModel } from '../../model/Schedule';

interface DayScheduleProps {
  day: DayScheduleModel;
}

const DaySchedule: React.FC<DayScheduleProps> = (props) => {
  return (
    <div className="DaySchedule">
      <h2>{props.day.dayName}</h2>
      {props.day.periods.map(period => {
        const classes = `Period ${period.isClassTime ? 'class-time' : 'other-time'}`;

        return (
          <section key={period.start} className={classes}>
            <h3>{period.start} - {period.end}</h3>
            {(!period.isClassTime) ? (<p>{period.description}</p>) : ''}
          </section>
        );
      })}
    </div>
  );
}

export default DaySchedule;
