import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Example from "./Example";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <Example example={props.meaning.example} />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
