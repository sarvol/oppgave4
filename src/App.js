import React from 'react'
import {Link, Router} from "@reach/router"
import Arbeid from "./components/Arbeid"
import Om from "./components/Om"
import Home from "./components/Home"
import './App.css'
import logo from './img/logo.png'
import Foto from './components/Foto'
import Bachelor from './components/Bachelor'
import Bookcovers from './components/Bookcovers'
import FacelessEmotion from './components/FacelessEmotions'
import Tech from './components/Tech'
import VollDesign from './components/VollDesign'
import Blackbox from './components/Blackbox'





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
          {/* <NavLink to="bachelor" activeClassName="chosen" > design</NavLink> */}
            
          <NavLink to="foto" activeClassName="chosen" >Photo</NavLink>
          <NavLink to="om" activeClassName="chosen" >Profil</NavLink>
      
        </nav>
      </header>
    
      <Router>
        <Home path="/" />
        <Arbeid path="arbeid" />
        <Bachelor path="arbeid/bachelor" />
        <Bookcovers path="arbeid/bookcovers" />
        <FacelessEmotion path="arbeid/faceless" />
        <Tech path="arbeid/tech" />
        <VollDesign path="arbeid/volldesign" />
        <Blackbox path="arbeid/blackbox" />
        {/* <Bachelor path="bachelor" /> */}
        <Om path="om" />
        <Foto path="foto" />
       
      </Router>
   
    </div>
  )
}

export default App