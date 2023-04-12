import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteButton from './DeleteButton';


export default function ButtonStack(props) {
  return (
    <Stack spacing={0} direction="column">
      <Button color='primary' variant="contained"><EditIcon />&nbsp;Update</Button>
      <DeleteButton handleDelete={props.handleDelete} title={props.title}/>
    </Stack>
  );
}