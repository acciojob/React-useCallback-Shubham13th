import React from "react";

const SkillList = ({ skills, onDeleteSkill }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, idx) => (
        <li key={idx} id={`skill-number-${idx}`} onClick={() => onDeleteSkill(idx)}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export { SkillList };