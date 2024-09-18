import { Component } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Profile from "./components/Profile";
import "./App.css";

{
  /* Button Count */
}
function ButtonCount() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

class App extends Component {
  // create a method for greetings
  getGreeting() {
    return `Welcome to React!`;
  }

  render() {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <h1>Vite + React</h1>
          <h2>{this.getGreeting()}</h2>
        </div>
        <div className="card">
          {/* Button Count */}
          <ButtonCount />
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <Profile />
        </div>
      </>
    );
  }
}

export default App;
