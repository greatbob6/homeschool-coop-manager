import React from 'react';

import ClassSchedule from '../../components/ClassSchedule/ClassSchedule';

import { week_schedule, classes } from '../../temp-data/classes-data';

const Classes: React.FC = () => {
  return (
    <>
      <h1>Classes</h1>

      <ClassSchedule schedule={week_schedule} classes={classes} />
    </>
  );
}

export default Classes;
