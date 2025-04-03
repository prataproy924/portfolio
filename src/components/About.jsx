import React from "react";
import '../index.css';

export default function About() {
  return (
    <section id="about">
      <div>
        <div>
          <h1>
            Hi, I'm Reed.
            <br />I love to build amazing apps.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div>
            <a href="#contact">Work With Me</a>
            <a href="#projects">See My Past Work</a>
          </div>
        </div>
        <div>
          <img alt="hero" src="./coding.svg" />
        </div>
      </div>
    </section>
  );
}