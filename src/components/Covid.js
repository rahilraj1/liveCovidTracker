import React,{useEffect,  useState} from  'react'
import '../App.css'

const Covid=()=>{
    const [data, setData]=useState([]);
    const getCovidData=async()=>
    {
        try
        {
            const res=await fetch('https://data.covid19india.org/data.json')
            const actualData=await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        } catch(err)
        {
            console.log(err);
        }
    }
   
   useEffect(()=>
   {
    getCovidData();
   },[]);

  return(
    <>
     <div className="main-body">
         <h1 className="center">Live ⭕</h1>
         <h2 className="center">Live Covid-Corona Virus Tracker Boom Guys</h2>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">Our <span className="status">Country</span></p>
                  <p className="number">India</p>
               </div>
            </div>
         </li>
         </ul>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">Total <span className="status">Recovered</span></p>
                  <p className="number">{data.recovered}</p>
               </div>
            </div>
         </li>
         </ul>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">Total <span className="status">Confirmed</span></p>
                  <p className="number">{data.confirmed}</p>
               </div>
            </div>
         </li>
         </ul>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">Total <span className="status">Death</span></p>
                  <p className="number">{data.deaths}</p>
               </div>
            </div>
         </li>
         </ul>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">Total <span className="status">Active</span></p>
                  <p className="number">{data.active}</p>
               </div>
            </div>
         </li>
         </ul>
         <ul>
           <li className="card">
            <div className="main_card">
               <div className="inner_card">
                  <p className="our">last<span className="status">Updated</span></p>
                  <p className="number">{data.lastupdatedtime}</p>
               </div>
            </div>
         </li>
         </ul>
     </div>
     
    </>
)
}
export default Covid;