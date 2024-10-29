import React, { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import { bfs, dfs } from "./utils/pathFinding";

const App = () => {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [algorithm, setAlgorithm] = useState("bfs");
  const [path, setPath] = useState([]);

  const handleRunPathfinding = () => {
    if (start && end) {
      const grid = Array.from({ length: rows }, () => Array(cols).fill(0));
      const foundPath =
        algorithm === "bfs" ? bfs(grid, start, end) : dfs(grid, start, end);
      setPath(foundPath);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Shortest Path Visualizer</h1>
      <Controls
        rows={rows}
        setRows={setRows}
        cols={cols}
        setCols={setCols}
        setStart={setStart}
        setEnd={setEnd}
        setAlgorithm={setAlgorithm}
        handleRunPathfinding={handleRunPathfinding}
      />
      <Grid
        rows={rows}
        cols={cols}
        start={start}
        end={end}
        path={path}
        setStart={setStart}
        setEnd={setEnd}
      />
    </div>
  );
};

export default App;
