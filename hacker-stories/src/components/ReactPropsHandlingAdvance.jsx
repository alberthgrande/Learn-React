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

const ReactPropsHandlingAdvance = () => {
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
      <h1>ReactPropsHandlingAdvance</h1>
      <Search search={search} onSearch={onSearch} />
      <List list={filteredStories} />
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

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li className="itemList">
      <span>
        Title : <a href={item.url}>{item.title}</a>
      </span>{" "}
      <br />
      <span>Author : {item.author}</span> <br />
      <span>Number Comments : {item.num_comments}</span> <br />
      <span>Points : {item.points}</span>
    </li>
  );
};

export default ReactPropsHandlingAdvance;
