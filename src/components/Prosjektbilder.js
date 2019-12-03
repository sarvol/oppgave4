
import React from 'react'


const Prosjektbilder = (props) => {

    
    return(
        <div>
        <div className="bigger">
            <section className='prosjektbilder'>
                <img src={props.url}  alt={props.alt} />
                <h2>{props.title}</h2> 
               
                
            </section>
        </div>
       
        </div>
    )
}

export default Prosjektbilder