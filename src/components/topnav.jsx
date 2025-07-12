import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Topnav({ tabLabels = [], defaultValue = '' }) {
  const [value, setValue] = React.useState(defaultValue || (tabLabels[0]?.value ?? ''));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', borderBottom: '1px solid #2a2a2a' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#ff5722',
            height: '2px',
            marginTop: '-2px',
          },
        }}
        variant="standard"
        sx={{
          minHeight: 40,
          '& .MuiTabs-flexContainer': {
            paddingLeft: 0,
            marginLeft: 0,
          },
          '& .MuiTab-root': {
            minWidth: 40,
            padding: '6px 16px',
            minHeight: 40,
            fontSize: '13px',
            textTransform: 'none',
            color: 'white',
            fontWeight: 400,
            '&.Mui-selected': {
              color: '#ff5722',
              fontWeight: 500,
            },
          },
        }}
      >
        {tabLabels.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
}
