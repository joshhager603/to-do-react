import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DatePicker from './DatePicker';
import Box from '@mui/material/Box';
import Radio from './Radio'
import ButtonStack from './ButtonStack';
import CompleteCheckbox from './CompleteCheckbox';
import dayjs from 'dayjs';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [priority, setPriority] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setDeadline(dayjs().format('MM/DD/YY'));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddLocal = () => {
    props.handleAdd(title, description, deadline, priority, 
                    <CompleteCheckbox 
                      title={title} 
                      handleUpdateOff={props.handleUpdateOff} 
                      handleUpdateOn={props.handleUpdateOn} 
                      handleUpdate={props.handleUpdate} 
                      handleDelete={props.handleDelete}
                    />, 
                    <ButtonStack 
                      title={title} 
                      handleDelete={props.handleDelete} 
                      handleUpdate={props.handleUpdate} 
                      handleUpdateOn={props.handleUpdateOn} 
                      handleUpdateOff={props.handleUpdateOff}
                      handleGetFields={props.handleGetFields}
                    />)
    setOpen(false);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); 
  };

  const handleDeadlineChange = (newValue) => {
    setDeadline(newValue);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div>
      <Button color='inherit' variant='outlined' onClick={handleClickOpen}>
        <ControlPointIcon />&nbsp;Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><ControlPointIcon />&nbsp;Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={e => handleTitleChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="description"
            fullWidth
            variant="outlined"
            value={description}
            onChange={e => handleDescriptionChange(e)}
          />
          <Box mt={2}>
            <DatePicker
              id='datepicker' 
              handleDeadlineChange={handleDeadlineChange}
              deadline={''}
              />
          </Box>
          <Box mt={2}>
            <Radio 
            id='radio'
            handlePriorityChange={handlePriorityChange}
            priority={'Low'} 
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddLocal}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
