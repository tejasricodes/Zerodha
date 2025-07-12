import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="currentvalue" // Set default selection
      >
        {[
          { value: 'currentvalue', label: 'Current value' },
          { value: 'investmentvalue', label: 'Investment value' },
          { value: 'p&l', label: 'P&L' },
        ].map(({ value, label }) => (
          <FormControlLabel
            key={value}
            value={value}
            control={
              <Radio
                size="small"
                sx={{
                  color: '#2a2a2a',
                  '&.Mui-checked': {
                    color: '#4dabf5', // Lighter shade of blue
                  },
                  transform: 'scale(0.75)',
                  padding: '4px',
                }}
              />
            }
            label={<span className="text-xs text-gray-400">{label}</span>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
