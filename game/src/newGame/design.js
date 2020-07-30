import React from "react";
import produce from "immer";

import "../App.css";

const Design = ({ live, dead, isGameOnRef, grid, setGrid, size, columns }) => {
    //possibly fix

    // const grid = () => {
    //     const newGrid = produce(grid, (copy) => {
    //         if (isGameOnRef.current) {
    //             return;
    //         }
    //         copy[i][j] = grid[i][j] ? 0 : 1;
    //     });
    //     setGrid(newGrid);
    // };
    return (
        <div className="gameContainer">
            <div
                className="container"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, ${size}px)`,
                }}
            >
                {grid.map((rows, i) => {
                    return rows.map((col, j) => {
                        return (
                            <div
                                key={`${i} - ${j}`}
                                onClick={() => {
                                    const newG = produce(grid, (copy) => {
                                        if (isGameOnRef.current) {
                                            return;
                                        }
                                        copy[i][j] = grid[i][j] === 1 ? 0 : 1;
                                    });
                                    setGrid(newG);
                                }}
                                style={{
                                    width: size,
                                    height: size,
                                    backgroundColor:
                                        grid[i][j] === 1 ? live : dead,
                                    border: "1px solid black",
                                }}
                            />
                        );
                    });
                })}
                )
            </div>
        </div>
    );
};

export default Design;
