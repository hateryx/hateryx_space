import React from "react";
import skills from "../assets/css/skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML + CSS", proficiency: "proficient" },
    { name: "JavaScript", proficiency: "competent" },
    { name: "ReactJS", proficiency: "competent" },
    { name: "NextJS", proficiency: "intermediate" },
    { name: "Tailwind CSS", proficiency: "competent" },
    { name: "Git", proficiency: "intermediate" },
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-medium mb-2">Tech Stack: Front-end</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {skills.map(({ name, proficiency }) => (
          <div key={name}>
            <div className="text-sm font-medium">{name}</div>
            <div className="bg-gray-300 h-4 rounded-full">
              <div
                className={`bg-${proficiency}-500 h-full rounded-full`}
                style={{
                  width: `${
                    proficiency === "novice"
                      ? "10%"
                      : proficiency === "advanced beginner"
                      ? "25%"
                      : proficiency === "intermediate"
                      ? "50%"
                      : proficiency === "competent"
                      ? "75%"
                      : proficiency === "proficient"
                      ? "90%"
                      : proficiency === "master"
                      ? "95%"
                      : "100%"
                  }`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
