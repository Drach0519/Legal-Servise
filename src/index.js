import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './media.css';
import Welcom from './Pages/Welcom/Welcom';
import Header from './Pages/Header/Header';
import ServisePage from './Pages/ServicePage/ServicePage';
import Cases from './Pages/Cases/Cases';
import Contact from './Pages/Contact/Contact';
import ErrorPage from './Pages/Error/Error';
import AboutUs from './Pages/AboutUs/AboutUs';
import ServiseAbout from './Pages/ServicePage/ServiseAbout';
import PositionService from'./data/position-service.json';
import * as serviceWorker from './serviceWorker';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

const Root =()=>{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  )
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Welcom/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='cases' element={<Cases/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='welcom' element={<Welcom/>}/>
      <Route path='servise' element ={<ServiseAbout/>}/>
      <Route path='servise/:elementId'  loader={loader} element={<ServisePage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
serviceWorker.register();
root.render(
  <div className='container'>
    <RouterProvider router={router}/>
  </div>
  
);


function loader({params}){
      // console.log(params.elementId);
      let data =PositionService.flatMap(e=>e.service).filter(elem=>elem.id === params.elementId);
      return data[0]
}

