import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function toUTC(date){
  date = date.replace('/', '-');
  date = date.replace('/', '-');
  return date;
}

export default function Picker(props) {
  const [value, setValue] = React.useState();
  let deadlineDayjs = dayjs();

  if(props.deadline !== ''){
    deadlineDayjs = dayjs(toUTC(props.deadline));
  }

  const handleChange = (newValue) => {
    setValue(newValue);
    props.handleDeadlineChange(dayjs(newValue).format('MM/DD/YY'))
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      label='Deadline'
      defaultValue={deadlineDayjs}
      value={value}
      onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}
