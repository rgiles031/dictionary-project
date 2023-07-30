import React from "react";
import Synonym from "./Synonym.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        <p>{props.meaning.definition}</p>
      </div>
      <div className="example">
        <p>{props.meaning.example}</p>
      </div>
      <Synonym synonym={props.meaning} />
    </div>
  );
}
