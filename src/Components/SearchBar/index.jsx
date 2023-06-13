import "./index.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <section className="search-bar">
      <IoSearchOutline className="search-icon" />
      <input
        type="text"
        placeholder="Search The Web sute"
        className="search-input"
      />
      <div className="search-select-container">
        <label className="select-labels select-label-sort" htmlFor="sort">
          Sort By:
        </label>
        <select name="sort" className="search-select search-select-1">
          <option value="default">Default</option>
          <option value="name">Author Name</option>
          <option value="topic">Topic Title</option>
        </select>
        <label className="select-labels select-label-filter" htmlFor="filter">
          Filter By:
        </label>
        <select
          name="filter"
          id="filter"
          className="search-select search-select-2"
        >
          <option value="default">Default</option>
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
