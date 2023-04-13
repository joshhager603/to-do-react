import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DatePicker from './DatePicker';
import Box from '@mui/material/Box';
import Radio from './Radio'
import ButtonStack from './ButtonStack';
import CompleteCheckbox from './CompleteCheckbox';
import dayjs from 'dayjs';
import AddBar from './AddBar';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [titleHelper, setTitleHelper] = React.useState('');
  const [desError, setDesError] = React.useState(false);
  const [desHelper, setDesHelper] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setDeadline(dayjs().format('MM/DD/YY'));
    setPriority('Low');
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setDescription('');
    setTitleError(false);
    setTitleHelper('');
    setDesError(false);
    setDesHelper('');
  };

  const validate = () => {
   let valid = true;

  setTitleError(false);
  setTitleHelper('');
  setDesError(false);
  setDesHelper('');

   if(title === ''){
    valid = false;
    setTitleError(true);
    setTitleHelper('Must include a title');
   } 
   else if(props.titleAdded(title)){
    valid = false;
    setTitleError(true);
    setTitleHelper('Duplicate title');
   }

   if(description === ''){
    valid = false;
    setDesError(true);
    setDesHelper('Must include a description');
   }

   if(valid){
    handleAddLocal();
   }
   else{
    console.log('invalid input');
   }

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
                      handleDeleteClick={props.handleDeleteClick}
                      handleUpdateClick={props.handleUpdateClick}
                    />)
    props.handleAddClick();
    handleClose();
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
        <AddBar />
        <DialogContent>
          <TextField
            autoFocus
            error={titleError}
            helperText={titleHelper}
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
            error={desError}
            helperText={desHelper}
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
          <Button color='primary' variant='contained'onClick={validate}><ControlPointIcon />&nbsp;Add</Button>
          <Button color='error' variant='contained' onClick={handleClose}><DoNotDisturbAltIcon />&nbsp;Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
