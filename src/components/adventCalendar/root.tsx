import React from 'react';
import { Calendar } from './calendar';
import { CalendarModel } from 'models/calendar';

const AdventCalendar: React.FC = () => {
  const calendar = new CalendarModel();
  return (
    <div className='advent-calendar'>
      <Toolbar calendar={calendar} />
      <Calendar calendar={calendar} />
    </div>
  );
}

type ToolbarProps = {
  calendar: CalendarModel;
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { calendar } = props;
  return (
    <div className='toolbar'>
      <h2>{calendar.year}年{calendar.month}月</h2>
    </div>
  )
}

export default AdventCalendar;
