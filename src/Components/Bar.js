import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import FormDialog from './FormDialog';
import IconButton from '@mui/material/IconButton';
import SuccessToaster from './SuccessToaster';

export default function ButtonAppBar(props) {
  const [deleteToasterOpen, setDeleteToasterOpen] = React.useState(false);
  const [updateToasterOpen, setUpdateToasterOpen] = React.useState(false);
  const [addToasterOpen, setAddToasterOpen] = React.useState(false);

  const handleDeleteClick = () => {
    setDeleteToasterOpen(true);
  };

  const handleUpdateClick = () => {
    setUpdateToasterOpen(true);
  }

  const handleAddClick = () => {
    setAddToasterOpen(true);
  }

  const handleDeleteToasterClose = (event, reason) => {
    if(reason === 'clickaway'){
        return;
    }

    setDeleteToasterOpen(false);
  };

  const handleUpdateToasterClose = (event, reason) => {
    if(reason === 'clickaway'){
        return;
    }

    setUpdateToasterOpen(false);
  };

  const handleAddToasterClose = (event, reason) => {
    if(reason === 'clickaway'){
        return;
    }

    setAddToasterOpen(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                disableRipple
                sx={{ mb: 0.5, pr: 1 }}
              ><MenuIcon /></IconButton>
                FRAMEWORKS
            </Typography>
            <FormDialog 
              handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete} 
              handleUpdate={props.handleUpdate} 
              handleUpdateOff={props.handleUpdateOff} 
              handleUpdateOn={props.handleUpdateOn}
              handleGetFields={props.handleGetFields}
              titleAdded={props.titleAdded}
              handleDeleteClick={handleDeleteClick}
              handleUpdateClick={handleUpdateClick}
              handleAddClick={handleAddClick}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <SuccessToaster open={deleteToasterOpen} handleToasterClose={handleDeleteToasterClose} message="Task successfully deleted" />
      <SuccessToaster open={updateToasterOpen} handleToasterClose={handleUpdateToasterClose} message="Task successfully updated" />
      <SuccessToaster open={addToasterOpen} handleToasterClose={handleAddToasterClose} message="Task successfully added" />
    </div>

  );
}
