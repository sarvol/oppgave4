import React from 'react'
import '../App.css'
import Typical from "react-typical"

import Prosjektbilder from './Prosjektbilder';


const Bachelor = () => {

    const prosjektbilder = [
        
        
        { alt : "Price tag", title : "Price tag",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/1743861b-2a9f-45d2-81b2-f350a8abe070_rw_3840.jpg?h=043108c2e0d8914734b3407e883c3657"},

        

        { alt : "Label", title : "Label",  url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/9318d65e-c792-4a36-8ff3-650b107164d0_rw_1920.jpg?h=c7c5593ac1d76b24bfd3103a3b74c5ac"},

        

        { alt : "Look book spread", title : "Look book spread",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/b1a0ceb8-3c12-47b8-aaa6-186bc91987ef_rw_3840.jpg?h=446f7722eeefe62f2b7509f2111c443a"},

        { alt : "Look book spread", title : "Look book spread",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/04964d58-d5db-495b-a6ae-6ba6604bd2c8_rw_3840.jpg?h=1c93fac239f06fa8f461928490328c63"},
        

        { alt : "Posters outside", title : "Outdoor poster",  url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/ccdf0f3a-60f7-4205-b80a-4e1dd88fe575_rw_1200.jpg?h=3264adbb20d6b4d18740e9f60d5c06d5"},

       
        

        { alt : "Posters outside", title : "Outdoor poster",  url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/a68cf246-74ae-4e93-9c1f-a53a3dee9aa7_rw_1200.jpg?h=3b95584a6c3e2458109bb3eb3563d85a"},

        { alt : "Editorial", title : "Editorial",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/103b9611-69b1-4cd9-b2cc-d476cfe900b3_rw_1920.jpg?h=651dce06a0b75d9c8488e1fe524144c2"},

        { alt : "Interior illustration", title : "Interior",  url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/897d4194-7d57-411b-905f-c71c8448464c.jpg?h=951b26c6f6f214a0ca87331a10293c54"},

        { alt : "Shopping bag", title : "Shopper",  url : " https://pro2-bar-s3-cdn-cf3.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/40405c2f-9bde-4770-abc3-347964f994b2_rw_1200.jpg?h=05bafbfd93ecaf178ab6182fe05c2310"},

        { alt : "Gift card mock up", title : "Gift card",  url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/39a28a59-ecfe-4f0f-94ca-10cbc2b208fd_rw_3840.jpg?h=2bbc14549289eef6de483a24cc6628b1"}
    ]
    



    return(

        <main className="prosjekt">
            <section >
                <h1 className="prosjektTittel">Terra Manes</h1>
                <h3 className="prosjektnavn"> {" "}

                <Typical 
                    loop={Infinity}
                    wrapper="bold"
                    steps={[
                        " ", 
                        1200,
                        "Bachelor project", 
                        1500,
                        "Visual identity",
                        1500
                        
                        ]}
                /> 
                 </h3>

                <p className="prosjektInfo">
                    A new visual identity for Terra Manes. Terra Manes is a new fictional clothing brand that focus on sustainable fashion on a luxury marked.

                    For my final bachelor project I wanted to shed light on the problems found in the fashion and textile industry. The fashion industry is the second most polluted industry in the world and in need for change. My solution was to create a brand that focus on quality and sustainability on a luxury marked, where I believe the changes should begin. The identity focus on how you can still buy luxury items that are more environmentally friendly, without losing the touch of luxury.

                    Buying high quality, long lasting and timeless pieces should not be bought on the cost of the environment or the workers, and should be prioritised over the mass production of trend pieces consumed today.
                </p>
                <div className="imgProsjekt">
                    <img  alt="Logo" src="https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/82a77121-f2d8-462a-8f38-c79f637c073b_rw_1920.png?h=cd494aa4d5844a969ab4858cb7d32294" />
                    <img alt="Logo"  src="https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/82a77121-f2d8-462a-8f38-c79f637c073b_rw_1920.png?h=cd494aa4d5844a969ab4858cb7d32294" />
                    <img alt="Logo"  src="https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/82a77121-f2d8-462a-8f38-c79f637c073b_rw_1920.png?h=cd494aa4d5844a969ab4858cb7d32294" />
                </div>
               

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

export default Bachelor