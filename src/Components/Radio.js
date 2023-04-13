import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
  let defaultValue = props.priority;

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Priority</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={e => props.handlePriorityChange(e)}
        defaultValue={defaultValue}
      >
        <FormControlLabel value="Low" control={<Radio />} label="Low" />
        <FormControlLabel value="Med" control={<Radio />} label="Med" />
        <FormControlLabel value="High" control={<Radio />} label="High" />
      </RadioGroup>
    </FormControl>
  );
}
