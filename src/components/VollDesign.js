
import React from 'react'
import '../App.css'
import Typical from "react-typical"
import Prosjektbilder from './Prosjektbilder';


const VollDesign = () => {

    const prosjektbilder = [
        
        
        { alt : "Business card", title : "Business card",  url : "https://pro2-bar-s3-cdn-cf3.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/445e77e1-de69-4926-9183-ba1210654a59_rw_1920.jpg?h=6785b2a222e6bd765269b99baedcdcf4"},

        { alt : "Logo animation", title : "Logo",  url : "https://pro2-bar-s3-cdn-cf4.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/5c96a9fb-45b6-4004-a2e9-553298ce5657_rw_1200.gif?h=a7e07de5b195288ff5d752131f65e399"},

        { alt : "Logo", title : "Logo",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/ba7cb4a5-1b6f-45ef-a6ca-7f8a5a87b20a_rw_1200.jpg?h=908683fb886865910f1493ec30f80c60"},
       
        { alt : "Tote bag with logo", title : "Tote bag",  url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/3b7e385a-c4ab-43e4-8c6f-e0553702ac75_rw_1920.jpg?h=c1edee6e17ae5ebce9d085352f5e98b1"}

        

        

        
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">Voll Design</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Visual identity", 
                        1500,
                        "Self-branding",
                        1500
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                A visual identity is a vital part of a company or a brand. to distinct themselves from competition and draw attentions from their target audience, a coherent and adaptable design is important. I decided to give myself an identity for my own brand, that represent my style and also make it easier to clients to recognise me. The geometric shapes is used to show how I can play with both shapes and typography, two areas I enjoy working with, where I show how the different shapes in my logo writes out my last name.


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

export default VollDesign