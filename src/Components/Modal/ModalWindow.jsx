import './ModalWindow.css';
import Service from '../Service/Service';



export default function ModalWindow({call,onDestroy}){

    if(!call){
        return null;
    }
    // const closeWindow =(event)=>{
    //     if(event.target.className ==='modal'){
    //         onDestroy();
    //     }
    // }
    // stopPropagation() Прекращает дальнейшую передачу текущего события onDestroy
    return(
        <div onClick={onDestroy} className='modal'>
            <div onClick={(e)=>e.stopPropagation()} className="modal-content">
            <Service closeModal={onDestroy}/>
                <i className='close'onClick={onDestroy}>X</i>
            </div>
        </div>
    )
}