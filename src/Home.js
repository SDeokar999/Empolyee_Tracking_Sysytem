import React from 'react';
import Header from './Header';
import './HomePage.css';
import HomeData from './mock/HomeData';


const Home=({change,logout})=>{

   
return(
<><div id="main">


    {HomeData.map(({id,title})=>{

 return(<>
 <div id="Box">
     
 <div id="Box_internal" onClick={()=>change(id)}>{title}</div>
</div>
   </> )})}
    
   

</div>
</>
)
}
export default Home;
