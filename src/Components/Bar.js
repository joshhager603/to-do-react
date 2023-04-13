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
              handleDeleteClick={props.handleDeleteClick}
              handleUpdateClick={props.handleUpdateClick}
              handleAddClick={props.handleAddClick}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <SuccessToaster open={props.deleteToasterOpen} handleToasterClose={props.handleDeleteToasterClose} message="Task successfully deleted" />
      <SuccessToaster open={props.updateToasterOpen} handleToasterClose={props.handleUpdateToasterClose} message="Task successfully updated" />
      <SuccessToaster open={props.addToasterOpen} handleToasterClose={props.handleAddToasterClose} message="Task successfully added" />
    </div>

  );
}
