

import React from 'react'
import {Link, Router} from "@reach/router"
import Bookcovers from './Bookcovers'
import Bachelor from './Bachelor'
import FacelessEmotions from './FacelessEmotions'
import Tech from './Tech'
import VollDesign from './VollDesign'
import Blackbox from './Blackbox'


const imgArbeid = (props) => {





    
    return(
        <div>
           
        <Link to={props.path} className="whiteBg"> 
        <div className="whiteBg">
            <section className='imgArbeids'>
            
                <img src={props.url}  alt={props.alt} />
                <h2>{props.title}</h2> 
               
                <p><strong>Type: </strong>{props.type}</p> 
            </section>
        </div>
        </Link>
        <Router>
        <Bookcovers path="bookcovers" />
        <Bachelor path="bachelor" />
        <FacelessEmotions path="faceless" />        
        <VollDesign path="volldesign" />        
        <Tech path="tech" />        
        <Blackbox path="blackbox" />        
        </Router>
        </div>
    )
}

export default imgArbeid