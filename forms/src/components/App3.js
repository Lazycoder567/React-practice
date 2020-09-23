import React from "react";

const App = () => {
  const array1 = ["apple", "pairs", "oranges"];
  const array2 = ["cat", "dog", "lemons", ...array1];

  console.log(array2);

  const fullName = {
    name: "lee",
    lName: "mac",
  };

  const user = {
    agent: 1,
    title: "swimmer",
  };

  const newuser = {
    ...fullName,
    ...user,
  };
  console.log(newuser);

  return <div>App</div>;
};

export default App;
