import React from 'react';
import './calendar.scss';
import { CalendarModel } from 'models/calendar';
import { Link } from 'react-router-dom';

type CalendarProps = {
  calendar: CalendarModel;
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const { calendar } = props;
  return (
    <div>
      <table className='calendar'>
        <TableHeader />
        <TableData calendar={calendar} />
      </table>
    </div>
  );
}

const TableHeader: React.FC = () => {
  const day = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <thead>
      <tr>
        {day.map((d: string, key: number) => <th key={key}>{d}</th>)}
      </tr>
    </thead>
  );
}

type TableDataProps = {
  calendar: CalendarModel;
}

const TableData: React.FC<TableDataProps> = (props) => {
  const { calendar } = props;
  return (
    <tbody>
     {calendar.dates.map((week: object[], key: number) => {
       return <tr key={key}>{week.map((d: any, key: number) => <td key={key} className={d.isActive ? 'is-active' : ''}><Link to={`/${d.year}-${d.getZeroPaddingMonth()}-${d.getZeroPaddingDay()}`}>{d.day}</Link></td>)}</tr>
     })}
    </tbody>
  );
}

export default Calendar;
