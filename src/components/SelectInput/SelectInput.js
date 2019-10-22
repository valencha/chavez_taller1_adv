import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({

  root: {

  },

  input: {
    borderRadius: 10,
    position: 'relative',
    width: 200,
    outline: 'none',
    color: 'black',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      color: 'black',
      outline: 'none',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: theme.palette.background.paper,
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    outline: 'none',
  },
  margin: {

    outline: 'none',
  },
}));


  

export default function CustomizedSelects() {
  const classes = useStyles();

  const [country, setCountry] = React.useState('');


  const handleChange = event => {
    setCountry(event.target.value);
    console.log(event.target.value);

  };
  
  return (
    <form className={classes.root} autoComplete="on">
 
      <FormControl className={classes.margin}>
        <NativeSelect
          value={country}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
           <option value="">Choose a category</option>

          <option value={'country'}>Country</option>
          <option  value={'colors'}>Colors</option>
        </NativeSelect>
      </FormControl>
    </form>
  );
}
