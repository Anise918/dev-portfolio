import React from 'react';
import {AiFillGithub} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"



function App() {
  
  return (
    <div className="App">
      
      <header className='header'>
    
        <h4 className='name'>anitayala</h4>
        <div  className='icon.profile'>
        <div className='icons'>


        <a href=" https://github.com/Anise918  ">
  <AiFillGithub/>
</a>


  <AiFillTwitterSquare/>


<a href=" https://www.linkedin.com/in/anita-yala-293505205/ ">
  <AiFillLinkedin/>
</a>



        
        <div className='img-profile-container'>
        <img style={{width:'263px', justifyItems:'center' ,}} className='img-profile' src={process.env.PUBLIC_URL + '/assets/profilePicture.png'} alt="Web Capture"/>

       
       </div>
       </div>
    </div>

      </header>
      
      <main>
      <div className='profile'>
          <div  className='profile-head'>
          <h1 style={{color:'white',}} className='heading1'>Nice to meet you! <br/>

           <span className='span' 
           style={{textDecoration:'underline', 
           textDecorationColor:'#4EE1A0', color:'white',}}>
            I'm Anita Yala.</span></h1>
          <p className='intro'>Based in Kenya, I'm a front-end developer<br/>
           passionate about building accessible web applications that users love.</p>
         </div> 
          
          </div>
          <a 
          className='contact1' href='CONTACT ME'>CONTACT ME</a>
          <hr className='horizontal-line'/>
          
          <section className='skills'>

              <div className='skill-item'>
              <h2 className='title'>HTML</h2>
              <p className='skill-year'>2 years of experience</p>
              </div>
              <div className='skill-item'>
              <h2 className='title'>UI/UX</h2>
              <p className='skill-year'>2 years of experience</p>
              </div>
             <div className='skill-item'>
             <h2 className='title'>JavaScript</h2>
              <p className='skill-year'>2 Years of experience</p>
             </div>
             <div className='skill-item'>
             <h2 className='title'>React</h2>
              <p className='skill-year'>2 years of experience</p>
            
             </div><div className='skill-item'>
             <h2 className='title'>Accesibility</h2>
              <p className='skill-year'>2 years of experience</p>
            
             </div>
             <div className='skill-item'>
             <h2 className='title'>Tailwind</h2>
              <p className='skill-year'>2 years of experience</p>
            
             </div>

          </section>
         
            <div className='projects-sect' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 
              <h3 className='projects-head'>Projects</h3>

           <a href='Contact me' className='contact2'>Contact me</a>
            </div>
            

            <section className='grid'>

            <div className='project-item'>
            <img className='img' src={process.env.PUBLIC_URL + '/assets/WebCapture-dictionary.png'} alt="Web Capture"/>
            <div className='project-details'>
                  <h3 className='project-title'>Web Dictionary</h3>
                  <p className='project-tag'>
                  
                  <span>JAVASCRIPT</span><br/>
                  <span>CSS</span>
                </p>
                <div className='project-link'>
                  <div className='hover-overlay'>
                  <a href=' https://unrivaled-vacherin-6f58d6.netlify.app/ '>view project</a><br/>
                  <a href='https://github.com/Anise918/Dictionary-Api.git '>view code</a>
                  </div>
                  </div>
                  </div>
                  </div>

                  <div className='project-item'>
                  <img className='img' src='/assets/WebcaptureCountries.png' alt='Country Capture' />

                  
            <div className='project-details'>
                  <h3 className='project-title'>Countries Api</h3>
                  <p className='project-tag'>
                  
                  <span>REACT</span><br/>
                  <span>TAILWIND</span>
                </p>
                <div className='project-link'>
                  <div className='hover-overlay'>
                  <a href=' https://classy-liger-98050c.netlify.app/ '>view project</a><br/>
                  <a href='https://github.com/Anise918/Countries-Api-project.git '>view code</a>
                  </div>
                  </div>
                  </div>
                  </div>


              <div  className='project-item'>
              <img  className='img' src={process.env.PUBLIC_URL + '/assets/WebAudiophiles.png'} alt="Web Capture"/>
              <div className='project-details'>
                  <h3 className='project-title'>E-commerce Website</h3>
                  <p className='project-tag'>
                  <span>REACT</span><br/>
                  <span>JAVASCRIPT</span><br/>
            
                </p>
                <div className='project-link'>
                  <div className='hover-overlay'>
                  <a href=' https://peaceful-llama-7b8dcf.netlify.app/ '>view project</a><br/>
                  <a href=' https://github.com/Anise918/E-commerce-web-audiophiles.git '>view code</a>
                  </div>
                  </div>

              </div>

            </div>

            <div  className='project-item'>
              <img  className='img' src={process.env.PUBLIC_URL + '/assets/devPort.png'} alt="Web Capture"/>
              <div className='project-details'>
                  <h3 className='project-title'>Design Portfolio</h3>
                  <p className='project-tag'>
                  <span>REACT</span><br/>
                  <span>JAVASCRIPT</span><br/>
            
                </p>
                <div className='project-link'>
                  <div className='hover-overlay'>
                  <a href=' https://remarkable-mousse-692c1b.netlify.app/ '>view project</a><br/>
                  <a href=' https://github.com/Anise918/dev-portfolio.git '>view code</a>
                  </div>
                  </div>

              </div>

            </div>




            <div className='project-item'>
            <img className='img' src={process.env.PUBLIC_URL + '/assets/Game.png'} alt="Web Capture"/>
            <div className='project-details'>
                  <h3 className='project-title'>Whack-A-Mole Game</h3>
                  <p className='project-tag'>
                  
                  <span>JAVASCRIPT</span><br/>
                  <span>CSS</span>
                </p>
                
                  <div className='hover-overlay'>
                    <div className='project-link'>
                  <a href=' https://darling-dieffenbachia-4559f0.netlify.app/'>view project</a><br/>
                  <a href='https://github.com/Anise918/Whack-a-mole.git'>view code</a>
                  </div>
                  </div>
                  </div>
                  </div>

                  
                  <div  className='project-item'>
              <img  className='img' src={process.env.PUBLIC_URL + '/assets/Mmenu.png.png'} alt="Web Capture"/>
              <div className='project-details'>
                  <h3 className='project-title'>Menu App</h3>
                  <p className='project-tag'>
                  <span>REACT</span><br/>
                  <span>JAVASCRIPT</span>
            
                </p>
                <div className='project-link'>
                  <div className='hover-overlay'>
                  <a href=' https://profound-arithmetic-6cc54a.netlify.app/ '>view project</a><br/>
                  <a href=' https://github.com/Anise918/Menu-Restaurant.git '>view code</a>
                  </div>
                  </div>

              </div>

            </div>



  
          
    

                  
            </section>
       
           <section  style={{backgroundColor:'#242424', width:'100%'}}>
          <div className='Contacts' >
          
            <div style={{marginTop:'30px'}} className='contact-area'>
        
            <h2 className='Contact-head'>Contact</h2>
            <p className='contact-paragraph'>I would like to hear about your project and how i could help.<br/>
               Please fill in the form, and i'll get back to you as soon as possible</p><br/>
               </div>
          <div style={{display:'flex',flexDirection:'column'}} className='form-btn'>
          <form className='form-area'>
            <input className='form' type='text' placeholder='Name'/><br/>
            <input className='form' type='text' placeholder='email'/><br/>
            <input className='message' type='text' placeholder='message'/>
            </form>
            <div className='button'>
              <p className='btn-text'>SEND MESSAGE</p>
          <button className='btn' style={{width:'144px', height:'2px',background:'#4EE1A0'}} placeholder='send message'></button>
              </div>
              </div>
        </div>
          <hr/>
          <footer className='footer'>
            <h4>anitayala</h4>
            <div className='icons'>
       
        <a href=" https://github.com/Anise918  ">
  <AiFillGithub/>
</a>


  <AiFillTwitterSquare/>


<a href=" https://www.linkedin.com/in/anita-yala-293505205/ ">
  <AiFillLinkedin/>
</a>



        
    </div>

          </footer>
          </section>
         
      </main>
       
    </div>
  );
}

export default App;
