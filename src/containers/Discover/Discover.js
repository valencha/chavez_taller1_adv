import React from 'react';
import { makeStyles} from '@material-ui/core';
import EditPanel from '../../components/EditPanel/EditPanel';
import DataContext from '../../context/DataContext/DataContext';
import { VictoryBar, VictoryChart } from "victory";

function Discover(props){
    var dataInitials = [
        
        { quarter: 'Rose', dataY: 100 },
        { quarter: 'Sunflower', dataY: 40 },
        { quarter: 'Tulip', dataY: 60 },
        { quarter: 'Lily', dataY: 75 },

    ];
    var dataRoseCountry = [
        
        { quarter: 'Colombia', dataY: 80 },
        { quarter: 'Belgium', dataY: 30 },
        { quarter: 'EUU', dataY: 70 },
        { quarter: 'Canada', dataY: 50 },
    ];
    
    var dataSunflowerCountry = [
        
        { quarter: 'Ukraine', dataY: 100 },
        { quarter: 'Russia', dataY: 80 },
        { quarter: 'Argentina', dataY: 70 },
        { quarter: 'China', dataY: 90 },
    ];

    var dataTulipCountry = [
        
        { quarter: 'Canada', dataY: 70 },
        { quarter: 'England', dataY: 55 },
        { quarter: 'Netherlands', dataY: 100 },
        { quarter: 'Belgium', dataY: 60 },
    ];

    var dataLilyCountry = [
        
        { quarter: 'EEUU', dataY: 60 },
        { quarter: 'Mexico', dataY: 80 },
        { quarter: 'Ecuador', dataY: 65 },
        { quarter: 'Belgium', dataY: 40 },
    ];
    
    var dataRoseColor = [
        
        { quarter: 'Red', dataY: 100 },
        { quarter: 'Yellow', dataY: 65 },
        { quarter: 'Blue', dataY: 20 },
        { quarter: 'White', dataY: 60 },
    ];
    
    var dataSunflowerColor= [
        
        { quarter: 'Red', dataY: 15 },
        { quarter: 'Yellow', dataY: 100 },
        { quarter: 'Orange', dataY: 40 },
        { quarter: 'White', dataY: 20 },
    ];

    var dataTulipColor = [
        
        { quarter: 'Purple', dataY: 70 },
        { quarter: 'Yellow', dataY: 55 },
        { quarter: 'Pink', dataY: 90 },
        { quarter: 'Blue', dataY: 30 },
    ];

    var dataLilyColor = [
        
        { quarter: 'Red', dataY: 60 },
        { quarter: 'White', dataY: 15 },
        { quarter: 'Pink', dataY: 100 },
        { quarter: 'Yellow', dataY: 20 },
    ];
    var dataRoseSeason = [
        
        { quarter: 'Winter', dataY: 10 },
        { quarter: 'Spring', dataY: 80 },
        { quarter: 'Summer', dataY: 40 },
        { quarter: 'Fall', dataY: 0 },
    ];
    var dataSunflowerSeason = [
        
        { quarter: 'Winter', dataY: 10 },
        { quarter: 'Spring', dataY: 80 },
        { quarter: 'Summer', dataY: 40 },
        { quarter: 'Fall', dataY: 15 },
    ];
    var dataTulipSeason = [
        
        { quarter: 'Winter', dataY: 80 },
        { quarter: 'Spring', dataY: 30 },
        { quarter: 'Summer', dataY: 70 },
        { quarter: 'Fall', dataY: 57 },
    ];
 
    var dataLilySeason = [
        
        { quarter: 'Winter', dataY: 20 },
        { quarter: 'Spring', dataY: 100 },
        { quarter: 'Summer', dataY: 70 },
        { quarter: 'Fall', dataY: 57 },
    ];
 
    var dataRoseHoliday = [
        
        { quarter: 'Christmas Day', dataY: 50 },
        { quarter: 'Thanksgiving Day', dataY: 65 },
        { quarter: 'Mother`s Day', dataY: 80 },
        { quarter: 'Valentine`s Day', dataY: 100 },
    ];
    var dataSunflowerHoliday = [
        
        { quarter: 'Christmas Day', dataY: 10 },
        { quarter: 'Thanksgiving Day', dataY: 45 },
        { quarter: 'Mother`s Day', dataY: 100 },
        { quarter: 'Valentine`s Day', dataY: 100 },
    ];
    var dataTulipSeason = [
        
        { quarter: 'Christmas Day', dataY: 100 },
        { quarter: 'Thanksgiving Day', dataY: 35 },
        { quarter: 'Mother`s Day', dataY: 40 },
        { quarter: 'Valentine`s Day', dataY: 20 },
    ];
 
    var dataLilySeason = [
        
        { quarter: 'Christmas Day', dataY: 50 },
        { quarter: 'Thanksgiving Day', dataY: 65 },
        { quarter: 'Mother`s Day', dataY: 80 },
        { quarter: 'Valentine`s Day', dataY: 100 },
    ];
    
    
    var dataSunflower = [
        {
            "country":"Ukraine",
            "season":"Winter",
            "holiday":"Christmas Day",
            "color":"Red",
            "var1": "100",
            "var2": "45",
            "var3": "80",
            "var4": "20",
        },
        
        {
            "country":"Russia",
            "season":"Spring",
            "holiday":"Thanksgiving Day",
            "color":"Yellow",
            "var1": "80",
            "var2": "30",
            "var3": "65",
            "var4": "45",
        },
        {
            "country":"Argentina",
            "season":"Summer",
            "holiday":"Mother's Day",
            "color":"Blue",
            "var1": "70",
            "var2": "10",
            "var3": "55",
            "var4": "30",
        },
        
        {
            "country":"China",
            "season":"Fall",
            "holiday":"Valentine's Day",
            "color":"White",
            "var1": "90",
            "var2": "56",
            "var3": "89",
            "var4": "60",
        },
        
        
        
    ];
    
    var dataTulip = [
        {
            "country":"Ukraine",
            "season":"Winter",
            "holiday":"Christmas Day",
            "color":"Red",
            "var1": "100",
            "var2": "45",
            "var3": "80",
            "var4": "20",
        },
        
        {
            "country":"Russia",
            "season":"Spring",
            "holiday":"Thanksgiving Day",
            "color":"Yellow",
            "var1": "80",
            "var2": "30",
            "var3": "65",
            "var4": "45",
        },
        {
            "country":"Argentina",
            "season":"Summer",
            "holiday":"Mother's Day",
            "color":"Blue",
            "var1": "70",
            "var2": "10",
            "var3": "55",
            "var4": "30",
        },
        
        {
            "country":"China",
            "season":"Fall",
            "holiday":"Valentine's Day",
            "color":"White",
            "var1": "90",
            "var2": "56",
            "var3": "89",
            "var4": "60",
        },
        
        
        
    ];
    
    var dataLily = [
        {
            "country":"EEUU",
            "season":"Winter",
            "holiday":"Christmas Day",
            "color":"Red",
            "var1": "100",
            "var2": "45",
            "var3": "80",
            "var4": "20",
        },
        
        {
            "country":"Canada",
            "season":"Spring",
            "holiday":"Thanksgiving Day",
            "color":"Yellow",
            "var1": "30",
            "var2": "50",
            "var3": "70",
            "var4": "85",
        },
        {
            "country":"Argentina",
            "season":"Summer",
            "holiday":"Mother's Day",
            "color":"Blue",
            "var1": "70",
            "var2": "10",
            "var3": "55",
            "var4": "30",
        },
        
        {
            "country":"England",
            "season":"Fall",
            "holiday":"Valentine's Day",
            "color":"White",
            "var1": "30",
            "var2": "56",
            "var3": "89",
            "var4": "60",
        },
        
        
        
    ];
    
  
    
    
    const classes = useStyles();
    const menuClasses = menuStyles();
    const [srcMenu, setSrcMenu] = React.useState("/images/menu.png ");
    const [styleMenu, setStyleMenu] = React.useState(classes);
    const [open, setOpen] = React.useState(false);
    const [ data, setData ] = React.useState(dataInitials);
    
    
    const context = {
        
        data: data,
        setData: setData,
        
    }
    
    console.log(data);
    const handleClick = () => {
        setOpen(prev => !prev);
        setSrcMenu("/images/menu.png");
        setStyleMenu(classes);
        if(!open){
            setStyleMenu(menuClasses);
            setSrcMenu("/images/menuOpen.png");
        }
        
        
        
    };
    
    return(    
        
        <section className={classes.app}> 
        
        <div className={styleMenu.wrapper}>
        
        <div  className= {styleMenu.containMenu}>
        <img className= {classes.imgMenu} src={srcMenu} alt="menu" onClick={handleClick}/>
        </div>
        
        
        {open ?   
            
            
            <div>
            <DataContext.Provider value={context}> 
            <EditPanel 
            setData={setData}
            dataRoseCountry = {dataRoseCountry}
            dataSunflowerCountry = {dataSunflowerCountry}
            dataTulipCountry = {dataTulipCountry}
            dataLilyCountry = {dataLilyCountry}
            />
            </DataContext.Provider>
            </div>: null}           
            </div> 
            <div className ={styleMenu.contentRight}>
            <div className ={classes.navPage}>
            <h1 className= {classes.namePage}>FLOWER STORE</h1>           
            
            </div>
            
            <section className={classes.bodyContent}>
            <div className={classes.table}>

            <VictoryChart height={560} width={700} animate={{ duration: 2000, easing: "bounce" }} domainPadding={100}>
            <VictoryBar data={data} x="quarter" y="dataY"
                     style={{ data: { fill: data => (data.y > 2 ? "#FBC530" : "#FBC530") } }} 
            />
            </VictoryChart>

            
            </div>
            
            </section>
            
            </div>
            
            
            
            </section>
            
            );
        }
        
        const menuStyles = makeStyles(theme => ({
            wrapper:{
                backgroundColor: 'black',
                width: 300,
                height: '100vh',
                transition: 'all 1s',
            },
            
            title:{
                color:'white',
                marginLeft:10,
                
            },
            containMenu:{
                marginTop: 30,
                width: 270,
                
                
            },
            contentRight:{
                
                order: 0,
                justifyContent: 'center',
                flex: '1 1 auto',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 1s',
            },
            
            
            
        }));
        const useStyles = makeStyles(theme => ({
            app:{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent:'space-between',
                alignContent: 'space-between',
            },
            
            wrapper:{
                justifyContent: 'flex-start',
                flexDirection:'column',
                alignSelf: 'flex-start',
                
                
            },
            contentRight:{
                position: 'absolute',
                left:400,
                order: 0,
                justifyContent: 'center',
                flex: '1 1 auto',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'all 1s',
                
            },
            
            namePage:{
                marginTop: 30,
                transition: 'all 1s',
            },
            
            
            containMenu:{
                width: 300,
                marginTop: 30,
                
                
            },
            
            imgMenu:{
                width: 41,
                height: 28,
                marginLeft: 35,
                cursor: 'pointer',
                
                
            },
            
            
            table:{
                marginTop: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent:'center',
                flexWrap: 'wrap',
                alignSelf: 'center',
                transition: 'all 1s',
                
            }, 
            bodyContent:{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                transition: 'all 1s',
            }, 
            
            
            
        }));
        
        export default Discover;