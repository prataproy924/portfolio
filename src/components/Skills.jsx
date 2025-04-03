import React from "react";
import '../index.css';
export default function Skills() {
  // Define the skills data directly in the component
  const skills = [
    { title: "JavaScript" },
    { title: "HTML & CSS" },
    { title: "React.js" },
    { title: "Next.js" },
    { title: "Git & GitHub" },
  ];

  return (
    <section id="skills">
      <div>
        {/* Title Section */}
        <div>
          <h1>Skills & Technologies</h1>
          
        </div>

        {/* Skills List */}
        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <div>
                <span>{skill.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}