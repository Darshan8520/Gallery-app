import './App.css'
import React, { useEffect, useState } from 'react'
function App() {
  let [data, setData] = useState([])
  let [input,setInput]=useState(false)
//   let [beachdata, setBeachdata] = useState([])
//   let [birddata, setBirddata] = useState([])
//   let [fooddata, setFooddata] = useState([])
//   function handleClick() {
//     if (data) {
//       setData(
//         <div>
//       <img src={montain[0]} />
//       <img src={montain[1]} />
//       <img src={montain[2]} />
//       <img src={montain[3]} />
//       <img src={montain[4]} />
//     </div>
//       )
//       // if(!data){
//       //  setData([])
//       // }
//     }
//   }
//   function handleBeachdata() {
//     if (beachdata) {
//       setBeachdata(
//         <div>
//     <img src={beaches[0]} />
//     <img src={beaches[1]} />
//     <img src={beaches[2]} />
//     <img src={beaches[3]} />
//     <img src={beaches[4]} />
//   </div>
//       )
//     }
//   }

//   function handleBirdData() {
//     if (birddata) {
//       setBirddata(
//         <div>
//           <img src={bird[0]} />
//           <img src={bird[1]} />
//           <img src={bird[2]} />
//           <img src={bird[3]} />
//           <img src={bird[4]} />

//         </div>
//       )
//     }
//   }
//   function handleFooddata() {
//     if (fooddata) {
//       setFooddata(
//         <div>
//           <img src={food[0]} />
//           <img src={food[1]} />
//           <img src={food[2]} />
//           <img src={food[3]} />
//           <img src={food[4]} />
//         </div>
//       )
//     }
//   }

 

  let montain = ["https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
  let beaches = ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
  let bird = ["https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1552727451-6f5671e14d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"]
  let food = ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
  let obj={
      Mountain: montain ,
     Beach: beaches,
     Bird: bird,
    Food : food
  } 

  function handleClick(img){
    // console.log(obj[img]);
   setData(obj[img])

   if(obj[img]){
    setInput(false)
    setData(obj[img])
   }
   else{
    setInput(true)
    setData([])
   }
  }
  return (
   <div className='App'>
    <h1>PhotoLab</h1>
     <input type="text" placeholder='search...' onChange={(e)=>handleClick(e.target.value)}/>
    <br />
    {/* {input } */}
    <button onClick={() => handleClick("Mountain")}>Montains</button>
      <button onClick={() => handleClick("Beach")}>Beachs</button>
      <button onClick={() => handleClick("Bird")}>Birds</button>
      <button onClick={() => handleClick("Food")}>Food</button>
      <div>
    {
      data.map((item)=>{
        return(
          <img src={item}/>
        )
      })
    }
   </div>
   </div>
   
        
    
  )
}
export default App;

