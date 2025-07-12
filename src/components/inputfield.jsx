import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({ value, onChange, defaultValue }) {
  return (
    <Box
      className="mb-[20px]"
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '35ch',
          input: {
            color: '#8A8A8A',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#8A8A8A',
            },
            '&:hover fieldset': {
              borderColor: '#8A8A8A',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8A8A8A',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#8A8A8A',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#8A8A8A',
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-search"
           value={value}
            onChange={onChange}
          label={defaultValue}
          
          type="search"
          sx={{
            '& input[type=search]::-webkit-search-cancel-button': {
              appearance: 'none',
              WebkitAppearance: 'none',
              display: 'none',
            },
          }}
        />
      </div>
    </Box>
  );
}
