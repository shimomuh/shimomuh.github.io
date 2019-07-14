import React from 'react';
import Calendar from 'containers/adventCalendar/calendar';
import { CalendarModel } from 'models/calendar';
import './root.scss';

type AdventCalendarProps = {
  calendar: CalendarModel,
  nextMonth: Function,
  previousMonth: Function,
  returnToday: Function
}

const AdventCalendar: React.FC<AdventCalendarProps> = (props: AdventCalendarProps) => {
  return (
    <div className='advent-calendar'>
      <Toolbar {...props} />
      <Calendar {...props} />
    </div>
  );
}

type ToolbarProps = {
  calendar: CalendarModel,
  nextMonth: Function,
  previousMonth: Function,
  returnToday: Function
}

const Toolbar: React.FC<ToolbarProps> = (props: ToolbarProps) => {
  const { calendar, nextMonth, previousMonth, returnToday } = props;
  return (
    <div className='advent-calendar__toolbar'>
      <div className='advent-calendar__button-group'>
        <button className='advent-calendar__button-group--reset-button' onClick={() => { returnToday(calendar); }}>今月</button>
        <button className='advent-calendar__button-group--prev-button' onClick={() => { previousMonth(calendar); }}>＜</button>
        <button className='advent-calendar__button-group--next-button' onClick={() => { nextMonth(calendar); }}>＞</button>
      </div>
      <h2>{calendar.year}年{calendar.month}月</h2>
    </div>
  )
}

export default AdventCalendar;
