import React from "react"
import Arbeider from "./Arbeider"



const Arbeid = () => {

    const imgArbeids = [
        { type : "Book design", title : "Re-design of book covers",  url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/313ad8ad-c245-4b0b-a55a-6624372ff90b_rw_3840.jpg?h=abce5c6da0e05889dad6f22b9f66f6c4"},
        { type : "Visual identity", title : "Bachelor project", url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/a68cf246-74ae-4e93-9c1f-a53a3dee9aa7_rw_3840.jpg?h=4aa31499649d09f1ed4efe3870039ab4"},
        { type : "Visual identity", title : "Voll Design", url : "https://pro2-bar-s3-cdn-cf3.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/445e77e1-de69-4926-9183-ba1210654a59_rw_1920.jpg?h=6785b2a222e6bd765269b99baedcdcf4"},
        { type : "Visual identity", title : "Black Box teater", url : "https://pro2-bar-s3-cdn-cf4.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/58024c12-9d55-4f45-b2b3-4c464d7ff296_rw_600.jpg?h=82434e1ec7517f009ca0433fc38fe3c7"},
        { type : "Posters", title : "Emotions", url : "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3f93b686903123.5da8ad8d7a6f9.png"},  
        { type : "Magazine", title : "Tech magazine", url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/1a9860eb-a8ef-4008-ab3b-50d82f901618_rw_1920.jpg?h=0411d4ec8a8eaff425c08e401713bae0"},  
    ]
    

    return (
        <> 
        <main className="mainArbeid">
            <div className="sec-arbeid">  
        <div className="imgArbeid">
            {
            imgArbeids.map(
                (imgArbeid, i) => <Arbeider key={i} title={imgArbeid.title} url={imgArbeid.url} type={imgArbeid.type} /> 
            )
            }
        </div>
       
        </div>
        </main>
        
        </>
        
    )
}


export default Arbeid




// <div className="arbeid"> 
// <main className="sec-arbeid">
// <section className="imgArbeid">
//     {
//     imgArbeids.map(
//         (imgArbeid, i) => <Arbeider key={i} title={imgArbeid.title} url={imgArbeid.url} /> 
//     )
//     }

// </section>
// </main>
// </div>