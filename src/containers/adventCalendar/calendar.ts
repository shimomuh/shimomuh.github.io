import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from 'states/store';
import { calendarActions } from 'actions/calendar';
import Calendar from 'components/adventCalendar/calendar';
import { CalendarModel } from 'models/calendar';

export interface CalendarActions {
  nextMonth: (model: CalendarModel) => Action<CalendarModel>;
  previousMonth: (model: CalendarModel) => Action<CalendarModel>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<CalendarModel>>) {
  return {
    nextMonth: (model: CalendarModel) => dispatch(calendarActions.nextMonth(model)),
    previousMonth: (model: CalendarModel) => dispatch(calendarActions.previousMonth(model))
  };
}

function mapStateToProps(state: State) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
