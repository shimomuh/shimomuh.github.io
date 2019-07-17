import React from 'react';
import './calendar.scss';
import { CalendarModel } from 'models/calendar';
import { Link } from 'react-router-dom';
import diary_title_config from 'config/diary_title.json';
import diary_tag_icon_config from 'config/diary_tag_icon.json';

interface ICalendarProps {
  calendar: CalendarModel;
}

const Calendar: React.FC<ICalendarProps> = (props) => {
  const { calendar } = props;
  return (
    <div className='calendar'>
      <CalendarHeader />
      <CalendarBody calendar={calendar} />
    </div>
  );
};

const CalendarHeader: React.FC = () => {
  const day = ['日', '月', '火', '水', '木', '金', '土'];
  return (
    <ul className='calendar__header'>
      {day.map((d: string, key: number) => <li className='calendar__cell' key={key}>{d}</li>)}
    </ul>
  );
};

interface ICalendarBodyProps {
  calendar: CalendarModel;
}

interface IDiaryTitleConfigProps {
  [key: string]: string;
}

interface IDiaryTagIconConfigProps {
  [key: string]: string[] | undefined;
}

const CalendarBody: React.FC<ICalendarBodyProps> = (props) => {
  const { calendar } = props;
  const title: IDiaryTitleConfigProps = diary_title_config;
  const tagIcons: IDiaryTagIconConfigProps = diary_tag_icon_config;
  const cellClassName: any = (isActive: any) => {
    const klassName = 'calendar__cell';
    if (isActive) { return klassName.concat(' ', 'is-active'); }
    return klassName;
  };
  const renderIcons: any = (icons: string[] | undefined) => {
    if (icons === undefined) { return (<span className='calendar__cell-icons' />); }
    return (
      <span className='calendar__cell--icons'>
        {
          icons.map((iconFile: string, key: number) => {
            return (
              <img key={key} className='calendar__cell--icon' src={`/static/tag/${iconFile}`} alt="" />
            );
          })
        }
      </span>
    );
  };
  return (
    <ul className='calendar__body'>
      {
        calendar.dates.map((week: object[]) => {
          return week.map((d: any, key: number) => {
            return (
              <li key={key} className={cellClassName(d.isActive)}>
                <Link to={`/diary/${d.year}-${d.getZeroPaddingMonth()}-${d.getZeroPaddingDate()}`}>
                  <span className='calendar__cell--date'>{d.date}</span>
                  <span className='calendar__cell--day'>({d.day})</span>
                  <span className='calendar__cell--title'>{
                    title[`${d.year}-${d.getZeroPaddingMonth()}-${d.getZeroPaddingDate()}`]
                  }</span>
                  {renderIcons(tagIcons[`${d.year}-${d.getZeroPaddingMonth()}-${d.getZeroPaddingDate()}`])}
                </Link>
              </li>
            );
          });
        })
      }
    </ul>
  );
};

export default Calendar;
