import { useState } from "react"
import styles from "./App.module.css"
import ButtonsContainers from "./component/buttons"
import Display from "./component/display"
function App() {
  
   let [calVal, setCalval] = useState("");

  const onButtonClick =  (buttonText) => {
    if(buttonText === 'c'){
      setCalval("");

    }else if(buttonText==="="){
      const result = eval(calVal);
      setCalval(result);
   
    }else{
      const newDisplayValue = calVal + buttonText ;
      setCalval(newDisplayValue);
    }
  }

  
  // thing to learn here is , #*eval*# method , 
  // it is predefine method of react which is use 
  // for the evalution of mathemathics expression


   
  return (
    <>
      <div className={styles.calculator}>
      <Display  displayValue = {calVal}></Display>
      <ButtonsContainers onButtonClick={onButtonClick}></ButtonsContainers>
    </div>
    </>
    
  )
  

}

export default App
