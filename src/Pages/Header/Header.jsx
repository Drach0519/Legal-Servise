import './Header.scss';
import logo from './image/logo.png'
import time from './image/time.png'
import mail from './image/mail.png'
import telfone from './image/telfone.png'
import { useState } from 'react';
import Modal from '../../Components/Modal/ModalWindow';
import { Link, NavLink } from 'react-router-dom';
import { useId } from 'react';

export default function Header(){
    const [modalState,setModalState] =useState(false);

    return(
        <>
            <div className="header-container">
                    <div className="logo">
                        <Link to='./welcom'key={useId()}>
                            <img src={logo} alt="Logo"/>
                            <div><p>Legal Servise</p></div>
                        </Link>
                    </div>
                    <div className="info">
                    <div className="conatack">
                        <div className="telefone">
                            <img src={telfone} alt=""/>
                            <div><p>+380-00-289-3333</p></div>
                        </div>
                        <div className='work_schedule'>
                            <img src={time} alt=""/>
                            <div><p>Пн-Пт 10:00-18:00</p></div>
                        </div>
                        <div className="mail">
                            <img src={mail} alt=""/>
                            <div><p>order@buhone.ua</p></div>
                        </div>                        
                    </div>
                    <div className="sidebar">
                        <Modal call={modalState} onDestroy={()=>setModalState(false)}/>
                        <ul>
                            <li key={useId()}><NavLink to='./welcom'>Головна</NavLink></li>
                            <li key={useId()}><Link to='./servise' onClick={()=>setModalState(true)}>Послуги</Link></li>
                            <li key={useId()}><NavLink to='./cases'>Кейси</NavLink></li>
                            <li key={useId()}><NavLink to='./aboutus'>Про нас</NavLink></li>
                            <li key={useId()}><NavLink to='./contact'>Контакти</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )

}
