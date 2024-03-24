import './ServicePage.scss'
import { useLoaderData } from "react-router-dom";


export default function ServicePage(){
    
    const data = useLoaderData();

    return(
        <div className='service-page'>
            <div className="content">
                <h3>{data.titel}</h3>
                <div className="content-text">
                    <h2>{data.name}</h2>
                    <p>{data.content}</p>
                </div>                
            </div>
        </div>
    );  
}

