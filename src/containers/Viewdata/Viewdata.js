import React from 'react';
import DataContext from '../../context/DataContext/DataContext';
import { makeStyles, Card, ListItem, List, ListItemAvatar,ListItemText,Divider,Avatar } from '@material-ui/core';
import { Link} from 'react-router-dom';


function Viewdata(){
    
    const value = React.useContext(DataContext);
    const classes =useStyles({ urlBanner: 'images/bannerViewData.jpg' });
    console.log(value.favourite);
    var percentTitle = "Percent of sales:";
    
    
    
    return (
        <div className ={classes.app}>
 
      
        <div className ={classes.navPage}>
        <h1 className= {classes.nameStore}><Link to={ `/`} className={classes.nameStoreLink}> FLOWER STORE <img  className= {classes.nextHome} width="20" src="./images/next.png" alt="next"/> </Link></h1>   

        
        
        </div>
        
        <Card className={classes.containerList}>
        <h1 className= {classes.namePage}>YOUR FAVORITE FLOWERS</h1>   
        
        
        <List className={classes.root}>
        
        {value.favourite.map(function(item,i){
            return(
                
                <ListItem alignItems="flex-start" key={i} >
                
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.imgFlower}  key={i}/>
                </ListItemAvatar>
                
                <ListItemText 
                primary={item.flower}
                secondary={percentTitle+ " "+item.percent}
                />
                <Divider variant='inset'key={i} component="li" />
                
                </ListItem>
                
                
                );
            })}
            
            
            </List>
            
            
            
            
            </Card>
            </div>
            );
            
        }  
        
        const useStyles = makeStyles(theme => ({
            
            app:{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent:'center',
                alignContent: 'center',
                width: 'auto',
                height: '100vh',
                // overflowY: 'hidden',
                backgroundImage: (props) => `url(${props.urlBanner})`,
                backgroundSize: 'cover',
                transition: 'all 1s',
            },
            navPage:{
                flexDirection:'row',
                alignSelf: 'flex-end',
            },
            nextHome:{
                marginLeft: 10
            },
            
            namePage:{
                marginTop: 30,
                alignSelf: 'center',
                transition: 'all 1s',
                fontSize: 20,
                color: 'black',
                fontFamily:'Oswald',
             
            },
            nameStore:{
                display:'flex',
                alignSelf: 'flex-end',
                marginRight: 50,
                transition: 'all 1s',
                textDecoration: 'none',
                fontSize: 30,
                width: 'auto',
                color: 'white',
                fontFamily:'Oswald',
            },
            nameStoreLink:{
                display:'flex',
                alignSelf: 'flex-end',
                marginRight: 50,
                transition: 'all 1s',
                textDecoration: 'none',
                fontSize: 30,
                width: 'auto',
                color: 'white',
                fontFamily:'Oswald',
            },
            containerList:{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                width: 650,
                height: '80vh',
                opacity: '0.8',
                borderRadius: 20
            },
            contentList:{   
                display: 'flex',
                listStyleType: 'none',
                padding: 100,
                fontSize: 20,
                fontFamily:'Raleway',
            }        
            
            
            
            
            
            
        }));
        
        
        export default Viewdata;