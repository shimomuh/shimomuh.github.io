import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { calendarActions } from 'actions/calendar';
import { CalendarModel } from 'models/calendar';

export interface ICalendarState {
  calendar: CalendarModel;
  month: number;
  year: number;
}

const calendarState: ICalendarState = {
  calendar: new CalendarModel(),
  month: new CalendarModel().month,
  year: new CalendarModel().year
};

export const calendarReducer = reducerWithInitialState(calendarState)
  .case(calendarActions.returnToday, (state, model) => {
    return { ...state, calendar: model.returnToday(), month: model.month, year: model.year };
  })
  .case(calendarActions.nextMonth, (state, model) => {
    return { ...state, calendar: model.nextMonth(), month: model.month, year: model.year };
  })
  .case(calendarActions.previousMonth, (state, model) => {
    return { ...state, calendar: model.previousMonth(), month: model.month, year: model.year };
  });
