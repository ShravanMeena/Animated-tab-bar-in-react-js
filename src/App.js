import React, { useState } from "react";
import { easeInCubic, FlipProvider, useFlip } from "react-easy-flip";
import "./styles.css";

const tabs = [
  {
    id: "home",
    text: "HOME",
  },
  {
    id: "skills",
    text: "SKILLS",
  },

  {
    id: "projects",
    text: "PROJECTS",
  },
  {
    id: "blogs",
    text: "BLOGS",
  },
  {
    id: "contact",
    text: "CONTACT",
  },
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const selectedTabHandler = (id) => {
    setSelectedTab(id);
  };

  const aniationOption = {
    duration: 500,
    easing: easeInCubic,
  };
  const flipRootId = "flipRoot";

  useFlip(flipRootId, aniationOption);

  return (
    <FlipProvider>
      <div className="main" data-flip-root-id={flipRootId}>
        <div className="flex">
          {tabs?.map((item, index) => {
            return (
              <div
                onClick={() => selectedTabHandler(item.id)}
                className="flex-col"
                key={index}
              >
                {item.text}

                {selectedTab === item.id ? (
                  <div className="active-tab" data-flip-id="highlight" />
                ) : (
                  <div className="non-active-tab" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </FlipProvider>
  );
}
