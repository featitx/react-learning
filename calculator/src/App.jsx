import { useState } from "react"
import styles from "./App.module.css"
import ButtonsContainers from "./component/buttons"
import Display from "./component/display"
function App() {
  
   let [calVal, setCalval] = useState("45");

  const onButtonClick =  (buttonText) => console.log(buttonText)
   
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
