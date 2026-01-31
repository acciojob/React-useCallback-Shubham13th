import React from "react";

import "../styles/App.css";
import { UseCallbackComp } from "./UseCallbackComp";
// SkillList Component - displays skills and handles deletion
const SkillList = ({ skills, onDeleteSkill }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li key={idx} id={`skill-number-${idx}`} onClick={() => onDeleteSkill(idx)}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

// UseCallbackComp Component - main component for adding and managing skills

// App Component - exports the main component
const App = () => {
  return <UseCallbackComp />;
};

export default App;
export { UseCallbackComp, SkillList };

