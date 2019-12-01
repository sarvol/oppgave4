import React from "react"
import selv from '../img/selv11-12.png'
import Checklist from './Checklist'
import Typical from "react-typical"


const Om = () => {
    return (
        <div>
            <main className="mainOm">
                <section className="secOm">
                    <div>
                        <img src={selv} className="selfPort" alt="logo" />
                    </div>
                    <div className="infoBox">
                        <h1>Sara Voll </h1>
                        <h3 className="job"> {" "}
                            <Typical 
                                loop={Infinity}
                                wrapper="bold"
                                steps={[
                                    "Graphic designer", 
                                    1200,
                                    "Front-end developer",
                                    1200,
                                    "Photographer",
                                    1200
                                ]}
                            /> 
                            </h3>
                            <p>My name is Sara and I am a Graphic Designer living in Oslo. 
                                I graduated from Kristiania University College in june 2019, with a semester abroad 
                                at Nuova Accademia di Belle Arti in 2018.

                                Currently studying Frontend-developing and 
                                working as an intern at MediaCom.
                            </p>
                    </div>
                    
                </section>
               
                <section className="secKontakt bgColor ">
                <Checklist />
                <div id="contactForm">
                
                <div> 
                    <label for="name"> Name* </label>
                    <input type="text" name="navn" placeholder="Ditt navn" required autocomplete="off" id="navn" />
                    <label for="e-mail"> E-mail* </label>
                    <input type="text" name="e-post" placeholder="Din e-post" required autocomplete="off" id="e-post" />
                </div>

                <div>
                    <label for="message"> Message* </label>
                    <input type="text" name="message" placeholder="Your Message" required autocomplete="off" id="message" />
                </div>

                <div>
                    <button type="submit">Send</button>
                </div>
                </div>
                </section>
            </main>
        </div>
    )
}



export default Om