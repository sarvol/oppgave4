

import React from 'react'

const Fotografi = (props) => {
    return(
      <>
      <div >
        <section className='foto'>
            <img src={props.url } />
            <div className=" textFoto">
            <h2>{props.title}</h2>
            <p><strong>Year:</strong> {props.year}</p>
            <p><strong>Location:</strong> {props.place}</p>
            </div>
            
        </section>
        </div>
        </>
    )
}

export default Fotografi














