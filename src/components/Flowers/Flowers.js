import React from 'react';
import FlipMove from "react-flip-move";
import DataContext from '../../context/DataContext/DataContext';

function Flowers(props) {
    console.log('Dentro de tareas');
    const value = React.useContext(DataContext);
    const createFlower = (flower) => {
        return (
            <li key={value.dataSelected} >
                {value.dataSelected}
            </li>
        )
    }
   
    var listItems = value.favourite.map(createFlower);
    return (
        <ul>
            <FlipMove duration={250} easing="ease-out">
                {listItems}
            </FlipMove> 
        </ul>
    )
}

export default Flowers;