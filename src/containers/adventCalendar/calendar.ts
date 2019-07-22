import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ICalendarState } from 'states/calendar';
import { calendarActions } from 'actions/calendar';
import Calendar from 'components/adventCalendar/calendar';
import { CalendarModel } from 'models/calendar';

export interface ICalendarActions {
  nextMonth: (model: CalendarModel) => Action<CalendarModel>;
  previousMonth: (model: CalendarModel) => Action<CalendarModel>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<CalendarModel>>) {
  return {
    nextMonth: (model: CalendarModel) => dispatch(calendarActions.nextMonth(model)),
    previousMonth: (model: CalendarModel) => dispatch(calendarActions.previousMonth(model))
  };
}

function mapStateToProps(state: ICalendarState) {
  return { ...state };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
