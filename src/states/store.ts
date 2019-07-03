import { createStore, combineReducers } from 'redux';
import { calendarReducer, CalendarState } from 'states/calendar';

// fyi: https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510
export type State = CalendarState

const store = createStore(calendarReducer);

export default store;
