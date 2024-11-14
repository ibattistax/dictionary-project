import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
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
    return null;
  }
}
