import React from 'react'
// import { render } from "react-dom"
import {Link, Router} from "@reach/router"
import Arbeid from "./components/Arbeid"
import Om from "./components/Om"
import Home from "./components/Home"
import './App.css'
import logo from './img/logo.png'
import Foto from './components/Foto'





// import { NavLink } from 'react-router-dom'




const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          borderBottom: isCurrent ?  "0.1rem solid white" : "none"
          
        }
      }
    }}
  />
)


const App = () => {
   return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="top-meny">
          <NavLink to="/" activeClassName="chosen" >Home</NavLink>
          <NavLink to="arbeid" activeClassName="chosen" >Graphic design</NavLink>
          <NavLink to="foto" activeClassName="chosen" >Photo</NavLink>
          <NavLink to="om" activeClassName="chosen" >Profil</NavLink>
      
        </nav>
      </header>
    
      <Router>
        <Home path="/" />
        <Arbeid path="arbeid" />
        <Om path="om" />
        <Foto path="foto" />
      </Router>
   
    </div>
  )
}

export default App