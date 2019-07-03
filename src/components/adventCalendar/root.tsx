import React from 'react';
import Calendar from 'containers/adventCalendar/calendar';
import { CalendarModel } from 'models/calendar';
import { CalendarState } from 'states/calendar';
import { CalendarActions } from 'containers/adventCalendar/root';

type AdventCalendarProps = {
  calendar: CalendarModel,
  nextMonth: Function,
  previousMonth: Function,
  returnToday: Function
}

const AdventCalendar: React.FC<AdventCalendarProps> = (props: AdventCalendarProps) => {
  const { calendar } = props
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
    <div className='toolbar'>
      <button onClick={() => { previousMonth(calendar); }}>&lt;</button>
      <button onClick={() => { returnToday(calendar); }}>Today</button>
      <button onClick={() => { nextMonth(calendar); }}>&gt;</button>
      <h2>{calendar.year}年{calendar.month}月</h2>
    </div>
  )
}

export default AdventCalendar;
