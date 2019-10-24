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

                <button  className={classes.btnDiscover}>  <Link to={ `/discover`} className={classes.linkDiscover}>Discover</Link></button>


           
             </div>
        </section>
        
        );
    }
    const useStyles = makeStyles(theme => ({
        
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
            lineHeight: 0.8,
            order: 0,
            flexWrap: 'wrap',
            flex: '0 1 auto',
            justifySelf: 'flex-start',
            textAlign: 'center',
            fontSize: 170,
            whiteSpace: 'normal',
  

        },
     
    
        btnDiscover:{
            display: 'column',
            order: 0,
            flex: '0 1 auto',
            textAlign: 'center',
            alignSelf: 'center',
            justifySelf: 'flex-start',
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            width: 200,
            height: 50,
            color: 'white',
            cursor: 'pointer',
        },
         linkDiscover:{
             textDecoration: 'none',
             color: 'white',
             fontSize: 15,
         }
        
    }));
    export default Home;