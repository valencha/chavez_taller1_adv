import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/red';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import DataContext from '../../context/DataContext/DataContext';

const PinkRadio = withStyles({
  root: {
    color: grey[50],
    '&$checked': {
      color: grey[50],
      
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);


export default function FormControlLabelPosition(props) {
  const value = React.useContext(DataContext);
  const [checkedRadio1, setCheckedRadio1]= React.useState(false);
  const [checkedRadio2, setCheckedRadio2]= React.useState(false);
  
  const handleClick = event => {
    value.setInputSelected('radio');

    if(value.inputSelected !== 'radio'){
      setCheckedRadio1(false);
      setCheckedRadio2(false);
  }
  };
  
  
  const handleChange = event => {
    if(event.target.value === 'season'){
      console.log(event.target.value);
      setCheckedRadio1(true);
      setCheckedRadio2(false);
      
      if(value.dataSelected === 'Rose'){
        value.setData(props.dataRoseSeason);
      }
      
      if(value.dataSelected === 'Sunflower'){
        value.setData(props.dataSunflowerSeason);
      }
      
      if(value.dataSelected === 'Tulip'){
        value.setData(props.dataTulipSeason);
      }
      
      if(value.dataSelected === 'Lily'){
        value.setData(props.dataLilySeason);
      }
      
      
    }
    if(event.target.value === 'holiday'){
      setCheckedRadio2(true);
      setCheckedRadio1(false);
      console.log(event.target.value);
      
      if(value.dataSelected === 'Rose'){
        value.setData(props.dataRoseHoliday);
      }
      
      if(value.dataSelected === 'Sunflower'){
        value.setData(props.dataSunflowerHoliday);
      }
      
      if(value.dataSelected === 'Tulip'){
        value.setData(props.dataTulipHoliday);
      }
      
      if(value.dataSelected === 'Lily'){
        value.setData(props.dataLilyHoliday);
      }
      
      
    }
    
    
  };
  
  return (
    <FormControl component="fieldset">
    <RadioGroup aria-label="position" name="position"      onClick= {handleClick} onChange={handleChange} row>
    
    
    <FormControlLabel
    value="season"
    control={<PinkRadio color='default' />}
    label="Season"
    checked={checkedRadio1}
    labelPlacement="end"
    
    />
    
    <FormControlLabel
    value="holiday"
    checked={checkedRadio2}
    control={<PinkRadio color='primary' 
    />}
    label="Holidays"
    labelPlacement="end"
    />
    </RadioGroup>
    </FormControl>
    );
  }