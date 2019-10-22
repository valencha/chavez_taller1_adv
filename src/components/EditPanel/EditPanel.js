import React from 'react';
import RadioInput from '../../components/RadioInput/RadioInput';
import SelectInput from '../../components/SelectInput/SelectInput';
import { makeStyles, Button} from '@material-ui/core';
import DataContext from '../../context/DataContext/DataContext';


function EditPanel(props){

    const classes = useStyles();
    const value = React.useContext(DataContext);

    function handleClickRose(){
        value.setData(props.dataRoseCountry);

    }
    
    function handleClickSunflower(){
        value.setData(props.dataSunflowerCountry);
        
    }
    
    function handleClickTulip(){
        value.setData(props.dataTulipCountry);
        
    }
    
    function handleClickLily(){
        value.setData(props.dataLilyCountry);

    }

    
    return(
        
      
        <div className={classes.editPanel}>
        <h1 className={classes.panelTitle}>Look for flowers</h1>
        <h1 className={classes.panelSubt}>Type of flower</h1>
        
        <article className={classes.panelImages}>            
        <div className={classes.panelImg} onClick= {handleClickRose}>
        <img className={classes.imgFlower}  src='/images/rose.png' alt='rose'/>
        <p className={classes.titleFlower} >Rose</p>
        </div>
        <div className={classes.panelImg}>
        <img className={classes.imgFlower} onClick= {handleClickSunflower} src='/images/sunflower.png' alt="sunflower"/>
        <p className={classes.titleFlower} >Sunflower</p>
        </div>
        <div className={classes.panelImg}>
        <img className={classes.imgFlower} onClick= {handleClickTulip}  src='/images/tulip.png' alt="tulip"/>
        <p className={classes.titleFlower} >Tulip</p>
        </div>
        <div className={classes.panelImg}>
        <img className={classes.imgFlower} onClick= {handleClickLily}  src='/images/lily.png' alt="lily"/>
        <p className={classes.titleFlower} >Lily</p>
        </div>

        </article>
        <h1 className={classes.panelSubt}>Availability by</h1>
        
        
        <SelectInput/>
        <h1 className={classes.panelSubt}>Sales by</h1>
        
        <div className={classes.panelRadio}> <RadioInput/> </div>
        
        <Button variant="outlined" className={classes.panelButton}>Save flower</Button>
        
        
        </div> 

        );
        
        
    }
    
    const useStyles = makeStyles(theme => ({
        
        
        editPanel:{
            position: 'absolute',
            display:'flex',
            flexDirection:'column',
            order: 0,
            color: 'white',
            border: 'none',
            width: 320,
            right: 0,
            left: 0,
            flex: '1 1 auto',
            alignSelf: 'auto',
            padding: 20,
            
        },
        panelTitle:{
            textAlign:'center',
        },
        
        panelSubt:{
            marginLeft:10,
        },
        panelSelect:{
            marginLeft:10,
        },
        
        panelRadio:{
            marginLeft:10,
            
        },
        
        panelImages:{
            display: 'flex',
            flexDirection: 'row',   
            justifyContent: 'space-between',
            justifyItems: 'flex-start',
            flexBasis: 100,   
            height: 161, 
            padding: 20,    
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',

            
        },
        
        panelImg:{
            display: 'flex',
            flexBasis: 25,
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
        },
        
        imgFlower:{
            display:'flex',
            width: 54,
            height: 48,
        },
        titleFlower:{
            textAlign: 'center',
        },
        panelButton:{
            color: 'white',
            borderColor: 'white',
            borderRadius: 20,
            width: 200,
            height: 46,
            alignSelf: 'center',
            marginTop: 20,
            
        }
        
        
    }));
    export default EditPanel