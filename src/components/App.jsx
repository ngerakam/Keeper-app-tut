import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  };
  const handleClick = (e) => {
    setTodoItems((prevItems) => {
      return [...prevItems, inputNote];
    });

    e.preventDefault();
    setInputNote({
      title: "",
      content: ""
    });
  };

  const deleteTodos = (id) => {
    setTodoItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea
        title={inputNote.title}
        content={inputNote.content}
        handleChange={handleChange}
        handleClick={handleClick}
      />

      {todoItems.map((todoItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={todoItem.title}
            content={todoItem.content}
            deleteTodos={deleteTodos}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
