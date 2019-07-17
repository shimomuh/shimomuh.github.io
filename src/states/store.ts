import { createStore } from 'redux';
import { calendarReducer } from 'states/calendar';

// fyi: https://qiita.com/IzumiSy/items/b7d8a96eacd2cd8ad510
const store = createStore(calendarReducer);

export default store;
