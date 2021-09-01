import axios from "axios";
import { useState, useEffect } from "react";

const Content = () => {
  // Set the state
  const [snippets, setSnippets] = useState([]);

  // Make the API Call and get the list of categories
  const getSnippets = () => {
    axios.get("http://localhost:1337/snippets").then((response) => {
      console.log(response);
      const allSnippets = response.data;
      setSnippets(allSnippets);
    });
  };

  useEffect(() => getSnippets(), []);

  return (
    <div className="container">
      <ul className="">
        {snippets.map((snips) => (
          <div className="card mb-3" key={snips.id}>
            <h5 className="card-header bg-dark text-light">{snips.title}</h5>
            <p className="card-body card-text">{snips.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Content;
