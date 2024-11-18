import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    // API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <div className="form-container">
          <input
            type="search"
            className="search-form"
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          ></input>
          <button type="submit" className="search-button">
            <i className="fa-solid fa-magnifying-glass search-button-icon"></i>
          </button>
        </div>
      </form>
      <hr />
      <Results results={results} />
    </div>
  );
}
