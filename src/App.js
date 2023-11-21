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
        <AiFillGithub/>
        <AiFillTwitterSquare/>
        <AiFillLinkedin/>
        <div className='img-profile-container'>
        <img   className='img-profile' src={process.env.PUBLIC_URL + '/assets/WebCapture-profile.png'} alt="Web Capture"/>
       </div>
       </div>
    </div>

      </header>
      
      <main>
      <div className='profile'>
          <div className='profile-head'>
          <h1 style={{color:'white',}} className='heading1'>Nice to meet you!  <span className='span' style={{textDecoration:'underline', textDecorationColor:'#4EE1A0', color:'white',}}>I'm Anita Yala.</span></h1><br/>
          <p className='intro'>Based in Kenya, I'm a front-end developer<br/>
           passionate about building accessible web applications that users love.</p>
         </div> 
          
          </div>
          <a className='contact1' href='CONTACT ME'>CONTACT ME</a>
          <hr className='horizontal-line'/>
          
          <section className='skills'>

              <div className='skill-item'>
              <h2 className='title'>HTML</h2>
              <p className='skill-year'>4 years of experience</p>
              </div>
              <div className='skill-item'>
              <h2 className='title'>CSS</h2>
              <p className='skill-year'>4 years of experience</p>
              </div>
             <div className='skill-item'>
             <h2 className='title'>JavaScript</h2>
              <p className='skill-year'>4 Years of experience</p>
             </div>
             <div className='skill-item'>
             <h2 className='title'>React</h2>
              <p className='skill-year'>4 years of experience</p>
            
             </div><div className='skill-item'>
             <h2 className='title'>Accesibility</h2>
              <p className='skill-year'>4 years of experience</p>
            
             </div>
             <div className='skill-item'>
             <h2 className='title'>Tailwind</h2>
              <p className='skill-year'>4 years of experience</p>
            
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
                  <a href=' https://unrivaled-vacherin-6f58d6.netlify.app/ '>view project</a><br/>
                  <a href='https://github.com/Anise918/Dictionary-Api.git '>view code</a>
                  </div>
                  </div>
                  </div>

                  <div className='project-item'>
            <img className='img' src={process.env.PUBLIC_URL + '/assets/country.png.png'} alt="Web Capture"/>
            <div className='project-details'>
                  <h3 className='project-title'>Countries Api</h3>
                  <p className='project-tag'>
                  
                  <span>REACT</span><br/>
                  <span>TAILWIND</span>
                </p>
                <div className='project-link'>
                  <a href=' https://classy-liger-98050c.netlify.app/ '>view project</a><br/>
                  <a href='https://github.com/Anise918/Countries-Api-project.git '>view code</a>
                  </div>
                  </div>
                  </div>


              <div className='project-item'>
              <img className='img' src={process.env.PUBLIC_URL + '/assets/WebCapture-todo.png'} alt="Web Capture"/>
              <div className='project-details'>
                  <h3 className='project-title'>TODO-APP</h3>
                  <p className='project-tag'>
                  <span>REACT</span><br/>
                  <span>JAVASCRIPT</span><br/>
            
                </p>
                <div className='project-link'>
                  <a href='view project'>view project</a><br/>
                  <a href='https://github.com/Anise918/Todo-app.git'>view code</a>
                  </div>

              </div>

            </div>
            <div className='project-item'>
            <img className='img' src={process.env.PUBLIC_URL + '/assets/WebCapture-game.png'} alt="Web Capture"/>
            <div className='project-details'>
                  <h3 className='project-title'>Whack-A-Mole Game</h3>
                  <p className='project-tag'>
                  
                  <span>JAVASCRIPT</span><br/>
                  <span>CSS</span>
                </p>
                <div className='project-link'>
                  <a href='file:///C:/Users/ANITA/Downloads/whack-a-mole-starter-files/whack-a-mole-starter-files-main/index.html'>view project</a><br/>
                  <a href='https://github.com/Anise918/Anise.github..git'>view code</a>
                  </div>
                  </div>
                  </div>

                  <div className='project-item'>
                  <img className='img' src={process.env.PUBLIC_URL + '/assets/WebCapture-fylo.png'} alt="Web Capture"/>
                  <div className='project-details'>
                  <h3 className='project-title'>Fylo Dark Theme Landing Page</h3>
                  <p className='project-tag'>
                  
                  <span>HTML</span>
                  <span>CSS</span><br/>
                  </p>
                  <div className='project-link'>
                  <a href='view project'>view project</a><br/>
                  <a href='view code'>view code</a>
                  </div>
                  </div>
                  </div>
                  <div className='project-item'>
                  <img className='img' src={process.env.PUBLIC_URL + '/assets/WebCapture-timer.png'} alt="Web Capture"/>
                  <div className='project-details'>
                  <h3 className='project-title'>Count-Down Timer</h3>
                  <p className='project-tag'>
                  
                  <span>JAVASCRIPT</span><br/>
                  <span>CSS</span>
                </p>
                <div className='project-link'>
                  <a href='file:///C:/Users/ANITA/Downloads/Count%20Down%20Timer%20[Starter%20Files]/0b3ec3551fcfac5c90742954b398b555-3720e275ae28df5433eaf0b3c7dcb037b040ebd8/index.html'>view project</a><br/>
                  <a href='https://github.com/Anise918/Anise.github.io.git'>view code</a>
                  </div>
                  </div>
                  </div>
            </section>
      
          <div className='Contacts' >
          
            <div className='contact-area'>
        
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
        <AiFillGithub/>
        <AiFillTwitterSquare/>
        <AiFillLinkedin/>
    </div>

          </footer>
         
      </main>
       
    </div>
  );
}

export default App;
