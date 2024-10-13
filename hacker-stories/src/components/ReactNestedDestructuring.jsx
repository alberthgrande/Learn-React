import * as React from "react";
const stories = [
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

const ReactNestedDestructuring = () => {
  const [search, setSearch] = React.useState("");

  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(search.toLowerCase()) ||
      story.author.toLowerCase().includes(search.toLowerCase()) ||
      story.num_comments === Number(search) ||
      story.points === Number(search)
  );

  return (
    <>
      <div>
        <h1>ReactNestedDestructuring</h1>
        <Search search={search} onSearch={onSearch} />
        <List list={filteredStories} />
      </div>
    </>
  );
};

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" value={search} onChange={onSearch} />
    </div>
  );
};

// Variation 1: Spread and Rest Operators
// const List = ({ list }) => {
//   return (
//     <div>
//       <ul>
//         {list.map((item) => (
//           <Item key={item.objectID} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Item = ({ item: { title, url, author, num_comments, points } }) => (
//   <li className="itemList">
//     <span>
//       Title : <a href={url}>{title}</a>
//     </span>
//     <br />
//     <span>Author : {author}</span> <br />
//     <span>Number Comments : {num_comments}</span> <br />
//     <span>Points : {points}</span>
//   </li>
// );

// Variation 2: Spread and Rest Operators
// const List = ({ list }) => {
//   return (
//     <ul>
//       {list.map((item) => (
//         <Item
//           key={item.objectID}
//           url={item.url}
//           title={item.title}
//           author={item.author}
//           num_comments={item.num_comments}
//           points={item.points}
//         />
//       ))}
//     </ul>
//   );
// };

// const Item = ({ title, url, author, num_comments, points }) => {
//   return (
//     <li className="itemList">
//       <span>
//         Title : <a href={url}>{title}</a>
//       </span>
//       <br />
//       <span>Author : {author}</span>  <br />
//       <span>Number Comments : {num_comments}</span> <br />
//       <span>Points : {points}</span>  <br />
//     </li>
//   );
// };

// Variation 3: Spread and Rest Operators
// const List = ({ list }) => {
//   return (
//     <ul>
//       {list.map((item) => (
//         <Item key={item.objectID} {...item} />
//       ))}
//     </ul>
//   );
// };

// Variation 4: Spread and Rest Operators
// Final Step
const List = ({ list }) => (
  <ul>
    {list.map(({ objectID, ...item }) => (
      <Item key={objectID} {...item} />
    ))}
  </ul>
);

const Item = ({ title, url, author, num_comments, points }) => {
  return (
    <li className="itemList">
      <span>
        Title : <a href={url}>{title}</a>
      </span>
      <br />
      <span>Author : {author}</span> <br />
      <span>Number Comments : {num_comments}</span> <br />
      <span>Points : {points}</span> <br />
    </li>
  );
};

export default ReactNestedDestructuring;
