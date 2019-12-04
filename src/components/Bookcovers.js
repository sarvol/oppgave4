import React from 'react'
import '../App.css'
import Typical from "react-typical"

import Prosjektbilder from './Prosjektbilder';


const Bookcovers = () => {

    const prosjektbilder = [
        
        
        { alt : "Handmaid´s tale bookcover", title : "Handmaid´s tale",  url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/313ad8ad-c245-4b0b-a55a-6624372ff90b_rw_3840.jpg?h=abce5c6da0e05889dad6f22b9f66f6c4"},

        { alt : "1894 bookcover", title : "1894",  url : "https://pro2-bar-s3-cdn-cf5.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/6f34a4a0-bd81-410d-b64f-6da519450141_rw_3840.jpg?h=46949f5497c97c6f2c2bfc1663aff612"},
       
        { alt : "Brave New World bookcover", title : "Brave New World",  url : "https://pro2-bar-s3-cdn-cf5.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/629e72d2-d9d5-437b-a574-46b05c31903d_rw_3840.jpg?h=e36858bac8d629f34d916bc9329514f9"},
       
        { alt : "Fahrenheit 451 bookcover", title : "Fahrenheit 451",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/737c9fd5-62a9-464f-b7ff-04d463ac3c66_rw_3840.jpg?h=ac3a465f390ebff1273d8941f205adb4"}

        
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">Modern Classics</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Printed media", 
                        1500,
                        "Re-design of bookcovers",
                        1200
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                A school project based on re-designing a new book series. I chose Modern Classic, and focused on creating coherent design using same illustration style and the same colour palette throughout.

                </p>
            

            </section>
            <section>
            <div className="prosjektbilder">
            {
            prosjektbilder.map(
                (prosjektbilde, i) => <Prosjektbilder key={i} title={prosjektbilde.title} url={prosjektbilde.url} type={prosjektbilde.type} path={prosjektbilde.path}/> 
            )
            }
            
        </div>
        </section>
            

           
            
        </main>
    )
}

export default Bookcovers