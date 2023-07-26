import React from "react";
import Synonym from "./Synonym.js";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        Meaning: <em>{props.meaning.definition}</em>
      </p>
      <Synonym synonym={props.meaning} />
    </div>
  );
}
