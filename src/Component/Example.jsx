import React, { useState } from "react";
import TabBtn from "./TabBtn.jsx";
import { EXAMPLES } from "../data/data.js";
import Section from "./Section.jsx";
import Tab from "./Tab.jsx";

const Example = () => {
  const [selected, setSelect] = useState("");
  function handleSelect(select) {
    setSelect(select);
  }

  const main = selected ? (
    <div id="tab-content">
      <h2>{EXAMPLES[selected].title}</h2>
      <p>{EXAMPLES[selected].description}</p>
      <pre>
        <code>{EXAMPLES[selected].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select the variables</p>
  );

  return (
    <Section title="Examples" id="examples">
      <Tab
        button={
          <>
            {" "}
            <TabBtn
              inselected={selected === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabBtn>
            <TabBtn
              inselected={selected === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabBtn>
            <TabBtn
              inselected={selected === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Jsx
            </TabBtn>
            <TabBtn
              inselected={selected === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabBtn>
          </>
        }
      >
        {main}
      </Tab>
    </Section>
  );
};

export default Example;
