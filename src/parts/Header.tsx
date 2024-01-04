import React from 'react'
import Fade from 'react-reveal/Fade'

import BrandcIcon from 'parts/BrandIcon'
import Button from 'elements/Button'
import Toglle from 'elements/ToglleTheme'

import {header} from 'models/Layout'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

export default function Header(props: header): JSX.Element {
  const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
   const getActive = (path:string):string =>{
      return window.location.pathname === path ? "active" : "";
   }
   if(props.isCentered) 
	return (
       
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className='d-flex justify-content-center'>
              <BrandcIcon />
              </div>
            </nav>
          </div>
        </header>
       
    );

   return (
    
      <header className='spacing-sm'>
         <div className="container-fluid">
          <nav className={`navbar navbar-expand-lg navbar-light`}>
            <div className="brand-icon-wrapper d-flex justify-content-between">
              <BrandcIcon />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-5">
                <li className={`nav-item${checkTheme ? '-light' : ''} ${getActive('/')}`}>
                  <Button className='nav-link' type='link' href='/'>
                    Home
                  </Button>
                </li>
                <li className={`nav-item${checkTheme ? '-light' : ''} ${getActive('/browse-by')}`}>
                  <Button className='nav-link' type='link' href='/browse-by'>
                    Browse
                  </Button>
                </li>
                <li className={`nav-item${checkTheme ? '-light' : ''} ${getActive('/agents')}`}>
                  <Button className='nav-link' type='link' href='/agents'>
                    Agent
                  </Button>
                </li>
                <li className={`nav-item${checkTheme ? '-light' : ''} ${getActive('/stories')}`}>
                  <Button className='nav-link' type='link' href='/stories'>
                    Stories
                  </Button>
                </li>
              </ul>
              <Toglle/>
            </div>
          </nav>
         </div>
      </header>
    
   )
}
