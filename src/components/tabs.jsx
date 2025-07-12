import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import layersIcon from '../assets/layers.svg'; // Adjust path if needed

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

  return (
    <Box
      sx={{
        width: '460px',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #2a2a2a',
        position: 'relative',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#ff5722',
            height: '2px',
            top: 0,
          },
        }}
        variant="standard"
        sx={{
          minHeight: 48,
          '& .MuiTabs-flexContainer': {
            paddingLeft: 0,
            marginLeft: 0,
          },
          '& .MuiTab-root': {
            minWidth: 42,
            padding: '6px 8px',
            flexDirection: 'column-reverse',
            minHeight: 48,
            color: 'white',
            fontWeight: 400,
            '&.Mui-selected': {
              color: '#ff5722',
              fontWeight: 500,
            },
          },
        }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={label} value={label} label={(index + 1).toString()} />
        ))}
      </Tabs>

      {/* Right-aligned layers icon */}
      <Box sx={{ ml: 'auto', pr: 2 }}>
        <img src={layersIcon} alt="Layers" className="h-5 w-5" />
      </Box>
    </Box>
  );
}
