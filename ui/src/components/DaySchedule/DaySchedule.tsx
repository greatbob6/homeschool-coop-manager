import React from 'react';
import './DaySchedule.css';

import ClassListElement from '../ClassListElement/ClassListElement';

import { DaySchedule as DayScheduleModel } from '../../model/Schedule';
import { Class as ClassModel } from '../../model/Class';

interface DayScheduleProps {
  day: DayScheduleModel;
  classes: ClassModel[];
}

const DaySchedule: React.FC<DayScheduleProps> = (props) => {
  return (
    <div className="DaySchedule">
      <h2>{props.day.dayName}</h2>
      {props.day.periods.map(period => {
        const el_classes = `Period ${period.isClassTime ? 'class-time' : 'other-time'}`;
        const assigned_classes = props.classes.filter(c => c.period_ids.includes(period.id));

        return (
          <section key={period.start} className={el_classes}>
            <h3>{period.start} - {period.end}</h3>
            {(!period.isClassTime) ? (<p>{period.description}</p>) : ''}
            <div className="Classes">
              {assigned_classes.map(ac =>
                <ClassListElement key={ac.id} class={ac} />
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default DaySchedule;
