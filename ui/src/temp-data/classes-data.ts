import { WeekSchedule } from '../model/Schedule';
import { Class } from '../model/Class';

export const week_schedule : WeekSchedule = {
  days: [
    {
      id: 'WED',
      dayName: 'Wednesday',
      periods: [
        { id: 'WED_FIRST', start: '09:00 AM', end: '10:00 AM', isClassTime: true, description: '' },
        { id: 'WED_SECOND', start: '10:00 AM', end: '11:00 AM', isClassTime: true, description: '' },
        { id: 'WED_THIRD', start: '11:00 AM', end: '12:00 PM', isClassTime: true, description: '' },
        { id: 'WED_LUNCH', start: '12:00 PM', end: '01:00 PM', isClassTime: false, description: 'Lunch Break' },
        { id: 'WED_FOURTH', start: '01:00 PM', end: '02:00 PM', isClassTime: true, description: '' }
      ]
    },
    {
      id: 'THUR',
      dayName: 'Thursday',
      periods: [
        { id: 'THUR_FIRST', start: '09:00 AM', end: '10:00 AM', isClassTime: true, description: '' },
        { id: 'THUR_SECOND', start: '10:00 AM', end: '11:00 AM', isClassTime: true, description: '' },
        { id: 'THUR_THIRD', start: '11:00 AM', end: '12:00 PM', isClassTime: true, description: '' },
        { id: 'THUR_LUNCH', start: '12:00 PM', end: '01:00 PM', isClassTime: false, description: 'Lunch Break' },
        { id: 'THUR_FOURTH', start: '01:00 PM', end: '02:00 PM', isClassTime: true, description: '' }
      ]
    }
  ]
};

export const classes : Class[] = [
  {
    id: 'CLASS1',
    name: 'Math Games',
    description: 'Learn about fun games with math.',
    period_ids: [ 'WED_FIRST', 'THUR_FOURTH' ],
    teacher_ids: [ 'TEACHER1', 'TEACHER2' ],
    helper_ids: []
  }
];
