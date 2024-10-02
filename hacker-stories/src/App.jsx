import * as React from "react";
import BeginnerVariables from "./components/BeginnerVariables";
import AdvancedVariables from "./components/AdvancedVariables";
import HelloWorld from "./components/HelloWorld";
import ReactList from "./components/ReactList";
import Search from "./components/Search";
import ReactProps from "./components/ReactProps";

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
      <hr />
      <Search />
      <hr />
      <ReactProps />
    </>
  );
}

export default App;
