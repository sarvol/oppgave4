
import React from 'react'
import '../App.css'
import Typical from "react-typical"
import Prosjektbilder from './Prosjektbilder';


const Tech = () => {

    const prosjektbilder = [
        
        
        { alt : "Front pages magazines", title : "T.E.C.H. front pages",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/1a9860eb-a8ef-4008-ab3b-50d82f901618_rw_1920.jpg?h=0411d4ec8a8eaff425c08e401713bae0"},

        { alt : "Spread in magazine", title : "Spread in T.E.C.H.",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/7698e296-9279-4bed-bcb2-3b8be9f26bbe_rw_1920.jpg?h=b77e589f931a05db580a9136fbb17b12"},
       
        { alt : "Spread in magazine", title : "Spread in T.E.C.H.",  url : "https://pro2-bar-s3-cdn-cf4.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/f834f6ab-1f3d-470c-8f68-78c2ed4e2f58_rw_1920.jpg?h=400509cfd029d83339bb46bd0fa25f2c"},

        { alt : "Tech front page", title : "T.E.C.H. front page",  url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/242e3ffa-5788-4546-980b-bd02c203df44_rw_3840.jpg?h=fdb5247549727906a43ae77b26a2965a"}

        

        
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">T.E.C.H. magazine</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Printed media", 
                        1500,
                        "Magazine",
                        1500
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                A popular science magazine based on science and technology. The new magazine series focus on creating coherent design with a limited colour palette, interesting photos and new relevant content that may take an interest amongst an older target group.

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

export default Tech