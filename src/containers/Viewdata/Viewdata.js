import React from 'react';
import DataContext from '../../context/DataContext/DataContext';
import { makeStyles  } from '@material-ui/core';
import Flowers from '../../components/Flowers/Flowers';


function Viewdata(){
    
    const value = React.useContext(DataContext);
    const classes = useStyles();
    console.log(value.favourite);
    
    return (
        <div className ={classes.app}>
        <div className ={classes.navPage}>
        <h1 className= {classes.namePage}>FLOWER STORE</h1>           
        
        </div>
        <h1>SE HA GUARDADO EL INFORME DE  CON EXITO {value.favourite}</h1>
        
        </div>
        
        );
        
    }  
    
    const useStyles = makeStyles(theme => ({

        app:{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent:'space-between',
            alignContent: 'space-between',
        },
        
        namePage:{
            marginTop: 30,
            transition: 'all 1s',
        },
     
        
        
  
        
        
        
    }));
    
    
    export default Viewdata;