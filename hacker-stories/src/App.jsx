import * as React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
