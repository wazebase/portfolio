import React,{useEffect, useState} from 'react';
import './App.css';
import './grid.css';
import {useSpring,animated, config} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

function App() {
  const randomFacts = ["I'm passionate about various creative practices: music, writing and coding.",
  "I'm an exellent cook with several years of restaurant experience and working as chef at my own cafe.",
  "I have quite strong mathematical background. During university courses, handling high maths was a piece of pie for me.",
  "I play chess very good.","I just love coffee."]
  const [randomFact,setRandomFact] = useState("");
  const handleRandomFact = () => {
    if(randomFact==="") {
      setRandomFact(randomFacts[0]);
    }
    else if(randomFacts.indexOf(randomFact) !== randomFacts.length -1) {
      setRandomFact(randomFacts[randomFacts.indexOf(randomFact) +1]);
    }
    else if(randomFacts.indexOf(randomFact) === randomFacts.length -1){
      setRandomFact(randomFacts[0]);
    }
 
  }
  return (
    <div id="container">
 
   <nav id="nav-bar">
    
     <li><a className="nav-link" href="#about">About</a></li>
     <li ><a className="nav-link" href="#projects">Projects</a></li>
     <li><a className="nav-link" href="#certifications">Certifications</a></li>
     <li><a className="nav-link" href="#contact">Contact</a></li>
     </nav>
     <section id="intro" className="background-img">
      <div id="intro-phrase"><p>Hi! My name is Nikita and I love coding.</p>
      <button id="about-btn"><a href="#projects">Look at my work</a></button>
      </div>
      
     </section>
     <section id="about">
       <article>
       <h2>About me</h2>
         <p>I like to create things: that is what has brought me to programming. As a developer, I'm always looking for the better and simplier solutions 
           for every problem I'm facing. I have an eye for making great design and I love to make interesting and interactive projects.
           When I'm not programming, I'm making music or writing stories.
         </p>
       </article>
     <div id="random-fact">
 <button onClick ={handleRandomFact}>Get a random fact about me</button>
  {randomFact}</div>
  <article>
   <h2>My skill set</h2>
   <div id="skills">
   <div><i class="fab fa-html5"></i>HTML <Level level = {7} id={"html"}/></div>
   <div><i class="fab fa-css3-alt"></i>CSS <Level level = {7} id={"css"}/></div>
   <div><i class="fab fa-js"></i>Javascript <Level level = {6} id={"js"}/></div>
   <div><i class="fab fa-react"></i>React <Level level = {6} id={"react"}/></div>
   <div>React-spring animations <Level level = {5} id={"spring"}/></div>
   <div>JQuery <Level level = {4} id={"jquery"}/></div>
   </div>
  
 </article>
     </section>
     <section id="projects">
       <h2>My Projects</h2>
       <div id="projects-container">
       <Project src={"https://raw.githubusercontent.com/wazebase/project-images/main/landing%20page%20img.png"}
       web ={"https://codepen.io/wazebase/full/eYNPjpY"}name={"Landing Page"}/>
       <Project web={"https://codepen.io/wazebase/full/oNXPpgJ"} name={"Survey Form"}
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/survey-form.png"}/>
       <Project web={"https://chat-application.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/chat-app.png"} name={"Real-time Chat App"} git={"https://github.com/wazebase/chat-application"}/>
       <Project web={"https://javascript-calculator.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/js-calculator.png"} name={"Javascript Calculator"} git={"https://github.com/wazebase/javascript-calculator"}/>
       <Project web={"https://pomodoro-clock.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/pomodoro-clock.png"} name={"Pomodoro Clock"} git={"https://github.com/wazebase/pomodoro-clock"}/>
       <Project web={"https://markdown-reviewer.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/snip_20201022143540.png"} name={"Markdown Reviewer"} git={"https://github.com/wazebase/markdown-reviewer"}/>
       <Project web={"https://piano-play-machine.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/piano.png"} name={"Piano Play Machine"} git={"https://github.com/wazebase/piano-play-machine"}/>
       <Project web={"https://drum-machine-app.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/drum-machine.png"} name={"Drum Machine"} git={"https://github.com/wazebase/drum-machine-app"}/>

       </div>
     </section>
     <section id="certifications"></section>
     <section id="contact"></section>
     </div>
  );
}

const Level = (props) => {
  const levelChange = useSpring(({backgroundPosition: "left bottom",config:{duration:3000}}));
  let level = props.level;
  useEffect(()=>{
    let allBlocks = document.getElementById(props.id).children;
    for(level;level<10;level++) {
      allBlocks[level].style.backgroundColor = "white";
    }
  },[])
  
  return(
    <VisibilitySensor>
     {({ isVisible }) => (
       <div>
    <animated.div style ={isVisible?levelChange:null} className="level" id={props.id}>  
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
      <div className="level-sct"></div>
    </animated.div>
    <div>{props.level}</div>
    </div>
      )}
    </VisibilitySensor>
  )
}

const Project = (props) => {
return(
  <div id="project-div">
        <img src={props.src} className="project-img"  alt="project"/>
        <p className="project-title">
        <span className="code">&lt;</span>
        {props.name}
        <span className="code">&#47;&gt;</span>
      </p>
    <a
      href={props.web}
      target="_blank"
      ><button>See on web</button></a>
     <a
      href={props.git}
      target="_blank"
      ><button>GitHub</button></a>
      
  </div>
)
}
export default App;
