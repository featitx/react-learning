import React from 'react'
import { useState } from 'react'

const Todolist = () => {

const [activity , setActivity] = useState("");

const [date , setDate] = useState("")

const [listData , setListData] = useState([])

function addActivity(){
   setListData((listData) => { 
  const data = [...listData , {name : activity , duedate : date }]
  console.log(listData)
     setActivity('');
     return data ;
   })
}

function removeActivity(i) {
   const upadated = listData.filter((elements , id )=>{
       return i!=id ; 
   })

   setListData(upadated);
}

function removeAll(){
    const remove = setListData([]);
}



  return (
    <>

    <div className='container'>
    <div className='header'>
          <h2>Todolist</h2>
    </div>

   <input type="text" placeholder='add acitvity' value = {activity} onChange={(e)=>(setActivity(e.target.value))}/>
   <input type="date"  value = {date} onChange={(e)=>(setDate(e.target.value))}/>

   <button onClick={addActivity}> Add </button>
   
   {listData!=[] && listData.map((Data , index )=>{
    return(
        <>
        <p key = {index}>
            <div> task : {Data.name}  timing : {Data.duedate}</div>
            

            <button onClick={()=>removeActivity(index)}>remove</button>
        </p>
        </>
    )
   }
   )}

   

    {listData.length >= 1 ? <button onClick={removeAll}>remove all</button> : "Enjoy your day"}
    </div>
  
    
    </>
  )
}

export default Todolist