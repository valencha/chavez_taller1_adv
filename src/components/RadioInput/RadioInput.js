import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/red';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const PinkRadio = withStyles({
    root: {
      color: grey[50],
      '&$checked': {
        color: grey[50],

      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);
  

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('season');



  const handleChange = event => {
    setValue(event.target.value);

  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

      
        <FormControlLabel
          value="season"
          control={<PinkRadio color='default' />}
          label="Season"
          labelPlacement="end"
          
        />

<FormControlLabel
          value="holiday"
          control={<PinkRadio color='primary' 
           />}
          label="Holidays"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}