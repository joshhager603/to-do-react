import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function ButtonStack() {
  return (
    <Stack spacing={0} direction="column">
      <Button color='primary' variant="contained"><EditIcon />&nbsp;Update</Button>
      <Button color='error' variant="contained"><HighlightOffIcon />&nbsp;Delete</Button>
    </Stack>
  );
}