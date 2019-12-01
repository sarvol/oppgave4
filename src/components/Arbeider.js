

import React from 'react'
import {Link, Router} from "@reach/router"
import Bookcovers from './undersiderProsjekt/Bookcovers'
import Bachelor from './undersiderProsjekt/Bachelor'
import FacelessEmotions from './undersiderProsjekt/FacelessEmotions'


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
        
        </Router>
        </div>
    )
}

export default imgArbeid