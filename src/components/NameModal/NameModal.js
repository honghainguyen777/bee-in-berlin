import React, { useState } from "react";
import "./NameModal.css";

const NameModal = ({ setUserName }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name) {
      setError("Please enter your name!");
    }

    setUserName(name.toUpperCase());
  };

  return (
    <div className="component-name-modal">
      <div className="name-modal-question">What's your name?</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && <div className="name-modal-error">{error}</div>}
      <button onClick={handleSubmit}>Start</button>
    </div>
  );
};

export default NameModal;
