import styles from "../App.module.css"

function ButtonsContainers({onButtonClick}){
    let btns = [ "0", "1","2","3","4","5","6","7","8","9","c","+","-","/","*",".","="]
return(
<>

<div className={styles.buttonContainer}> 
      
{
    btns.map((btnNames)=>
    (<button key ={btnNames} onClick={()=> onButtonClick(btnNames)} className={styles.button}>{btnNames}</button>)
    )
}

</div>

</>
);

}

export default  ButtonsContainers;