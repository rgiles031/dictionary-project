import React from "react";

export default function synonym(props) {
  if (props.synonym.synonyms) {
    return (
      <ul className="synonym">
        {props.synonym.synonyms.map(function(synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
