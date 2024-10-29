import React from "react";
import Cell from "./Cell";

const Grid = ({ rows, cols, start, end, path, setStart, setEnd }) => {
    const handleCellClick = (row, col) => {
        if (!start) {
            setStart([row, col]);
        } else if (!end) {
            setEnd([row, col]);
        }
    };

    const renderCells = () => {
        return Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => (
                <Cell
                    key={`${row}-${col}`}
                    isStart={start && start[0] === row && start[1] === col}
                    isEnd={end && end[0] === row && end[1] === col}
                    isPath={path.some(([pRow, pCol]) => pRow === row && pCol === col)}
                    onClick={() => handleCellClick(row, col)}
                />
            ))
        );
    };

    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {renderCells()}
        </div>
    );
};

export default Grid;
