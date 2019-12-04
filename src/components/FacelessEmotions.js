
import React from 'react'
import '../App.css'
import Typical from "react-typical"
import Prosjektbilder from './Prosjektbilder';


const FacelessEmotion = () => {

    const prosjektbilder = [
        
        
        { alt : "Afraid poster", title : "Afraid",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/84319d70-fac8-4cda-8cb6-c82cdd2fa72c_rw_3840.png?h=d61553a52d4505534789559f85ead187&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvZDdjMzExODY5MDMxMjMuNWRhOGFkOGQ3OWM1Ny5wbmc="},

        { alt : "Disgusted poster", title : "Disgusted",  url : "https://pro2-bar-s3-cdn-cf4.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/58bab65e-5ce0-4e6c-9a2f-96f13d360996_rw_3840.png?h=a8364ebf5d8055381cbc67b0ce7dc92f&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvYmFkMjZiODY5MDMxMjMuNWRhOGFkOGQ3OTQ3MC5wbmc="},
       
        { alt : "Suprised poster", title : "Suprised",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/7b9ee082-efb5-4ec9-bb84-43941ef057a1_rw_3840.png?h=f69375a3938d103bb63864079668590f&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvODNjN2JkODY5MDMxMjMuNWRhOGFkOGQ3YjZmOS5wbmc="},

        { alt : "Happy poster", title : "Happy",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/010b2eab-8a7d-4cd8-842d-c1f4cc3d021e_rw_3840.png?h=9d747b66612e7c4b3cfbb0caaf89cc72&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvOWMzZWNjODY5MDMxMjMuNWRhOGFkOGQ3OGM0NS5wbmc="},

        { alt : "Sad poster", title : "Sad",  url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/cdbaf6a7-8a6f-4675-99c7-4da4a7033aee_rw_3840.png?h=7e11634cf78c17c91774cc4a7286df76&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvYzdiMTdiODY5MDMxMjMuNWRhOGFkOGQ3YWY1OC5wbmc="},
       
        { alt : "Angry poster", title : "Angry",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/70b752ce-52d9-4c5a-a591-8554f266c8ad_rw_3840.png?h=34fe60bfd8fa462cc49460c6d47bce46&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RfbW9kdWxlcy9zb3VyY2UvM2Y5M2I2ODY5MDMxMjMuNWRhOGFkOGQ3YTZmOS5wbmc="}

        
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">Faceless emotions</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Printed media", 
                        1500,
                        "Posters",
                        1500
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                Faces and emotions are hard to read, sometimes even harder to detect. The face is a vital part of showing how you feel. We grow up learning how to express ourselves through different emotions, and read other people’s emotions and act accordingly. This series of poster tries to describe and visualize the 6 most common emotions through colours, when the facial expression is taken away.

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

export default FacelessEmotion