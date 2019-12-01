

import React  from 'react'
import Fotoer from './Fotoer'

 


const Foto = () => {  
  
    const Fotografier = [
      {alt : "Modern", title : "Modern", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf1.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/2451482d-7098-496a-a01d-fc1db15818d4_rw_1200.jpg?h=88086f97ed8fe811e7e21b8ea8b28d60"},
      
      {alt : "Pottery", title : "Pottery", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf5.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/6c6d1333-2f93-40cf-be04-b3155bb37e8d_rw_1200.jpg?h=ed45dd1377981d0703ff34ff04df30b6"},
      
      {alt : "Contrast", title : "Contrast", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/d6f330fc-eef3-44c5-bebb-23cd1147e010_rw_1200.jpg?h=8f21d0aea5d598649d3f1fdc113053bc"},
      
      {alt : "Staircase", title : "Staircase", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/157dd665-2971-420d-bc1e-6caea93e532c_rw_1200.jpg?h=d0eb8f6838071a460fa6ef03c5ba38d8"},
      
      {alt : "Pinacoteca di brera", title : "Pinacoteca di brera", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/30c7cb1d-8ad2-4065-b8d4-ec83520a2187_rw_1200.jpg?h=615dbafaaea3aacd8f270aff720f573f"},
      
      {alt : "Fondazione prada", title : "Fondazione prada", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/39de63ae-235c-4db8-97d3-7babdbc8779a_rw_1200.jpg?h=1b1fe97553d7919c93dc2fe438ecf2df"},
      
      {alt : "Staircase", title : "Staircase", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf3.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/4104e3a6-c6bb-4ee9-a71b-b14ce1f308e8_rw_1200.jpg?h=33b600b8f4d72bf0c3e045f4d6ff1feb"},
      
      {alt : "Sculpture", title : "Sculpture", year : "2019", place : "Oslo", url : "https://pro2-bar-s3-cdn-cf6.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/00c51b93-1ba6-44b7-af20-1cf108f12e76_rw_1200.jpg?h=c09adb5c794a9eea59ec5a8e721533df"},
      
      {alt : "House", title : "House", year : "2019", place : "Nesodden", url : "https://pro2-bar-s3-cdn-cf3.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/4a9ad34f-1889-4e8b-a920-612c82ae3a76_rw_1200.jpg?h=3f9b232675ae7f927c305239e21124a5"},
      
      {alt : "Galleria Vittorio Emanuele II", title : "Galleria Vittorio Emanuele II", year : "2018", place : "Milano", url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/895c2507-a573-4d39-8aba-9f51b7cc3493_rw_1200.jpg?h=8df906d6ffdab23ab30641536635c974"},
      
      {alt : "Natural history museum", title : "Natural history museum", year : "2019", place : "London", url : "https://pro2-bar-s3-cdn-cf.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/b30a687b-f5de-408f-af79-8dbdea7965a0_rw_1200.jpg?h=4a8156304ff03147598c3a436e504063"},

      {alt : "Spring", title : "Spring", year : "2019", place : "Copenhagen", url : "https://pro2-bar-s3-cdn-cf2.myportfolio.com/c63e1ab5-862e-4a2c-9391-4f6d7cec9251/d3083679-4b6a-4eaa-9a3b-da557e780307_rw_1200.jpg?h=c7a0b223dfe6049d958fb40bb952abd5"}
      
    ]


   
    
    return (
      <div>
          <main className="secFoto">
            <div className="fotoer">

                {
                Fotografier.map(
                    (Fotografi, i) => <Fotoer key={i} title={Fotografi.title} url={Fotografi.url} year={Fotografi.year} place={Fotografi.place} /> 
                )
                }
            </div>
        </main>
      </div>
   )
}
export default Foto



