import * as React from 'react';
import Stack from '@mui/material/Stack';
import DeleteButton from './DeleteButton';
import UpdateDialog from './UpdateDialog';


export default function ButtonStack(props) {
  return (
    <Stack spacing={0} direction="column">
      <UpdateDialog handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} title={props.title}/>
      <DeleteButton handleDelete={props.handleDelete} title={props.title}/>
    </Stack>
  );
}