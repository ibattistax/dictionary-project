import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(false);

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleDictionaryResponse(response) {
    if (response.data.status === "not_found") {
      setError("Oops! I don't know that word. Please try again.");
    } else {
      setResults(response.data);
      setError(null);
    }
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
              <i className="d-none d-md-inline fa-solid fa-magnifying-glass search-button-icon"></i>
            </button>
          </form>
        </div>

        <Results results={results} error={error} />
        <Photos photos={photos} error={error} />
        <footer>
          Coded by Isabel Battista and open sourced on{" "}
          <a
            href="https://github.com/ibattistax/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
