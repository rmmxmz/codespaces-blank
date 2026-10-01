//Import react
import React from 'react'

//Import Images
import logo from './assets/Abstraction.png'
import weblogo from './assets/weblogo.png'
//CSS Import/Link

import './App.css';

{/*Declaring the app function*/}
const App = () => {
  {/*HTML to be returned*/}
  return (
    <div className='page'>
      <div className='left'> 
        {/*logo, text and images*/}
        <img src={weblogo} alt='logo' width='135px' height='117'px></img>
        <h3> Getting Started With VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height ='673.97px'></img>
      </div>

      {/*Right side of screen*/}
      <div className='right'>  
        {/*Language Select*/}
        <select name="language" id="lang">
           <option value = "English"> English (UK)  </option>
        </select>

        {/*Actual form from the right side of the screen*/}
        {/*Starting from "Create Account"*/}
        <form>

        </form>
      </div>
    </div>
  )
}

export default App