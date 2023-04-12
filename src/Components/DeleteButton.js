import * as React from 'react';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function DeleteButton(props){
    return(
        <Button color='error' variant="contained" onClick={() => props.handleDelete(props.title)}><HighlightOffIcon />&nbsp;Delete</Button>
    );  
}