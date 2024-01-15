
import "./App.css"
import foodItem from "./items";

let Listitem = ({item , buy}) =>{
  
   let handleClick = (e)=>{
       console.log(e)
      console.log(`BUY BUTTON CLICKED OF ${item}`);
   }
    
   return <li  className="list-group-item">{item}
   <button type="button" className="btn_buy"
     onClick={handleClick}
   >{buy}</button>
   </li>
}
  
export default Listitem; 