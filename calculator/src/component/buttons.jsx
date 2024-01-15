import styles from "../App.module.css"

function ButtonsContainers(){
    let btns = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*",".","="]
return(
<>

<div className={styles.buttonContainer}> 
      
{
    btns.map((btnNames)=>
    (<button key ={btnNames} className={styles.button}>{btnNames}</button>)
    )
}

</div>

</>
);

}

export default  ButtonsContainers;