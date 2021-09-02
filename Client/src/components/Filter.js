import axios from "axios";
import { useState, useEffect } from "react";

// Get and Render the list of Categories
const Filter = () => {
  // Set the state
  const [snippets, setSnippets] = useState([]);

  // Get snippets
  const getSnippets = () => {
    axios
      .get("http://localhost:1337/snippets?language_null=false")
      .then((response) => {
        console.log(response);
        const allSnippets = response.data;
        setSnippets(allSnippets);
      });
  };
  useEffect(() => getSnippets(), []);

  // TODO - add filtering functionality to the buttons for the categories and the display

  return (
    <div className="container text-center py-3 mb-5">
      {snippets.map((snpItem) => (
        <button className="btn btn-warning m-2" key={snpItem.id}>
          {snpItem.language}
        </button>
      ))}
    </div>
  );
};

export default Filter;
