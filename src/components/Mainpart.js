import React, { useState, useEffect } from "react";
import wave from "../emojis/wave.png";
import technologist from "../emojis/technologist.png";
import pointRight from "../emojis/pointright.png";
import heartHands from"../emojis/heart-hands (2).png"
import "../styles.css"; // Import the CSS file
import Projects from "./Projects";
export default function Mainpart() {
  const email = "tuhsar2022@gmail.com";
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = [
    "नमस्ते!", // Hindi
    "Hello!", // English
    "Hola!", // Spanish
    "Bonjour!", // French
    "Ciao!", // Italian
    "Guten Tag!", // German
    "Olá!", // Portuguese
    "Здравствуйте!", // Russian
    "مرحبا!", // Arabic
    "Selamat pagi!", // Indonesian
    "Merhaba!", // Turkish
    "Hej!", // Swedish
    "여보세요!", // Korean
    "你好！", // Chinese
    "Kia ora!", // Maori
    "வணக்கம்!", // Tamil
    "నమస్కారం!", // Telugu
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ!", // Punjabi
    "Γειά σας!", // Greek
    "નમસ્તે!", // Gujarati
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="intro">
      <div className="hello">
        <h1>
          <span>{languages[languageIndex]}</span>
          <span>
            <img src={wave} alt="Wave" />
          </span>
        </h1>
      </div>

      <br />
      <div className="bio">
        <p>
          <span>
            I'm <strong>Tushar Verma</strong>, a design-minded front-end
            developer focused on building beautiful interfaces and experiences.
          </span>
        </p>
        <img src={technologist} alt="Technologist" />
      </div>
      <div className="touch">
        <p>
          <span>Get in touch</span>
          <span>
            <img src={pointRight} alt="Point Right" />
          </span>
          <strong>
            <a href={`mailto:${email}`}>{email}</a>
          </strong>
        </p>
      </div>

      <div className="background">
        <h2>BACKGROUND</h2>
        <div className="about">
          {" "}
          <p>
            As an enthusiastic front-end developer, my passion lies in crafting
            captivating user experiences. With a deep understanding of React, I
            have the expertise to bring designs to life and create interactive
            web applications that truly engage users. I am committed to staying
            at the forefront of front-end trends and continuously expanding my
            skill set to deliver cutting-edge solutions.
          </p>
          <p>
            With a keen eye for detail and a focus on delivering exceptional
            results, I bring confidence and dedication to every project I
            undertake. I thrive in collaborative team environments, where I can
            contribute my expertise and work alongside others to create seamless
            and visually appealing user interfaces.
          </p>
          <p>
            My commitment to continuous learning ensures that I stay up to date
            with the latest technologies and best practices, allowing me to
            deliver high-quality, pixel-perfect experiences. I am excited to
            contribute my skills and enthusiasm to help shape the success of
            future projects and exceed expectations as a front-end developer.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2>SKILLS</h2>
        <div className="languages">
          <ul className="bullet-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Redux</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Material-UI</li>
            <li>Linux</li>
          </ul>
        </div>

       
        {/* <h3>FRAMEWORKS</h3>
        <h3>TOOLS</h3>
        <h3>DESIGN</h3> */}
      </div>
      <div className="resume">View My Resume</div>
      <div className="projects">
          <h2>Featured Projects</h2>
          <div className="samples">
          <Projects src="https://merry-bubblegum-919802.netlify.app/"></Projects>
          <Projects src="https://idyllic-platypus-74663e.netlify.app/"></Projects>
          <p>project is fetching data from an api </p>
         
          <p>this project is fetching data from an api </p>
          <Projects src="https://idyllic-platypus-74663e.netlify.app/"></Projects>
          <Projects src="https://idyllic-platypus-74663e.netlify.app/"></Projects>
          <p>project is fetching data from an api </p>
         
          <p>this project is fetching data from an api </p>

          </div>
          

        </div>
        <footer className="footer">
  <div className="footer-content">
    <span>
      <p>coded with</p>
    </span>
    <span>
      <img src={heartHands} alt="Heart Hands"></img>
    </span>
    <span>
      <p>by tushar</p>
    </span>
    <div className="social">
    <a href="https://www.linkedin.com">LinkedIn</a>
      <a href="mailto:your@email">Email</a>
      <a href="https://github.com">Github</a>
        </div>
    
  </div>
</footer>

    </div>
  );
}
