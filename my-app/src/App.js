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
       <img src="https://scontent.ftll2-1.fna.fbcdn.net/v/t1.0-9/53216088_2124686140954317_8084639527940915200_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=uqWPqHTOnQsAX9iwa_v&_nc_ht=scontent.ftll2-1.fna&oh=48f3b1753c669beae926e7012ff23d8d&oe=5FB74207" />
  
         <p>I like to create things: that is what has brought me to programming. As a developer, I'm always looking for the better and simplier solutions 
           for every problem I'm facing. I have an eye for making great design and I love to make interesting and interactive projects.
           When I'm not programming, I'm making music or writing stories.
         </p>
       </article>
     
  <article id="skill-art">
   <h2>My skill set</h2>
     <ul id="skill-list">
  <li> <i className="fab fa-html5" style={{color:"orange"}}></i>HTML </li>
  <li> <i className="fab fa-css3-alt" style={{color:"blue"}}></i>CSS </li>
  <li><i className="fab fa-js" style={{color:"red"}}></i>Javascript </li>
  <li><i className="fab fa-react" style={{color:"lightblue"}}></i>React </li>
  <li><img id="spring" src="https://camo.githubusercontent.com/b271ecbaca87f7700f877081eb1b83b4b8c2a223/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67">
    </img>Spring</li>
  <li><img id="jquery"src="https://img.icons8.com/ios-filled/50/000000/jquery.png"/>JQuery</li>
  <li><i className="fab fa-python" style={{color:"orange"}}>Python</i></li>
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
       <Project src={"https://raw.githubusercontent.com/wazebase/project-images/main/chess.png"}
       web ={"https://codepen.io/wazebase/full/eYNPjpY"}name={"Landing Page"} 
       info={"One page design for imaginary chess company. Made with HTML and CSS."}/>
       <Project web={"https://codepen.io/wazebase/full/oNXPpgJ"} name={"Survey Form"}
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/survey.png"}
       info={"Can send actual emails. Made with HTML,CSS and JS."}/>
       <Project web={"https://chat-application.wazebase.vercel.app/"} 
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/chat-app.png"} 
       name={"Real-time Chat App"} git={"https://github.com/wazebase/chat-application"}
       info={"A project made following along JS Mastery course. Uses Socket.io,React and Node.js."}/>
       <Project web={"https://javascript-calculator.wazebase.vercel.app/"} src={"https://raw.githubusercontent.com/wazebase/project-images/main/calculator.png"} 
       name={"Javascript Calculator"} git={"https://github.com/wazebase/javascript-calculator"}
       info={"Made with React. This calculator uses Formula/Expression Logic."}/>
       <Project web={"https://pomodoro-clock.wazebase.vercel.app/"} 
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/pomodoro.png"} 
       name={"Pomodoro Clock"} git={"https://github.com/wazebase/pomodoro-clock"}
       info={"25+5 Clock made with React. Uses accurateInterval that works more precicely than the regular one."}/>
       <Project web={"https://markdown-reviewer.wazebase.vercel.app/"} 
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/reviewer.png"}
        name={"Markdown Reviewer"}
         git={"https://github.com/wazebase/markdown-reviewer"} info={"Made with React. The editor displays text written with Marked in preview as HTML."}/>
       <Project web={"https://piano-play-machine.wazebase.vercel.app/"} 
       info={"Made using React, Tone.js and Spring-animations. Reads notes written in input as music and plays it. Also, it can show different piano scales."}src={"https://raw.githubusercontent.com/wazebase/project-images/main/piano.png"} name={"Piano Play Machine"} git={"https://github.com/wazebase/piano-play-machine"}/>
       <Project web={"https://drum-machine-app.vercel.app/"} info={"Playable drum machine made with React. You can click on pads or play with the keyboard."}
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/snip_20201022162150.png"} name={"Drum Machine"} git={"https://github.com/wazebase/drum-machine-app"}/>
        <Project web={"https://quote-app-rosy.vercel.app/"} info={"Made with React and Spring-animations. Randomly chooses and displays a quote and it's author."}
       src={"https://raw.githubusercontent.com/wazebase/project-images/main/quote.png"} name={"Random Quote App"} git={"https://github.com/wazebase/quote-app"}/>

       
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
      ><button>View on Codepen</button></a></>): (<><div><a
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
