import { useEffect, useMemo, useState } from "react";
import "./index.css";
import { IoSearchOutline } from "react-icons/io5";
import { wait } from "@testing-library/user-event/dist/utils";

const SearchBar = ({
  searchText,
  filterValue,
  sortValue,
  setSearchText,
  setFilterValue,
  setSortValue,
  options,
}) => {
  return (
    <section className="search-bar">
      <IoSearchOutline className="search-icon" />
      <input
        type="text"
        placeholder="Search The Web sute"
        className="search-input"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <div className="search-select-container">
        <label className="select-labels select-label-sort" htmlFor="sort">
          Sort By:
        </label>
        <select
          value={sortValue}
          name="sort"
          className="search-select search-select-1"
          onChange={(e) => {
            setSortValue(e.target.value);
          }}
        >
          <option value="default">Default</option>
          {options &&
            options.sortOptions &&
            options.sortOptions.map(({ text, value }, index) => {
              return (
                <option key={index} value={value}>
                  {text}
                </option>
              );
            })}
        </select>
        <label className="select-labels select-label-filter" htmlFor="filter">
          Filter By:
        </label>
        <select
          name="filter"
          id="filter"
          className="search-select search-select-2"
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
          }}
        >
          <option value="default">Default</option>
          {options &&
            options.filterOptions &&
            options.filterOptions.map(({ text, value }, index) => {
              return (
                <option key={index} value={value}>
                  {text}
                </option>
              );
            })}
        </select>
      </div>
    </section>
  );
};

export default SearchBar;
