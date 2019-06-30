import React from 'react';
import './calendar.scss';
import { CalendarModel } from 'models/calendar';
import { Link } from 'react-router-dom';

export const Calendar: React.FC = () => {
  const today: Date = new Date();
  return (
    <div>
      <h2>{today.getFullYear()}年{today.getMonth() + 1}月</h2>
      <table className='calendar'>
        <TableHeader />
        <TableData today={today} />
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
  today: Date;
}

const TableData: React.FC<TableDataProps> = (props) => {
  const { today } = props;
  const calendar = new CalendarModel(today.getFullYear(), today.getMonth() + 1);
  return (
    <tbody>
     {calendar.dates.map((week: object[], key: number) => {
       return <tr key={key}>{week.map((d: any, key: number) => <td key={key} className={d.isActive ? 'is-active' : ''}><Link to={`/${d.year}-${d.getZeroPaddingMonth()}-${d.getZeroPaddingDay()}`}>{d.day}</Link></td>)}</tr>
     })}
    </tbody>
  );
}
