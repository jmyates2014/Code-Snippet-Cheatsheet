import axios from "axios";
import { useState, useEffect } from "react";

// Get and Render the list of Categories
const Filter = () => {
  // Set the state
  const [categories, setCategories] = useState([]);

  // Make the API Call and get the list of categories
  const getCategories = () => {
    axios
      .get("http://localhost:1337/categories?snippets_null=false")
      .then((response) => {
        console.log(response);
        const allCategories = response.data;
        setCategories(allCategories);
      });
  };

  useEffect(() => getCategories(), []);

  // TODO - add filtering functionality to the buttons for the categories and the display

  return (
    <div className="container text-center py-3 mb-5">
      {categories.map((item) => (
        <button className="btn btn-warning m-2" key={item.id}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
