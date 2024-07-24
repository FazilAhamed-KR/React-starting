import React from "react";
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data/data.js";

const Core = () => {
  return (
    <div>
      <section id="core-concepts">
        <h1>Core Concept</h1>
        <ul>
          {CORE_CONCEPTS.map((item) => {
            return <CoreConcept key={item} {...item} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Core;
