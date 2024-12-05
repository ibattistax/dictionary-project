import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function search() {
    // API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setResults(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="search-form"
              placeholder="Search for a word"
              onChange={handleKeywordChange}
            ></input>
            <button type="submit" className="search-button">
              <i className="fa-solid fa-magnifying-glass search-button-icon"></i>
            </button>
          </form>
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
