import React from "react";

export default function Header({ filters, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value} </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
