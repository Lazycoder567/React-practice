import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = (event) => {
    setHeading(event.target.value);
  };

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default App;
