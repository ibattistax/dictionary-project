import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p className="phonetics">{props.results.phonetic}</p>
        {props.results.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
