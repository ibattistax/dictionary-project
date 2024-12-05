import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms</strong>
        {props.synonyms.slice(0, 5).map(function (synonym, index) {
          return (
            <div>
              <ul className="synonym-list">
                <li key={index}>{synonym}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
