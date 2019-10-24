import React from 'react';
import Home from '../Home/Home';
import {CssBaseline } from '@material-ui/core';
import DataContext from '../../context/DataContext/DataContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from '../Discover/Discover';
import Viewdata from '../Viewdata/Viewdata';

function App() {
    
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
    var dataTulipHoliday = [
        
        { quarter: 'Christmas Day', dataY: 100 },
        { quarter: 'Thanksgiving Day', dataY: 35 },
        { quarter: 'Mother`s Day', dataY: 40 },
        { quarter: 'Valentine`s Day', dataY: 20 },
    ];
    
    var dataLilyHoliday = [
        
        { quarter: 'Christmas Day', dataY: 20 },
        { quarter: 'Thanksgiving Day', dataY: 65 },
        { quarter: 'Mother`s Day', dataY: 60 },
        { quarter: 'Valentine`s Day', dataY: 90 },
    ];
    
    
    
    const [dataSelected, setDataSelected] = React.useState('EveryOne');
    const [inputSelected, setInputSelected] = React.useState("");
    const [ data, setData ] = React.useState(dataInitials);
    const [ favourite, setFavourite ] = React.useState([]);
    const [ imgAvatar, setImgAvatar ] = React.useState([]);
    const [ percent, setPercent ] = React.useState([]);

    
    const context = {
        
        data: data,
        imgAvatar: imgAvatar,
        percent: percent,
        setImgAvatar: setImgAvatar,
        setPercent: setPercent,
        favourite: favourite,
        setFavourite: setFavourite,
        dataInitials: dataInitials,
        dataRoseCountry : dataRoseCountry,
        dataRoseColor: dataRoseColor,
        dataRoseSeason : dataRoseSeason,
        dataRoseHoliday: dataRoseHoliday,
        dataSunflowerCountry : dataSunflowerCountry,
        dataSunflowerColor: dataSunflowerColor,
        dataSunflowerSeason : dataSunflowerSeason,
        dataSunflowerHoliday: dataSunflowerHoliday,
        dataTulipCountry : dataTulipCountry,
        dataTulipColor: dataTulipColor,
        dataTulipSeason : dataTulipSeason,
        dataTulipHoliday: dataTulipHoliday,
        dataLilyCountry : dataLilyCountry,
        dataLilyColor: dataLilyColor,
        dataLilySeason : dataLilySeason,
        dataLilyHoliday: dataLilyHoliday,
        setData: setData,
        dataSelected: dataSelected,
        setDataSelected: setDataSelected,
        inputSelected: inputSelected,
        setInputSelected: setInputSelected,
        
    }
    
    
    return (
        
        <Router> 
        <div>
        <DataContext.Provider value={context}>    
        <Route path="/" exact component ={Home}/>
        <Route path="/discover" component ={Discover }/>
        <Route path="/favourite" component ={Viewdata}/>
        </DataContext.Provider>

        
        <CssBaseline />
        </div>
        </Router>
        );
        
    }
    
    export default App;