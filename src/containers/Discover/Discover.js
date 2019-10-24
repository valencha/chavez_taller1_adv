import React from 'react';
import { makeStyles} from '@material-ui/core';
import EditPanel from '../../components/EditPanel/EditPanel';
import DataContext from '../../context/DataContext/DataContext';
import { Link} from 'react-router-dom';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory";

function Discover(props){
    
    const classes = useStyles();
    const menuClasses = menuStyles();
    const [srcMenu, setSrcMenu] = React.useState("/images/menu.png ");
    const [widthMenu, setWidthMenu] = React.useState(50);
    const [heightMenu, setHeightMenu] = React.useState(40);
    const [styleMenu, setStyleMenu] = React.useState(classes);
    const [open, setOpen] = React.useState(false);
    
    const value = React.useContext(DataContext);
    
    
    const handleClick = () => {
        setOpen(prev => !prev);
        setSrcMenu("/images/menu.png");
        
        setStyleMenu(classes);
        if(!open){
            setStyleMenu(menuClasses);
            setHeightMenu(30);
            setWidthMenu(35);
            setSrcMenu("/images/close.png");
        }
        
        
        
    };
    
    
    
    
    
    
    
    
    return(    
        
        <section className={classes.app}> 
        
        <div className={styleMenu.wrapper}>
        
        <div  className= {styleMenu.containMenu}>
        <img className= {classes.imgMenu} src={srcMenu} width={widthMenu}  height={heightMenu}alt="menu" onClick={handleClick}/>
        </div>
        
        
        {open ?   
            
            
            <div>
            
            <EditPanel 
            data={value.dataInitials}
            setData={value.setData}
            dataRoseCountry = {value.dataRoseCountry}
            dataSunflowerCountry = {value.dataSunflowerCountry}
            dataTulipCountry = {value.dataTulipCountry}
            dataLilyCountry = {value.dataLilyCountry}
            dataRoseColor= {value.dataRoseColor}
            dataSunflowerColor= {value.dataSunflowerColor}
            dataTulipColor= {value.dataTulipColor}
            dataLilyColor= {value.dataLilyColor}
            dataRoseSeason= {value.dataRoseSeason}
            dataSunflowerSeason= {value.dataSunflowerSeason}
            dataTulipSeason= {value.dataTulipSeason}
            dataLilySeason= {value.dataLilySeason}
            dataRoseHoliday= {value.dataRoseHoliday}
            dataSunflowerHoliday= {value.dataSunflowerHoliday}
            dataTulipHoliday= {value.dataTulipHoliday}
            dataLilyHoliday= {value.dataLilyHoliday}
            
            />
            
            </div>: null}           
            </div> 
            <div className ={styleMenu.contentRight}>
            <div className ={classes.navPage}>
            <h1 className= {classes.namePage}><Link to={ `/`} className={classes.namePage}> FLOWER STORE</Link></h1>           
            
            </div>
            
            <section className={classes.bodyContent}>
            <div className={classes.table}>
            
            <VictoryChart     colorScale={["tomato", "orange", "gold"]} theme={VictoryTheme.material} height={560} width={700} animate={{ duration: 2000, easing: "bounce" }} domainPadding={100}>
            <VictoryLabel  className="myLabel" width={700} text={value.dataSelected} x={350} y={30} textAnchor="middle"    style={{ myLabel: {fontSize: 120 } }}/>
            <VictoryBar     barRatio={0.8} data={value.data} x="quarter" y="dataY"
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
                width:400,  
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
            otherView:{
                position: 'absolute',
                color: 'black'
            },
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
                width:400,
                
                
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
           
                transition: 'all 1s',
                textDecoration:'none',
                color:'black'
            },
            
            
            containMenu:{
                width: 300,
                marginTop: 30,
                
                
            },
            
            imgMenu:{

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
                
            }, 
            bodyContent:{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',

            }, 
            
            
            
        }));
        
        export default Discover;