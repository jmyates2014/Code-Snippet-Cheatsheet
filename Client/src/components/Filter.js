import axios from "axios";
import { useState, useEffect } from "react";

// Get and Render the list of Categories
const Filter = () => {
  // Set the state
  const [snippets, setSnippets] = useState([]);

  // Get snippets with Axios
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

  // Filter React Test
  const [rfilter, setrfilter] = useState([]);

  const getRFilter = () => {
    axios
      .get("http://localhost:1337/snippets?language=React")
      .then((rresponse) => {
        console.log(rresponse);
        const allReact = rresponse.data;
        setrfilter(allReact);
      });
  };

  useEffect(() => getRFilter(), []);

  // TODO - add filtering functionality to the buttons for the categories and the display

  return (
    <div className="container text-center py-3 mt-1">
      <button className="btn btn-warning m-2">All</button>
      {snippets.map((snpItem) => (
        <button
          onClick={getRFilter}
          className="btn btn-warning m-2"
          key={snpItem.id}
        >
          {snpItem.language}
        </button>
      ))}
    </div>
  );
};

export default Filter;
