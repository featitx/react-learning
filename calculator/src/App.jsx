import styles from "./App.module.css"
import ButtonsContainers from "./component/buttons"
import Display from "./component/display"
function App() {
  return (
    <>
      <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainers></ButtonsContainers>
    </div>
    </>
  )
}

export default App
