import React from 'react';



const DataContext = React.createContext({
  
  data:null,
  setData: () => null, 
  dataSelected:null,
  setDataSelected: () => null,
  inputSelected:null,
  setInputSelected: () => null,
  

});

export default DataContext;
