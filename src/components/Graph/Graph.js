import React from 'react';
import * as d3 from 'd3';
import DataContext from '../../context/DataContext/DataContext';

function Lollipop(props){
  const parentRef = React.useRef();
  const svgVars = React.useRef();
  // Parse the Data
  const value = React.useContext(DataContext);

  React.useEffect(() =>{
    var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 560 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
    
    
    // append the svg object to the body of the page
    var svg = d3.select(parentRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");
    
    // Initialize the X axis
    var x = d3.scaleBand()
    .range([ 0, width ])
    .padding(1);
    var xAxis = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    
    // Initialize the Y axis
    var y = d3.scaleLinear()
    .range([ height, 0]);
    var yAxis = svg.append("g")
    .attr("class", "myYaxis")
    
    svgVars.current = {
      svg: svg,
      x,
      y,
      xAxis,
      yAxis
    };
  }, );
  
  React.useEffect(() => {
    var { svg, x, y, xAxis, yAxis } = svgVars.current;

    // X axis
    x.domain(props.data.map(function(d) {return d[props.category];}))
    xAxis.transition().duration(1000).call(d3.axisBottom(x))

    // Add Y axis
    y.domain([0, d3.max(props.data, function(d) { return + d[props.selectedVar] }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));
    
    // variable u: map data to existing circle
    var j = svg.selectAll(".myLine")
    .data(props.data)
    // update lines
    j
    .enter()
    .append("line")
    .attr("class", "myLine")
    .merge(j)
    .transition()
    .duration(1000)
    .attr("x1", function(d) {  return x(d[props.category]); })
    .attr("x2", function(d) { return x(d[props.category]); })
    .attr("y1", y(0))
    .attr("y2", function(d) { return y(d[props.selectedVar]); })
    .attr("stroke", "grey")
    
    
    // variable u: map data to existing circle
    
    var u = svg.selectAll('circle')
    .data(props.data)
    // update bars
    u
    .enter()
    .append("circle")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("cx", function(d) { return x(d[props.category]); })
    .attr("cy", function(d) { return y(d[props.selectedVar]); })
    .attr("r", 8)
    .attr("fill", "#454361");
    
  },)
  
  /*
  
  function handleChangeVar1(){
    setCurrentCategory('country');
    setCurrentVar('var1');
  }
  function handleChangeVar2(){
    setCurrentCategory('season');
    setCurrentVar('var2');
  }
  function handleChangeVar3(){
    setCurrentCategory('holiday');
    setCurrentVar('var3');
  }
  
  function handleChangeVar4(){
    setCurrentCategory('color');
    setCurrentVar('var4');
  }
  
  function handleChangeData(){
    setCurrentData(dataSunflower);
  }
  <button onClick={handleChangeVar1}>Pais</button>
  <button onClick={handleChangeVar2}>Estación</button>  
  <button onClick={handleChangeVar3}>Festividades</button>  
  <button onClick={handleChangeVar4}>color</button>  
  <button onClick={handleChangeData}>changeData</button>  
  
  */
  
  
  return( <div ref = {parentRef}>
    
    
    </div>
    );
    
    
  }
  export default Lollipop;