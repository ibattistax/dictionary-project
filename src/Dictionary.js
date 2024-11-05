import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for the meaning of ${keyword}`);

    // API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          className="search-form"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
