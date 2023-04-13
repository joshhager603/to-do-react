import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function CompleteCheckbox(props){
    const [updateVisible, setUpdateVisible] = React.useState(true);

    const handleClick = () => {
        if(updateVisible){
            props.handleUpdateOff(props.title, props.handleDelete);
            setUpdateVisible(false);
        }
        else{
            props.handleUpdateOn(props.title, props.handleDelete, props.handleUpdate, props.handleUpdateOn, props.handleUpdateOff);
            setUpdateVisible(true);
        }
    };

    return(
        <Checkbox onClick={handleClick} />
    );
}