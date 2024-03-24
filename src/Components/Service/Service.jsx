import './Service.css'
import PositionService from "../../data/position-service.json"
import { useId } from 'react';
import { Link } from 'react-router-dom';



export default function Service({closeModal}){
    const servise = "./servise"
    const id = useId();
    return(
        <div className='container-service'>
            {PositionService.map((elem,idx)=>(
                <div className="element-service" key={elem.key + id}>
                    <h1>{elem.titel}</h1>
                    {elem.service.map((element)=>(
                        <div className='list' key={id + element.id}>
                            <li><Link to={`${servise}/${element.id}`} onClick={closeModal}>{element.name}</Link></li>
                        </div>
                    ))}
                </div>              
            ))}
        </div>
    )
    
}
