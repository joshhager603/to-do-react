import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from './DatePicker';
import Box from '@mui/material/Box';
import Radio from './Radio'
import ButtonStack from './ButtonStack';
import CompleteCheckbox from './CompleteCheckbox';
import UpdateBar from './UpdateBar'
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

export default function UpdateDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [description, setDescription] = React.useState('');
    const [deadline, setDeadline] = React.useState('');
    const [priority, setPriority] = React.useState('');

    let fields = []

    const handleClickOpen = () => {
        setOpen(true);
        fields = props.handleGetFields(props.title);
        setDescription(fields[0]);
        setDeadline(fields[1]);
        setPriority(fields[2]);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdateLocal = () => {
        props.handleUpdate(props.title, description, deadline, priority, 
                            <CompleteCheckbox 
                                title={props.title} 
                                handleUpdateOff={props.handleUpdateOff} 
                                handleUpdateOn={props.handleUpdateOn} 
                                handleUpdate={props.handleUpdate} 
                                handleDelete={props.handleDelete}
                            />, 
                            <ButtonStack 
                                title={props.title} 
                                handleDelete={props.handleDelete} 
                                handleUpdate={props.handleUpdate} 
                                handleUpdateOn={props.handleUpdateOn} 
                                handleUpdateOff={props.handleUpdateOff}
                                handleGetFields={props.handleGetFields}
                                handleDeleteClick={props.handleDeleteClick}
                                handleUpdateClick={props.handleUpdateClick}
                            />);
        props.handleUpdateClick();
        setOpen(false);
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
            <Button color='primary' variant="contained" onClick={handleClickOpen}>
                <EditIcon />&nbsp;Update
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <UpdateBar />
                <DialogContent>
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
                        deadline={deadline}
                    />
                    </Box>
                    <Box mt={2}>
                    <Radio 
                    id='radio'
                    handlePriorityChange={handlePriorityChange} 
                    priority={priority}
                    />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button color='primary' variant='contained' onClick={handleUpdateLocal}><EditIcon />&nbsp;Edit</Button>
                    <Button color='error' variant='contained' onClick={handleClose}><DoNotDisturbAltIcon />&nbsp;Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
