import React from "react";
import { useGlobalContext } from "../context";

export default function Form() {
  const { search, handleChange } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        className="search"
        autoFocus
      />
    </form>
  );
}
