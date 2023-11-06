// 7.Design a search filter component that consists of an input field. As the user types into the input,
// use controlled components to filter a list of items displayed below. The list should dynamically update to
// show only items matching the search query.

import { useEffect, useState } from "react";
import { list } from "./DataList";

const SearchFilter = () => {
  const [filteredList, setFilteredList] = useState(list);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setFilteredList(
      list.filter((item) => {
        return item.toLowerCase().includes(text.toLowerCase());
      })
    );
  }, [text]);

  return (
    <>
      <h3>Search Filter</h3>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleChange}
      />
      <ul>
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchFilter;
