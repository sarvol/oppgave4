

import React from 'react'




const imgArbeid = (props) => {
    return(
        <>
        <div className="whiteBg">
            <section className='imgArbeids'>
                <img src={props.url } />
                <h2>{props.title}</h2> 
                <p><strong>Type: </strong>{props.type}</p> 
            </section>
           
        </div>
       
        
        </>
    )
}

export default imgArbeid