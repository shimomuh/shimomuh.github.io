import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { calendarActions } from 'actions/calendar';
import { CalendarModel } from 'models/calendar'

export interface CalendarState {
  calendar: CalendarModel;
  year: number;
  month: number;
}

const state: CalendarState = {
  calendar: new CalendarModel(),
  year: new CalendarModel().year,
  month: new CalendarModel().month
};

export const calendarReducer = reducerWithInitialState(state)
  .case(calendarActions.returnToday, (state, model) => {
    return Object.assign({}, state, { calendar: model.returnToday(), month: model.month, year: model.year  })
  })
  .case(calendarActions.nextMonth, (state, model) => {
    return Object.assign({}, state, { calendar: model.nextMonth(), month: model.month, year: model.year  })
  })
  .case(calendarActions.previousMonth, (state, model) => {
    return Object.assign({}, state, { calendar: model.previousMonth(), month: model.month, year: model.year })
  })
