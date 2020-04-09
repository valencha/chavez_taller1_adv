(this["webpackJsonptalle1-chavez"]=this["webpackJsonptalle1-chavez"]||[]).push([[0],{184:function(e,a,t){e.exports=t(295)},294:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(46),o=t.n(r),i=t(16),s=t(325),d=t(34);var c=Object(s.a)((function(e){return{desPage:{color:"white",fontFamily:"Raleway"},container:{display:"row",flexWrap:"wrap",flexDirection:"column",width:"auto",height:"100vh",backgroundImage:function(e){return"url(".concat(e.urlBanner,")")},backgroundSize:"cover",transition:"all 1s"},menu:{display:"flex",height:100,marginLeft:100,alignContent:"flex-start",justifyContent:"flex-start",alignItems:"flex-end",justifyItems:"flex-end",flexDirection:"row"},indicatorPage:{width:30,height:200},title:{color:"white",marginLeft:10},containName:{width:"auto",height:"auto",display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"flex-start",justifySelf:"flex-start",alignContent:"center",alignItems:"center"},namePage:{display:"column",color:"white",height:200,lineHeight:.9,order:0,flexWrap:"wrap",flex:"0 1 auto",justifySelf:"flex-start",textAlign:"center",fontSize:170,whiteSpace:"normal",fontFamily:"Oswald"},btnDiscover:{display:"column",order:0,marginTop:20,flex:"0 1 auto",textAlign:"center",alignSelf:"center",justifySelf:"flex-start",backgroundColor:"transparent",borderColor:"white",fontFamily:"Raleway",borderRadius:20,alignItems:"center",width:200,height:50,color:"white",fontSize:15,cursor:"pointer",transition:"all 1s","&:hover":{backgroundColor:"white",color:"black"}},linkDiscover:{textDecoration:"none",color:"white",fontFamily:"Raleway",fontSize:15,"&:hover":{color:"black"}}}})),u=function(e){var a=c({urlBanner:"images/bannerHome.png"});return n.a.createElement("section",{className:a.container},n.a.createElement("header",{className:a.menu},n.a.createElement("div",{className:a.indicator},n.a.createElement("img",{className:a.indicatorPage,src:"images/indicatorPage.png",alt:"banner"})),n.a.createElement("h1",{className:a.title},"Home")),n.a.createElement("div",{className:a.containName},n.a.createElement("h1",{className:a.namePage},"FLOWER",n.a.createElement("br",null),"STORE"),n.a.createElement("p",{className:a.desPage},"Discover the statistics so you can make the purchase of your flowers in a good season"),n.a.createElement(d.b,{to:"/discover",className:a.linkDiscover},"   ",n.a.createElement("button",{className:a.btnDiscover},"  Discover"))))},m=t(335),f=n.a.createContext({data:null,setData:function(){return null},dataSelected:null,setDataSelected:function(){return null},inputSelected:null,setInputSelected:function(){return null}}),g=t(51),p=t(340),y=t(10),h=t(120),w=t.n(h),S=t(346),x=t(328),b=t(327),v=Object(y.a)({root:{color:w.a[50],"&$checked":{color:w.a[50]}},checked:{}})((function(e){return n.a.createElement(p.a,Object.assign({color:"default"},e))}));function C(e){var a=n.a.useContext(f),t=n.a.useState(!1),l=Object(i.a)(t,2),r=l[0],o=l[1],s=n.a.useState(!1),d=Object(i.a)(s,2),c=d[0],u=d[1];return n.a.createElement(b.a,{component:"fieldset"},n.a.createElement(S.a,{"aria-label":"position",name:"position",onClick:function(e){a.setInputSelected("radio"),"radio"!==a.inputSelected&&(o(!1),u(!1))},onChange:function(t){"season"===t.target.value&&(console.log(t.target.value),o(!0),u(!1),"Rose"===a.dataSelected&&a.setData(e.dataRoseSeason),"Sunflower"===a.dataSelected&&a.setData(e.dataSunflowerSeason),"Tulip"===a.dataSelected&&a.setData(e.dataTulipSeason),"Lily"===a.dataSelected&&a.setData(e.dataLilySeason)),"holiday"===t.target.value&&(u(!0),o(!1),console.log(t.target.value),"Rose"===a.dataSelected&&a.setData(e.dataRoseHoliday),"Sunflower"===a.dataSelected&&a.setData(e.dataSunflowerHoliday),"Tulip"===a.dataSelected&&a.setData(e.dataTulipHoliday),"Lily"===a.dataSelected&&a.setData(e.dataLilyHoliday))},row:!0},n.a.createElement(x.a,{value:"season",control:n.a.createElement(v,{color:"default"}),label:n.a.createElement("span",{style:{fontFamily:"Montserrat",fontWeight:100}},"Season"),checked:r,labelPlacement:"end"}),n.a.createElement(x.a,{value:"holiday",checked:c,control:n.a.createElement(v,{color:"primary"}),label:n.a.createElement("span",{style:{fontFamily:"Montserrat",fontWeight:100}},"Holidays"),labelPlacement:"end"})))}var E=t(342),D=t(344),Y=Object(y.a)((function(e){return{root:{},input:{borderRadius:10,position:"relative",width:200,outline:"none",color:"black",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,color:"black",outline:"none",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)",backgroundColor:e.palette.background.paper}}}}))(D.a),q=Object(s.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",outline:"none"},margin:{outline:"none"}}}));function F(e){var a=n.a.useContext(f),t=q();return n.a.createElement("form",{className:t.root,autoComplete:"on"},n.a.createElement(b.a,{className:t.margin},n.a.createElement(E.a,{onChange:function(t){a.setInputSelected("select"),"color"===t.target.value?(console.log(t.target.value),"Rose"===a.dataSelected&&a.setData(e.dataRoseColor),"Sunflower"===a.dataSelected&&a.setData(e.dataSunflowerColor),"Tulip"===a.dataSelected&&a.setData(e.dataTulipColor),"Lily"===a.dataSelected&&a.setData(e.dataLilyColor)):"country"===t.target.value&&(console.log(t.target.value),"Rose"===a.dataSelected&&a.setData(e.dataRoseCountry),"Sunflower"===a.dataSelected&&a.setData(e.dataSunflowerCountry),"Tulip"===a.dataSelected&&a.setData(e.dataTulipCountry),"Lily"===a.dataSelected&&a.setData(e.dataLilyCountry))},onClick:function(e){a.setInputSelected("select"),"select"!==a.inputSelected&&(e.target.value="")},input:n.a.createElement(Y,{name:"age",id:"age-customized-native-simple"})},n.a.createElement("option",{style:{fontFamily:"Montserrat",fontWeight:100},value:""},"Choose a category"),n.a.createElement("option",{style:{fontFamily:"Montserrat",fontWeight:100},value:"country"},"Country"),n.a.createElement("option",{style:{fontFamily:"Montserrat",fontWeight:100},value:"color"},"Color"))))}var R=t(329);var k=Object(s.a)((function(e){return{editPanel:{transition:"all 1s",position:"absolute",display:"flex",flexDirection:"column",order:0,color:"white",border:"none",width:400,right:0,left:0,flex:"1 1 auto",alignSelf:"auto",padding:20},panelTitle:{textAlign:"center",fontFamily:"Montserrat"},panelSubt:{marginLeft:10,fontFamily:"Montserrat",fontWeight:"100",fontSize:18},panelSelect:{marginLeft:10},panelRadio:{marginLeft:10},panelImages:{display:"flex",flexDirection:"row",justifyContent:"space-between",justifyItems:"flex-start",flexBasis:100,height:161,padding:20,flexWrap:"wrap",alignItems:"flex-start",alignContent:"flex-start"},panelImg:{display:"flex",flexBasis:25,flexDirection:"column",alignItems:"center",cursor:"pointer"},imgFlower:{display:"flex",width:54,height:48},imgFlower2:{display:"flex",width:54,height:48},imgFlower3:{display:"flex",width:54,height:48},imgFlower4:{display:"flex",width:54,height:48},titleFlower:{textAlign:"center",fontFamily:"Montserrat"},panelButton:{color:"white",borderColor:"white",borderRadius:20,width:200,height:46,alignSelf:"center",marginTop:20,transition:"all 1s",fontFamily:"Raleway","&:hover":{backgroundColor:"white",color:"black"}},linkDiscover:{alignSelf:"center",fontFamily:"Raleway",textDecoration:"none",color:"white"}}})),N=Object(s.a)((function(e){return{imgFlower:{display:"flex",border:"5px solid #DB7093",width:54,height:48},imgFlower2:{display:"flex",width:54,height:48},imgFlower3:{display:"flex",width:54,height:48},imgFlower4:{display:"flex",width:54,height:48}}})),j=Object(s.a)((function(e){return{imgFlower:{display:"flex",width:54,height:48},imgFlower2:{display:"flex",border:"5px solid #DB7093",width:54,height:48},imgFlower3:{display:"flex",width:54,height:48},imgFlower4:{display:"flex",width:54,height:48}}})),L=Object(s.a)((function(e){return{imgFlower:{display:"flex",width:54,height:48},imgFlower2:{display:"flex",width:54,height:48},imgFlower3:{display:"flex",border:"5px solid #DB7093",width:54,height:48},imgFlower4:{display:"flex",width:54,height:48}}})),T=Object(s.a)((function(e){return{imgFlower:{display:"flex",width:54,height:48},imgFlower2:{display:"flex",width:54,height:48},imgFlower3:{display:"flex",width:54,height:48},imgFlower4:{display:"flex",border:"5px solid #DB7093",width:54,height:48}}})),O=function(e){var a=k(),t=N(),l=T(),r=j(),o=L(),s=n.a.useState(a),c=Object(i.a)(s,2),u=c[0],m=c[1],g=n.a.useContext(f),p=localStorage.getItem("value.favourite");return null!==p&&(g.favourite=JSON.parse(p)),n.a.createElement("div",{className:a.editPanel},n.a.createElement("h1",{className:a.panelTitle},"Look for flowers"),n.a.createElement("h1",{className:a.panelSubt},"Type of flower"),n.a.createElement("article",{className:a.panelImages},n.a.createElement("div",{className:a.panelImg,onClick:function(){g.setData(e.data),g.setDataSelected("Rose"),m(t),g.setInputSelected(""),console.log(g.data)}},n.a.createElement("img",{className:u.imgFlower,src:"./images/rose.png",alt:"rose"}),n.a.createElement("p",{className:a.titleFlower},"Rose")),n.a.createElement("div",{className:a.panelImg},n.a.createElement("img",{className:u.imgFlower2,onClick:function(){g.setData(e.data),m(r),g.setDataSelected("Sunflower")},src:"./images/sunflower.png",alt:"sunflower"}),n.a.createElement("p",{className:a.titleFlower},"Sunflower")),n.a.createElement("div",{className:a.panelImg},n.a.createElement("img",{className:u.imgFlower3,onClick:function(){g.setData(e.data),m(o),g.setDataSelected("Tulip")},src:"./images/tulip.png",alt:"tulip"}),n.a.createElement("p",{className:a.titleFlower},"Tulip")),n.a.createElement("div",{className:a.panelImg},n.a.createElement("img",{className:u.imgFlower4,onClick:function(){g.setData(e.data),g.setDataSelected("Lily"),m(l)},src:"./images/lily.png",alt:"lily"}),n.a.createElement("p",{className:a.titleFlower},"Lily"))),n.a.createElement("h1",{className:a.panelSubt},"Availability by"),n.a.createElement(F,{country:e.country,dataRoseColor:e.dataRoseColor,dataSunflowerColor:e.dataSunflowerColor,dataTulipColor:e.dataTulipColor,dataLilyColor:e.dataLilyColor,dataRoseCountry:e.dataRoseCountry,dataSunflowerCountry:e.dataSunflowerCountry,dataTulipCountry:e.dataTulipCountry,dataLilyCountry:e.dataLilyCountry}),n.a.createElement("h1",{className:a.panelSubt},"Sales by"),n.a.createElement("div",{className:a.panelRadio}," ",n.a.createElement(C,{dataRoseSeason:e.dataRoseSeason,dataSunflowerSeason:e.dataSunflowerSeason,dataTulipSeason:e.dataTulipSeason,dataLilySeason:e.dataLilySeason,dataRoseHoliday:e.dataRoseHoliday,dataSunflowerHoliday:e.dataSunflowerHoliday,dataTulipHoliday:e.dataTulipHoliday,dataLilyHoliday:e.dataLilyHoliday})," "),n.a.createElement(d.b,{to:"/favourite",className:a.linkDiscover}," ",n.a.createElement(R.a,{variant:"outlined",className:a.panelButton,onClick:function(){"Rose"===g.dataSelected&&g.favourite.push({flower:g.dataSelected,percent:"100%",imgFlower:"./images/rose.png"}),"Sunflower"===g.dataSelected&&g.favourite.push({flower:g.dataSelected,percent:"40%",imgFlower:"./images/sunflower.png"}),"Tulip"===g.dataSelected&&g.favourite.push({flower:g.dataSelected,percent:"60%",imgFlower:"./images/tulip.png"}),"Lily"===g.dataSelected&&g.favourite.push({flower:g.dataSelected,percent:"75%",imgFlower:"./images/lily.png"}),localStorage.setItem("value.favourite",JSON.stringify(g.favourite))}}," Add to favorites")))},I=t(337),H=t(345),P=t(338),W=t(341);var M=Object(s.a)((function(e){return{wrapper:{backgroundColor:"black",width:400,height:"100vh",transition:"all 1s"},title:{color:"white",marginLeft:10},containMenu:{marginTop:30,width:270},contentRight:{order:0,justifyContent:"center",flex:"1 1 auto",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",transition:"all 1s"}}})),B=Object(s.a)((function(e){return{btnChange:{color:"black",borderColor:"black",borderRadius:20,width:200,height:46,alignSelf:"center",transition:"all 1s",fontSize:15,fontFamily:"Raleway","&:hover":{backgroundColor:"black",color:"white",fontFamily:"Raleway"}},otherView:{position:"absolute",color:"black"},app:{display:"flex",flexDirection:"row",flexWrap:"nowrap",height:"100vh",justifyContent:"space-between",alignContent:"space-between"},wrapper:{justifyContent:"flex-start",flexDirection:"column",alignSelf:"flex-start",width:400},contentRight:{position:"absolute",left:300,order:0,justifyContent:"center",flex:"1 1 auto",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",transition:"all 1s"},namePage:{display:"flex",transition:"all 1s",textDecoration:"none",color:"black",alignSelf:"flex-end",fontFamily:"Oswald"},navPage:{alignSelf:"flex-end",display:"flex",alignContent:"flex-end",alignItems:"flex-end",justifyContent:"flex-end",justifyItems:"flex-end",width:1e3},containMenu:{width:300,marginTop:30},imgMenu:{marginLeft:35,cursor:"pointer"},table:{display:"flex",flexDirection:"column",justifyContent:"center",flexWrap:"wrap",alignSelf:"center"},bodyContent:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"center",alignContent:"center",alignItems:"center"}}})),z=function(e){var a=B(),t=M(),l=n.a.useState("./images/menu.png "),r=Object(i.a)(l,2),o=r[0],s=r[1],c=n.a.useState(50),u=Object(i.a)(c,2),m=u[0],g=u[1],p=n.a.useState(40),y=Object(i.a)(p,2),h=y[0],w=y[1],S=n.a.useState(a),x=Object(i.a)(S,2),b=x[0],v=x[1],C=n.a.useState(!1),E=Object(i.a)(C,2),D=E[0],Y=E[1],q=n.a.useState(!1),F=Object(i.a)(q,2),R=F[0],k=F[1],N=n.a.useState(!0),j=Object(i.a)(N,2),L=j[0],T=j[1],z=n.a.useContext(f);return n.a.createElement("section",{className:a.app},n.a.createElement("div",{className:b.wrapper},n.a.createElement("div",{className:b.containMenu},n.a.createElement("img",{className:a.imgMenu,src:o,width:m,height:h,alt:"menu",onClick:function(){Y((function(e){return!e})),s("./images/menu.png"),v(a),D||(v(t),w(30),g(35),s("./images/close.png"))}})),D?n.a.createElement("div",null,n.a.createElement(O,{data:z.dataInitials,setData:z.setData,dataRoseCountry:z.dataRoseCountry,dataSunflowerCountry:z.dataSunflowerCountry,dataTulipCountry:z.dataTulipCountry,dataLilyCountry:z.dataLilyCountry,dataRoseColor:z.dataRoseColor,dataSunflowerColor:z.dataSunflowerColor,dataTulipColor:z.dataTulipColor,dataLilyColor:z.dataLilyColor,dataRoseSeason:z.dataRoseSeason,dataSunflowerSeason:z.dataSunflowerSeason,dataTulipSeason:z.dataTulipSeason,dataLilySeason:z.dataLilySeason,dataRoseHoliday:z.dataRoseHoliday,dataSunflowerHoliday:z.dataSunflowerHoliday,dataTulipHoliday:z.dataTulipHoliday,dataLilyHoliday:z.dataLilyHoliday})):null),n.a.createElement("div",{className:b.contentRight},n.a.createElement("div",{className:a.navPage},n.a.createElement("h1",{className:a.namePage},n.a.createElement(d.b,{to:"/",className:a.namePage}," FLOWER STORE"))),n.a.createElement("section",{className:a.bodyContent},n.a.createElement("div",{className:a.table},n.a.createElement("h2",{style:{fontFamily:"Montserrat",textAlign:"center"}},z.dataSelected," "),n.a.createElement("button",{className:a.btnChange,onClick:function(){k((function(e){return!e})),T((function(e){return!e}))}},"Change Graph"),n.a.createElement("div",null,L?n.a.createElement("div",null,n.a.createElement(I.a,{horizontal:!0,theme:H.a.material,height:560,width:740,animate:{duration:1e3,easing:"bounce"},domainPadding:100},n.a.createElement(P.a,{barRatio:.8,data:z.data,x:"quarter",y:"dataY",style:{data:{fill:"#521945"}},events:[{target:"data",eventHandlers:{onClick:function(){return[{target:"data",mutation:function(e){return"black"===(e.style&&e.style.fill)?null:{style:{fill:"black",fontFamily:"Montserrat"}}}}]}}}]}),n.a.createElement(W.a,{data:z.data,x:"quarter",y:"dataY"}))):null),R?n.a.createElement("div",null,n.a.createElement(I.a,{colorScale:["tomato","orange","gold","cyan","navy"],theme:H.a.material,height:560,width:700,animate:{duration:1e3,easing:"bounce"},domainPadding:100},n.a.createElement(P.a,{barRatio:.8,data:z.data,x:"quarter",y:"dataY",style:{data:{fill:"#F2BAC6"}},events:[{target:"data",eventHandlers:{onClick:function(){return[{target:"data",mutation:function(e){return"black"===(e.style&&e.style.fill)?null:{style:{fill:"black",fontFamily:"Montserrat"}}}}]}}}]}))):null))))},A=t(347),U=t(330),V=t(331),J=t(332),G=t(348),$=t(333),K=t(334);var Q=Object(s.a)((function(e){return{app:{display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignContent:"center",width:"auto",height:"100vh",backgroundImage:function(e){return"url(".concat(e.urlBanner,")")},backgroundSize:"cover",transition:"all 1s"},navPage:{flexDirection:"row",alignSelf:"flex-end"},nextHome:{marginLeft:10},namePage:{marginTop:30,alignSelf:"center",transition:"all 1s",fontSize:20,color:"black",fontFamily:"Oswald"},nameStore:{display:"flex",alignSelf:"flex-end",marginRight:50,transition:"all 1s",textDecoration:"none",fontSize:30,width:"auto",color:"white",fontFamily:"Oswald"},nameStoreLink:{display:"flex",alignSelf:"flex-end",marginRight:50,transition:"all 1s",textDecoration:"none",fontSize:30,width:"auto",color:"white",fontFamily:"Oswald"},containerList:{display:"flex",flexDirection:"column",alignSelf:"center",width:650,height:"80vh",opacity:"0.8",borderRadius:20},contentList:{display:"flex",listStyleType:"none",padding:100,fontSize:20,fontFamily:"Raleway"}}})),X=function(){var e=n.a.useContext(f),a=Q({urlBanner:"images/bannerViewData.jpg"});return console.log(e.favourite),n.a.createElement("div",{className:a.app},n.a.createElement("div",{className:a.navPage},n.a.createElement("h1",{className:a.nameStore},n.a.createElement(d.b,{to:"/",className:a.nameStoreLink}," FLOWER STORE ",n.a.createElement("img",{className:a.nextHome,width:"20",src:"./images/next.png",alt:"next"})," "))),n.a.createElement(A.a,{className:a.containerList},n.a.createElement("h1",{className:a.namePage},"YOUR FAVORITE FLOWERS"),n.a.createElement(U.a,{className:a.root},e.favourite.map((function(e,a){return n.a.createElement(V.a,{alignItems:"flex-start",key:a},n.a.createElement(J.a,null,n.a.createElement(G.a,{alt:"Remy Sharp",src:e.imgFlower,key:a})),n.a.createElement($.a,{primary:e.flower,secondary:"Percent of sales: "+e.percent}),n.a.createElement(K.a,{variant:"inset",key:a,component:"li"}))})))))};var Z=function(){var e=[{quarter:"Rose",dataY:100,fill:"red"},{quarter:"Sunflower",dataY:40,fill:"blue"},{quarter:"Tulip",dataY:60,fill:"red"},{quarter:"Lily",dataY:75,fill:"blue"}],a=n.a.useState("EveryOne"),t=Object(i.a)(a,2),l=t[0],r=t[1],o=n.a.useState(""),s=Object(i.a)(o,2),c=s[0],p=s[1],y=n.a.useState(e),h=Object(i.a)(y,2),w=h[0],S=h[1],x=n.a.useState([]),b=Object(i.a)(x,2),v=b[0],C=b[1],E=n.a.useState([]),D=Object(i.a)(E,2),Y=D[0],q=D[1],F=n.a.useState([]),R=Object(i.a)(F,2),k={data:w,imgAvatar:Y,percent:R[0],setImgAvatar:q,setPercent:R[1],favourite:v,setFavourite:C,dataInitials:e,dataRoseCountry:[{quarter:"Colombia",dataY:80},{quarter:"Belgium",dataY:30},{quarter:"EUU",dataY:70},{quarter:"Canada",dataY:50}],dataRoseColor:[{quarter:"Red",dataY:100},{quarter:"Yellow",dataY:65},{quarter:"Blue",dataY:20},{quarter:"White",dataY:60}],dataRoseSeason:[{quarter:"Winter",dataY:10},{quarter:"Spring",dataY:80},{quarter:"Summer",dataY:40},{quarter:"Fall",dataY:0}],dataRoseHoliday:[{quarter:"Christmas\xa0Day",dataY:50},{quarter:"Thanksgiving\xa0Day",dataY:65},{quarter:"Mother`s\xa0Day",dataY:80},{quarter:"Valentine`s\xa0Day",dataY:100}],dataSunflowerCountry:[{quarter:"Ukraine",dataY:100},{quarter:"Russia",dataY:80},{quarter:"Argentina",dataY:70},{quarter:"China",dataY:90}],dataSunflowerColor:[{quarter:"Red",dataY:15},{quarter:"Yellow",dataY:100},{quarter:"Orange",dataY:40},{quarter:"White",dataY:20}],dataSunflowerSeason:[{quarter:"Winter",dataY:10},{quarter:"Spring",dataY:80},{quarter:"Summer",dataY:40},{quarter:"Fall",dataY:15}],dataSunflowerHoliday:[{quarter:"Christmas\xa0Day",dataY:10},{quarter:"Thanksgiving\xa0Day",dataY:45},{quarter:"Mother`s\xa0Day",dataY:100},{quarter:"Valentine`s\xa0Day",dataY:100}],dataTulipCountry:[{quarter:"Canada",dataY:70},{quarter:"England",dataY:55},{quarter:"Netherlands",dataY:100},{quarter:"Belgium",dataY:60}],dataTulipColor:[{quarter:"Purple",dataY:70},{quarter:"Yellow",dataY:55},{quarter:"Pink",dataY:90},{quarter:"Blue",dataY:30}],dataTulipSeason:[{quarter:"Winter",dataY:80},{quarter:"Spring",dataY:30},{quarter:"Summer",dataY:70},{quarter:"Fall",dataY:57}],dataTulipHoliday:[{quarter:"Christmas\xa0Day",dataY:100},{quarter:"Thanksgiving\xa0Day",dataY:35},{quarter:"Mother`s\xa0Day",dataY:40},{quarter:"Valentine`s\xa0Day",dataY:20}],dataLilyCountry:[{quarter:"EEUU",dataY:60},{quarter:"Mexico",dataY:80},{quarter:"Ecuador",dataY:65},{quarter:"Belgium",dataY:40}],dataLilyColor:[{quarter:"Red",dataY:60},{quarter:"White",dataY:15},{quarter:"Pink",dataY:100},{quarter:"Yellow",dataY:20}],dataLilySeason:[{quarter:"Winter",dataY:20},{quarter:"Spring",dataY:100},{quarter:"Summer",dataY:70},{quarter:"Fall",dataY:57}],dataLilyHoliday:[{quarter:"Christmas\xa0Day",dataY:20},{quarter:"Thanksgiving\xa0Day",dataY:65},{quarter:"Mother`s\xa0Day",dataY:60},{quarter:"Valentine`s\xa0Day",dataY:90}],setData:S,dataSelected:l,setDataSelected:r,inputSelected:c,setInputSelected:p};return n.a.createElement(d.a,{basename:window.location.pathname},n.a.createElement("div",null,n.a.createElement(f.Provider,{value:k},n.a.createElement(g.a,{path:"/",exact:!0,component:u}),n.a.createElement(g.a,{path:"/discover",component:z}),n.a.createElement(g.a,{path:"/favourite",component:X})),n.a.createElement(m.a,null)))};t(294);o.a.render(n.a.createElement(Z,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.678a440c.chunk.js.map