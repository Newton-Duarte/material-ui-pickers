import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import './App.css';

const IS_SUNDAY = 0;
const IS_SATURDAY = 6;

function filterWeekends(date) {
  return date.getDay() === IS_SUNDAY || date.getDay() === IS_SATURDAY;
}

function App() {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());

  return (
    <div className='App'>
      <h1>Material UI - Pickers</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          variant='inline'
          format='MM/dd/yyyy'
          label='Material Date Picker'
          value={date}
          onChange={setDate}
          shouldDisableDate={filterWeekends}
        />
        <KeyboardTimePicker
          variant='inline'
          format='HH:mm'
          label='Material Time Picker'
          value={time}
          onChange={setTime}
          minutesStep={30}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
