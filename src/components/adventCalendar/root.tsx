import React from 'react';
import Calendar from 'containers/adventCalendar/calendar';
import { CalendarModel } from 'models/calendar';
import './root.scss';

interface IAdventCalendarProps {
  calendar: CalendarModel;
  nextMonth: (k: any) => any;
  previousMonth: (k: any) => any;
  returnToday: (k: any) => any;
}

const AdventCalendar: React.FC<IAdventCalendarProps> = (props) => {
  return (
    <div className='advent-calendar'>
      <Toolbar {...props} />
      <Calendar {...props} />
    </div>
  );
};

const Toolbar: React.FC<IAdventCalendarProps> = (props) => {
  const { calendar, nextMonth, previousMonth, returnToday } = props;
  const toNext = () => {
    return nextMonth(calendar);
  };
  const toPrev = () => {
    return previousMonth(calendar);
  };
  const toThisMonth = () => {
    return returnToday(calendar);
  };
  return (
    <div className='advent-calendar__toolbar'>
      <div className='advent-calendar__button-group'>
        <button className='advent-calendar__button-group--reset-button' onClick={toThisMonth}>今月</button>
        <button className='advent-calendar__button-group--prev-button' onClick={toPrev}>＜</button>
        <button className='advent-calendar__button-group--next-button' onClick={toNext}>＞</button>
      </div>
      <h2>{calendar.year}年{calendar.month}月</h2>
    </div>
  );
};

export default AdventCalendar;
