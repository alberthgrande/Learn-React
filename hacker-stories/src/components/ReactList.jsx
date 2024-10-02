import * as React from "react";

const numbers = [1, 2, 3, 4];
const exponentialNumbers = numbers.map(function (number) {
  return number * number;
});

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function ReactList() {
  return (
    <>
      <span>{exponentialNumbers.join(", ")}</span>
      {/* with key */}
      <p> with key </p>
      <ul>
        {list.map((element) => (
          <li key={element.objectID}>
            <a href={element.url} target="_blank" rel="noopener noreferrer">
              {element.title} by {element.author}
            </a>
            <p>Number of comments : {element.num_comments}</p>
          </li>
        ))}
      </ul>
      {/* without key */}
      <p> without key </p>
      <ul>
        {list.map((element, index) => (
          <li key={index}>
            <a href={element.url} target="_blank" rel="noopener noreferrer">
              {element.title} by {element.author}
            </a>
            <p>Number of comments : {element.num_comments}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReactList;
