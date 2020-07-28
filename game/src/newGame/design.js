import React from "react";
import produce from "immer";
import "../App.css";

const Design = ({ isGameOnRef, grid, setGrid, size, columns }) => {
    //possibly fix

    const grid = () => {
        const newGrid = produce(grid, (copy) => {
            if (isGameOnRef.current) {
                return;
            }
            copy[i][j] = grid[i][j] ? 0 : 1;
        });
        setGrid(newGrid);
    };
    return (
        <div className="gameContainer">
            <div
                className="container"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${props.columns}, ${props.size}px)`,
                }}
            >
                {grid.map((columns, i) => {
                    return (
                        <div
                            key={`${i} - ${j}`}
                            onClick={grid}
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: (grid[i][j] === 1) & "black",
                                border: "1px solid black",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Design;
