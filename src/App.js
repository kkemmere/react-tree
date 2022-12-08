import "./App.css";
import { useState } from "react";

// Building out tree data structure and how to render them
// Building out file browser
// Recursively dive into that data structure and print out each child

const files = {
  child: [
    {
      name: "bob",
      child: [
        {
          name: "node_modules",
        },
        {
          name: "joi",
          child: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },
        {
          name: "sam",
          child: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },

        {
          name: "kyle",
          child: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
            {
              name: "kev",
              child: [
                {
                  name: "linkedininfo.txt",
                },
                {
                  name: "randomstuff.txt",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
  ],
};

function Entry({ entry, depth }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.child ? (
        <button
          key={entry.name}
          className="entry"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? `- ` : `+ `}
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.child?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="background-wrapper">
        {files.child.map((entry) => (
          <Entry key={entry.name} entry={entry} depth={1} />
        ))}
      </div>
    </div>
  );
}

export default App;
