
import React from 'react'
import '../App.css'
import Typical from "react-typical"
import Prosjektbilder from './Prosjektbilder';


const VollDesign = () => {

    const prosjektbilder = [
        

        { alt : "Logo animation", title : "Logo",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/ab17e2f2-a265-42fc-b239-67fb49045417_rw_1920.gif?h=80505608a669e085e6a60be16c425d06"},

        { alt : "Tote bag with logo", title : "Tote bag",  url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/ca6cea43-f90d-443c-b8d8-2b4c922adb64_rw_1920.jpg?h=b7d2e89ff4632f7a0cc4c7a3118c74b1"},
        
        { alt : "programme book mock up", title : "Programme book",  url : "https://pro2-bar-s3-cdn-cf4.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/58024c12-9d55-4f45-b2b3-4c464d7ff296_rw_3840.jpg?h=66bc41913e020ead47ad5fbebbc7dea4"},

        { alt : "programme book mock up", title : "Programme book",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/8b8fb4f8-e1f8-46dd-85ec-d12441886cc8_rw_3840.jpg?h=b2b7c47b9dcc24f9b66d4b468259a6dd"},

    
        { alt : "Poster of acts", title : "Posters",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/a02af457-7428-4038-9366-18caada4c26c_rw_1920.jpg?h=555f36c7482afd7ee063b75176255b4d"},

        { alt : "Poster of Programme", title : "Poster",  url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/dc853553-b579-4194-8a35-5052f0d19ac6_rw_1200.jpg?h=df6642e99b03dc664aa4d9c824369132"},
       
        

        

        

        
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">Black Box teater</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Visual identity", 
                        1500,
                        "Re-design",
                        1500
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                A visual identity is a vital part of a company or a brand. To distinct themselves from competition and draw attentions from their target audience, a coherent and adaptable design is important. I re-designed the existing identity to Black Box teater in Oslo, where I focused on creating a new typeface that would represent Black Box, a typface with multiple ways of using depending on the media.


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