import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.hits.map((item) => (
        <div>
          {item.title},{item.content}
        </div>
      ))}
    </div>
  );
};

export default Content;
