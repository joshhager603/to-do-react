import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Picker(props) {
  const [value, setValue] = React.useState();

  const handleChange = (newValue) => {
    setValue(newValue);
    props.handleDeadlineChange(dayjs(newValue).format('MM/DD/YY'))
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      label='Deadline'
      value={value}
      onChange={(newValue) => handleChange(newValue)}
      />
    </LocalizationProvider>
  );
}
