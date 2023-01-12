import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchComponent() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  const filteredItems =
    items &&
    Object.keys(items)
      .filter((key) =>
        items?.[key]?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((key) => items[key]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
