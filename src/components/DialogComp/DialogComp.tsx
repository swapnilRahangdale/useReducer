
import styless from './DialogComp.module.scss'

const DialogComp:React.FC<{
    dialogRef:any,
    title:string,
    classKey : string
}> = ({dialogRef, title, classKey}) => {
    return(
     <div>
        <dialog id = "dialogTest" ref = {dialogRef}>
  <p id = "ptag" className={styless[classKey]}>{title}</p>
  
    <button type="button" onClick={() => dialogRef.current.close()}>OK</button>

</dialog>
     </div>
    )
};

export default DialogComp