import React from 'react';
import { makeStyles  } from '@material-ui/core';
import { Link} from 'react-router-dom';


function Home(props){
    const classes = useStyles({ urlBanner: 'images/bannerHome.png' });
    return (
        <section className={classes.container}>
        <header className={classes.menu}> 
        <div className= {classes.indicator}>
        <img className={classes.indicatorPage} src='images/indicatorPage.png' alt='banner'/>
        </div>
        <h1 className={classes.title}>Home</h1>
        </header>
        <div className={classes.containName}>
        <h1 className={classes.namePage}>FLOWER<br></br>STORE
        </h1> 
        <p className={classes.desPage}>Discover the statistics so you can make the purchase of your flowers in a good season</p>
        
        <Link to={ `/discover`} className={classes.linkDiscover}>   <button  className={classes.btnDiscover}>  Discover</button></Link>
        
        
        
        </div>
        </section>
        
        );
    }
    const useStyles = makeStyles(theme => ({

        desPage:{
            color: 'white',
            fontFamily:'Raleway',
        },
        
        container:{
            display:'row',
            flexWrap: 'wrap',
            flexDirection:'column',
            width: 'auto',
            height: '100vh',
            // overflowY: 'hidden',
            backgroundImage: (props) => `url(${props.urlBanner})`,
            backgroundSize: 'cover',
            transition: 'all 1s'
        },
        menu:{
            display:'flex',
            height: 100,
            marginLeft: 100,
            alignContent:'flex-start',
            justifyContent:'flex-start',
            alignItems:'flex-end',
            justifyItems:'flex-end',
            flexDirection:'row',
            
        },
        indicatorPage:{
            width: 30,
            height: 200,
        },
        title:{
            color:'white',
            marginLeft:10,
            
        },
        containName:{
            width: 'auto',
            height:'auto',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            justifySelf:'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            
            
        },
        namePage:{
            display:'column',
            color:'white',
            height: 200,
            lineHeight: 0.9,
            order: 0,
            flexWrap: 'wrap',
            flex: '0 1 auto',
            justifySelf: 'flex-start',
            textAlign: 'center',
            fontSize: 170,
            whiteSpace: 'normal',
            fontFamily:'Oswald',
            
        },
        
        
        btnDiscover:{
            display: 'column',
            order: 0,
            marginTop: 20,
            flex: '0 1 auto',
            textAlign: 'center',
            alignSelf: 'center',
            justifySelf: 'flex-start',
            backgroundColor: 'transparent',
            borderColor: 'white',
            fontFamily:'Raleway',
            borderRadius: 20,
            alignItems: 'center',
            width: 200,
            height: 50,
            color: 'white',
            fontSize: 15,
            cursor: 'pointer',
            transition: 'all 1s',
            
            '&:hover':{
                backgroundColor: 'white',
                color: 'black',
                
                
            }
        },
        linkDiscover:{
            
            textDecoration: 'none',
            color: 'white',
            fontFamily:'Raleway',
            fontSize: 15,
            '&:hover':{
                color: 'black'
            }
        }
        
    }));
    export default Home;