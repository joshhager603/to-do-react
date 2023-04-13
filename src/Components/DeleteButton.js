import * as React from 'react';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function DeleteButton(props){
    const handleClick = () => {
        props.handleDeleteClick();
        props.handleDelete(props.title);
    };

    return(
        <div>
            <Button color='error' variant="contained" onClick={handleClick}><HighlightOffIcon />&nbsp;Delete</Button>
        </div>
    );  
}