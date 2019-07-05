import actionCreatorFactory from 'typescript-fsa';
import { CalendarModel } from 'models/calendar';

const actionCreator = actionCreatorFactory();

export const calendarActions = {
  returnToday: actionCreator<CalendarModel>('RETURN_TODAY'),
  nextMonth: actionCreator<CalendarModel>('NEXT_MONTH'),
  previousMonth: actionCreator<CalendarModel>('PREVIOUS_MONTH')
}
