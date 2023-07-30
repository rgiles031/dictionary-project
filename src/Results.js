import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h3>{props.results.word}</h3>
          <p className="phonetic">{props.results.phonetic}</p>
        </section>
        {props.results.meanings.map(function(meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
