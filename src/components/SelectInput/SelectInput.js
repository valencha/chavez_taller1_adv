import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import DataContext from '../../context/DataContext/DataContext';

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




export default function CustomizedSelects(props) {
    const value = React.useContext(DataContext);
    const classes = useStyles();
  
    const handleClick = event => {
        value.setInputSelected('select');

        if(value.inputSelected !== 'select'){
            event.target.value ='';
        }
   
   
    
        
        
    };
    
    const handleChange = event => {
        value.setInputSelected('select');
   
   
        if(event.target.value === 'color'){
            console.log(event.target.value);
            
            if(value.dataSelected === 'Rose'){
                value.setData(props.dataRoseColor);
            }
            
            if(value.dataSelected === 'Sunflower'){
                value.setData(props.dataSunflowerColor);
            }
            
            if(value.dataSelected === 'Tulip'){
                value.setData(props.dataTulipColor);
            }
            
            if(value.dataSelected === 'Lily'){
                value.setData(props.dataLilyColor);
            }
            
            
        }
        else if(event.target.value === 'country'){
            console.log(event.target.value);
            
            if(value.dataSelected === 'Rose'){
                value.setData(props.dataRoseCountry);
            }
            
            if(value.dataSelected === 'Sunflower'){
                value.setData(props.dataSunflowerCountry);
            }
            
            if(value.dataSelected === 'Tulip'){
                value.setData(props.dataTulipCountry);
            }
            
            if(value.dataSelected === 'Lily'){
                value.setData(props.dataLilyCountry);
            }
            
            
        }
        
        
    };
    
    return (
        <form className={classes.root} autoComplete="on">
        
        <FormControl className={classes.margin}>
        <NativeSelect
        onChange={handleChange}
        onClick={handleClick}
        input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
        <option value=''>Choose a category</option>
        
        <option value='country'>Country</option>
        <option  value='color'>Color</option>
        </NativeSelect>
        </FormControl>
        </form>
        
        );
    }
    