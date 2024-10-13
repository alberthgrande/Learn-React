import * as React from "react";
import "./App.css"; // css
import BeginnerVariables from "./components/BeginnerVariables";
import AdvancedVariables from "./components/AdvancedVariables";
import HelloWorld from "./components/HelloWorld";
import ReactList from "./components/ReactList";
// import Search from "./components/Search";
import ReactProps from "./components/ReactProps";
import ReactLiftingState from "./components/ReactLiftingState";
import ReactControlledComponents from "./components/ReactControlledComponents";
import ReactPropsHandlingAdvance from "./components/ReactPropsHandlingAdvance";
import ReactNestedDestructuring from "./components/ReactNestedDestructuring";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <ReactNestedDestructuring />
      <hr />
      <ReactPropsHandlingAdvance />
      <hr />
      <BeginnerVariables />
      <hr />
      <AdvancedVariables />
      <hr />
      <HelloWorld />
      <hr />
      <ReactList />
      <hr />
      <Search onSearch={handleChange} />
      <hr />
      <ReactProps />
      <hr />
      <ReactLiftingState />
      <hr />
      <ReactControlledComponents />
      <hr />
    </>
  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
    console.log(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <br />
      <p>
        Search for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
};

export default App;
