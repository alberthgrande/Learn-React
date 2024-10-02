import * as React from "react";
import BeginnerVariables from "./components/BeginnerVariables";
import AdvancedVariables from "./components/AdvancedVariables";
import HelloWorld from "./components/HelloWorld";
import ReactList from "./components/ReactList";

function App() {
  return (
    <>
      <BeginnerVariables />
      <hr />
      <AdvancedVariables />
      <hr />
      <HelloWorld />
      <hr />
      <ReactList />
    </>
  );
}

export default App;
