import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Navbar } from './components';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="container">

         <h1 className='hprincipal'> Acero y demás materiales para la construcción 
           <a className='registro' href='_login' rel= 'noopener noreferrer'>
             <img src='images/login.png' className='login' alt='IMAGEN PARA AUTENTICACION O REGISTRO'  height= '110px' width='110px' />
           </a> 
         </h1>
         
         

       <span className='barra'>

        <Navbar />

        {renderRoutes(routes)}
        </span>
      


        <footer>
       <p className='fprincipal'> 'Derechos reservados, México MMXXII' </p>
     </footer>    
    
     
    
      </div>

     
    );
  }
}

export default App;
