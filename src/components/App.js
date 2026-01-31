import React, { useState, useCallback } from "react";
import "../styles/App.css";

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
const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [inputValue, setInputValue] = useState("");

  // useCallback to memoize the delete function
  const handleDeleteSkill = useCallback((idx) => {
    setSkills((prevSkills) => prevSkills.filter((_, index) => index !== idx));
  }, []);

  // useCallback to memoize the add skill function
  const handleAddSkill = useCallback(() => {
    const trimmedInput = inputValue.trim();
    
    // Validation: no empty strings and no duplicates
    if (trimmedInput === "") {
      alert("Please enter a skill");
      return;
    }

    if (skills.includes(trimmedInput)) {
      alert("This skill already exists");
      return;
    }

    setSkills((prevSkills) => [...prevSkills, trimmedInput]);
    setInputValue("");
  }, [inputValue, skills]);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  return (
    <div className="container">
      <h1 id="heading">use Callback Hook</h1>
      <div className="form-container">
        <input
          id="skill-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a skill"
        />
        <button id="skill-add-btn" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>
      <SkillList skills={skills} onDeleteSkill={handleDeleteSkill} />
    </div>
  );
};

// App Component - exports the main component
const App = () => {
  return <UseCallbackComp />;
};

export default App;

