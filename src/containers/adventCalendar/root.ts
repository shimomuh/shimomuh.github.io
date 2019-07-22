import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ICalendarState } from 'states/calendar';
import { calendarActions } from 'actions/calendar';
import AdventCalendar from 'components/adventCalendar/root';
import { CalendarModel } from 'models/calendar';

export interface ICalendarActions {
  returnToday: (model: CalendarModel) => Action<CalendarModel>;
  nextMonth: (model: CalendarModel) => Action<CalendarModel>;
  previousMonth: (model: CalendarModel) => Action<CalendarModel>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<CalendarModel>>) {
  return {
    nextMonth: (model: CalendarModel) => dispatch(calendarActions.nextMonth(model)),
    previousMonth: (model: CalendarModel) => dispatch(calendarActions.previousMonth(model)),
    returnToday: (model: CalendarModel) => dispatch(calendarActions.returnToday(model))
  };
}

function mapStateToProps(state: ICalendarState) {
  return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdventCalendar);
