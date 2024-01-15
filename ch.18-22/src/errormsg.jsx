import foodItem from "./items";

let Errormsg = ()=>{

    // let foodItem = ['dal','green veggies','roti','salad','milk', 'ghee'];
    // let foodItem = ['dal'];
    // let foodItem = [];

  // ternary operator way of if else
  let emptymessage = foodItem.length === 0 ? <h3>food is not there</h3> : null;

  //logic opertor way of if else
  let logicEmpty = foodItem.length === 1 && <h3>theres very less food</h3>

 
  return(
<>
   {emptymessage}
   {logicEmpty}
</>

  )
}

export default Errormsg;