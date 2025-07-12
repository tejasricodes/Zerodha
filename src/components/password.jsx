import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Password({value, onChange}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl
        sx={{
          m: 1,
          width: '35ch',
          '& .MuiOutlinedInput-root': {
            color: '#8A8A8A', // input text
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
          '& .MuiIconButton-root': {
            color: '#8A8A8A',
          },
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          value={value}
            onChange={onChange}
        />
      </FormControl>
    </Box>
  );
}
