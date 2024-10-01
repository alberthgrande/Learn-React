import * as React from "react";

function getPerson(name) {
  return `${name.firstname} ${name.lastname}`;
}

const person = { firstname: "Alberth", lastname: "Ruado" };

function BeginnerVariables() {
  return (
    <>
      <p>Fullname : {getPerson(person)}</p>
    </>
  );
}

export default BeginnerVariables;
