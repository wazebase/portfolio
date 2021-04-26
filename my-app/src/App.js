import React,{useEffect, useState} from 'react';
import './App.css';
import './grid.css';
import {useSpring,animated, config} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

function App() {
  return (
    <div id="container">
 
   <nav id="nav-bar">
    
     <li><a className="nav-link" href="#about">About</a></li>
     <li ><a className="nav-link" href="#projects">Projects</a></li>
     <li><a className="nav-link" href="#contact">Contacts</a></li>
     </nav>
     <section id="intro" className="background-img">
      <div id="intro-phrase"><p>Hey, I'm Nikita and I just love coding.</p>
      </div>
      <button id="about-btn"><a href="#projects">Look at my work</a></button>
      <div id="links">
      <a target="_blank" href="https://www.linkedin.com/in/nikita-menkov-5b90481ba/"><i id="linkedin" className="fab fa-linkedin"></i></a>
     <a target="_blank" href="https://github.com/wazebase/"><i id="github" className="fab fa-github-square"></i></a>
     <a target="_blank" href="https://twitter.com/wazebase"><i id="twitter"className="fab fa-twitter-square"></i></a>
     <a target="_blank" href="https://www.facebook.com/nikita.menkov.9"><i id="facebook"className="fab fa-facebook-square"></i></a>
     </div>
     </section>
     <section id="about">
       <article id="me">
       <h2>About me</h2>
       <img src="https://raw.githubusercontent.com/wazebase/project-images/main/people/nikita.webp" />
  
         <p>I like to create things: that is what has brought me to programming. As a developer, I'm always looking for the better and simplier solutions 
           for every problem I'm facing. I have an eye for making great design and I love to make interesting and interactive projects.
           When I'm not programming, I'm making music or writing stories.
         </p>
       </article>
     
  <article id="skill-art">
   <h2>My skill set</h2>
     <ul id="skill-list">
  <li>HTML/CSS</li>
  <li>Javascript</li>
 <li>TypeScript</li>
 <li>React</li>
 <li>Node.js</li>
 <li>Jest</li>
 <li>Enzyme</li>
 <li>REST API</li>
 <li>Express</li>
 <li>SEO</li>
   </ul>
  
  
 </article>
 <div id="resume-container">
 <a id="resume-link"target="_blank" href="https://www.cakeresume.com/nikita-menkov"><button id="resume">Check my resume</button></a>
 </div>
     </section>
     <section id="projects">
       <div id="projects-title">
       <h2>My Projects</h2>
       </div>

       <Project web={"http://www.helmda-systems.com"} name={"HelmDA Systems"}
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/helmda.png"}
       info={"Website made with React for the startup project HelMDA systems"}/>
       <Project web={"https://chat-application.wazebase.vercel.app/"} 
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/chat-app.png"} 
       name={"Real-time Chat App"} git={"https://github.com/wazebase/chat-application"}
       info={"A project made following along JS Mastery course. Uses Socket.io,React and Node.js."}/>
        <Project web={"https://piano-play-machine.wazebase.vercel.app/"} 
       info={"Made using React, Tone.js and Spring-animations. Reads notes written in input as music and plays it. Also, it can show different piano scales."}src={"https://raw.githubusercontent.com/wazebase/project-images/main/piano.png"} name={"Piano Play Machine"} git={"https://github.com/wazebase/piano-play-machine"}/>
       <Project web={"https://pomodoro-clock.wazebase.vercel.app/"} 
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/pomodoro.png"} 
       name={"Pomodoro Clock"} git={"https://github.com/wazebase/pomodoro-clock"}
       info={"25+5 Clock made with React. Uses accurateInterval that works more precicely than the regular one."}/>
  
       
       

       
     </section>
     <section id="contact">
       <p>Write me: <span>nikita.menkov@gmail.com</span></p>
       <p>Call me: <span>+37258071353</span></p>
     </section>
     </div>
  );
}


const Project = (props) => {
  const [hover,setHover] = useState(false);
  const appear=useSpring(hover?{opacity:1,delay:250,config:{duration:400}}:{opacity:0});
return(  
    <div id="img-div" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}style={{backgroundImage:"url" + "(" + props.src + ")"}}>
  
        <animated.div style={appear} id="project-info">
        <p className="project-title">
        {props.name}
      </p>
          <p>{props.info}</p>
     
     {props.git===undefined? (<><a
      href={props.web}
      target="_blank"
      ><button>See the website</button></a></>): (<><div><a
      href={props.web}
      target="_blank"
      ><button>See on web</button></a>
     <a
      href={props.git}
      target="_blank"
      ><button>GitHub</button></a> </div></>)}

      </animated.div>
        </div>
     
)
}
export default App;
