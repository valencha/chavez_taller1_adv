import React from 'react';
import RadioInput from '../../components/RadioInput/RadioInput';
import SelectInput from '../../components/SelectInput/SelectInput';
import { makeStyles, Button} from '@material-ui/core';
import DataContext from '../../context/DataContext/DataContext';
import { Link} from 'react-router-dom';

function EditPanel(props){
    
    const classes = useStyles();
    const selectedRose = selectedRoseStyles();
    const selectedLily = selectedLilyStyles();
    const selectedSunflower = selectedSunflowerStyles();
    const selectedTulip = selectedTulipStyles();
    const [styleSelected, setStyleSelected] = React.useState(classes);
    const value = React.useContext(DataContext);
    var temp = localStorage.getItem("value.favourite");
    
    if(temp !== null){
        value.favourite=JSON.parse(temp);
    }
    
    function handleClickRose(){
        //   value.setData(props.dataRoseCountry);
        value.setData(props.data);
        value.setDataSelected('Rose');
        setStyleSelected(selectedRose);
        value.setInputSelected('');
        console.log(value.data);
        
        
    }
    
    function handleClickSunflower(){
        //value.setData(props.dataSunflowerCountry);
        value.setData(props.data);
        setStyleSelected(selectedSunflower);
        value.setDataSelected('Sunflower');
    }
    
    function handleClickTulip(){
        //  value.setData(props.dataTulipCountry);
        value.setData(props.data);
        setStyleSelected(selectedTulip);
        value.setDataSelected('Tulip');
    }
    
    function handleClickLily(){
        // value.setData(props.dataLilyCountry);
        value.setData(props.data);
        value.setDataSelected('Lily');
        setStyleSelected(selectedLily);
        
    }
    function handleClick(){
        
        
        if( value.dataSelected === 'Rose'){
            value.favourite.push({ flower: value.dataSelected, percent: 100+'%' , imgFlower:'/images/rose.png'});
   
        }
        
        if( value.dataSelected === 'Sunflower'){

            value.favourite.push({ flower: value.dataSelected, percent: 40 +'%', imgFlower:'/images/sunflower.png'});
        }
        if( value.dataSelected === 'Tulip'){
            value.favourite.push({ flower: value.dataSelected, percent: 60 +'%', imgFlower:'/images/tulip.png'});
            
        }
        if( value.dataSelected === 'Lily'){
            value.favourite.push({ flower: value.dataSelected, percent: 75+'%' , imgFlower:'/images/lily.png'});
        }
        
        localStorage.setItem("value.favourite", JSON.stringify(value.favourite));
       
    }
    
    
    return(
        
        
        <div className={classes.editPanel}>
        <h1 className={classes.panelTitle}>Look for flowers</h1>
        <h1 className={classes.panelSubt}>Type of flower</h1>
        
        <article className={classes.panelImages}>            
        <div className={classes.panelImg} onClick= {handleClickRose}>
        <img className={styleSelected.imgFlower}  src='/images/rose.png' alt='rose'/>
        <p className={classes.titleFlower} >Rose</p>
        </div>
        <div className={classes.panelImg}>
        <img className={styleSelected.imgFlower2} onClick= {handleClickSunflower} src='/images/sunflower.png' alt="sunflower"/>
        <p className={classes.titleFlower} >Sunflower</p>
        </div>
        <div className={classes.panelImg}>
        <img className={styleSelected.imgFlower3} onClick= {handleClickTulip}  src='/images/tulip.png' alt="tulip"/>
        <p className={classes.titleFlower} >Tulip</p>
        </div>
        <div className={classes.panelImg}>
        <img className={styleSelected.imgFlower4} onClick= {handleClickLily}  src='/images/lily.png' alt="lily"/>
        <p className={classes.titleFlower} >Lily</p>
        </div>
        
        </article>
        <h1 className={classes.panelSubt}>Availability by</h1>
        
        
        <SelectInput
        country= {props.country}
        dataRoseColor = {props.dataRoseColor}
        dataSunflowerColor = {props.dataSunflowerColor}
        dataTulipColor = {props.dataTulipColor}
        dataLilyColor = {props.dataLilyColor}
        dataRoseCountry = {props.dataRoseCountry}
        dataSunflowerCountry = {props.dataSunflowerCountry}
        dataTulipCountry = {props.dataTulipCountry}
        dataLilyCountry = {props.dataLilyCountry}
        
        />
        <h1 className={classes.panelSubt}>Sales by</h1>
        
        <div className={classes.panelRadio}> <RadioInput
        dataRoseSeason= {props.dataRoseSeason}
        dataSunflowerSeason= {props.dataSunflowerSeason}
        dataTulipSeason= {props.dataTulipSeason}
        dataLilySeason= {props.dataLilySeason}
        dataRoseHoliday= {props.dataRoseHoliday}
        dataSunflowerHoliday= {props.dataSunflowerHoliday}
        dataTulipHoliday= {props.dataTulipHoliday}
        dataLilyHoliday= {props.dataLilyHoliday}
        
        /> </div>
        
        <Button variant="outlined" className={classes.panelButton} onClick={handleClick} ><Link to={ `/favourite`} className={classes.linkDiscover}> Add to favorites</Link>
        </Button>
        
        
        </div> 
        
        );
        
        
    }
    
    const useStyles = makeStyles(theme => ({
        
        
        editPanel:{
            transition: 'all 1s',
            position: 'absolute',
            display:'flex',
            flexDirection:'column',
            order: 0,
            color: 'white',
            border: 'none',
            width:400,
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
        
        imgFlower2:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
        
        imgFlower3:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower4:{
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
            
            
        },
        linkDiscover:{
            textDecoration: 'none',
            color: 'white',
            
            
        }
        
        
    }));
    
    
    const selectedRoseStyles = makeStyles(theme => ({
        
        imgFlower:{
            display:'flex',
            border: '5px solid #DB7093',
            width: 54,
            height: 48,
        },
        imgFlower2:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
        imgFlower3:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
        imgFlower4:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
    }));
    
    const selectedSunflowerStyles = makeStyles(theme => ({
        imgFlower:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
        imgFlower2:{
            display:'flex',
            border: '5px solid #DB7093',
            width: 54,
            height: 48,
        },
        imgFlower3:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower4:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
    }));
    
    const selectedTulipStyles = makeStyles(theme => ({
        imgFlower:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower2:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
        imgFlower3:{
            display:'flex',
            border: '5px solid #DB7093',
            width: 54,
            height: 48,
        },
        imgFlower4:{
            display:'flex',
            width: 54,
            height: 48,
        },
        
    }));
    
    
    const selectedLilyStyles = makeStyles(theme => ({
        imgFlower:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower2:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower3:{
            display:'flex',
            width: 54,
            height: 48,
        },
        imgFlower4:{
            display:'flex',
            border: '5px solid #DB7093',
            width: 54,
            height: 48,
        },
        
    }));
    export default EditPanel