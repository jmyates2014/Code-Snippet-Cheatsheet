import axios from "axios";
import { useState, useEffect } from "react";

// Get and Render the list of Categories
const Filter = () => {
  // Set the state
  const [categories, setCategories] = useState([]);

  // Make the API Call and get the list of categories
  const getCategories = () => {
    axios.get("http://localhost:1337/categories").then((response) => {
      console.log(response);
      const allCategories = response.data;
      setCategories(allCategories);
    });
  };

  useEffect(() => getCategories(), []);

  return (
    <div id="catList">
      <ul>
        {categories.map((cats) => (
          <li key={cats.id}>
            <div>{cats.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
