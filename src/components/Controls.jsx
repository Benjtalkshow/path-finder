import React from "react";

const Controls = ({
    rows,
    setRows,
    cols,
    setCols,
    setStart,
    setEnd,
    setAlgorithm,
    handleRunPathfinding,
}) => {
    const handleReset = () => {
        window.location.reload();
    };

    return (
        <div className="mb-4">
            <label>
                Rows:
                <input
                    type="number"
                    value={rows}
                    onChange={(e) => setRows(Number(e.target.value))}
                    className="border border-gray-400 rounded ml-2"
                />
            </label>
            <label className="ml-4">
                Columns:
                <input
                    type="number"
                    value={cols}
                    onChange={(e) => setCols(Number(e.target.value))}
                    className="border border-gray-400 rounded ml-2"
                />
            </label>
            <div className="mt-2">
                <label>
                    Algorithm:
                    <select onChange={(e) => setAlgorithm(e.target.value)} className="ml-2">
                        <option value="bfs">Breadth-First Search</option>
                        <option value="dfs">Depth-First Search</option>
                    </select>
                </label>
            </div>
            <button
                onClick={handleRunPathfinding}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4"
            >
                Find Path
            </button>
            <button
                onClick={handleReset}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded ml-4"
            >
                Reset Finder
            </button>
        </div>
    );
};

export default Controls;
