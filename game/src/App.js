import React, { useState, useRef, useCallback } from "react";
import Design from "./newGame/design";
import Controls from "./newGame/control";
import produce from "immer";
import "./App.css";

const checkNeighbor = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

function App() {
    const [rows, setRows] = useState(40);
    const [columns, setColumns] = useState(rows);
    const [speed, setSpeed] = useState(1000);
    const [speedDisplay, setSpeedDisplay] = useState(1);
    const [generation, setGeneration] = useState(1);
    const [size, setSize] = useState(rows * 0.4);
    const [isGameOn, setIsGameOn] = useState(false);

    const [grid, setGrid] = useState(() => {
        const totalRows = [];

        for (let i = 0; i < rows; i++) {
            totalRows.push(Array.from(Array(columns), () => 0));
        }
        return totalRows;
    });

    const [live, setLive] = useState("#9966cc");
    const [dead, setDead] = useState("#ffffff");

    const spdRef = useRef(speed);
    spdRef.current = speed;

    const isGameOnRef = useRef(isGameOn);
    isGameOnRef.current = isGameOn;

    const run = useCallback(() => {
        console.log(isGameOn);

        if (!isGameOnRef.current) {
            return;
        }
        setGeneration((count) => count + 1);

        setGrid((current) => {
            return produce(current, (copy) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        let neighbors = 0;
                        checkNeighbor.forEach(([x, y]) => {
                            const indI = i + x;
                            const indY = j + y;

                            if (
                                indI >= 0 &&
                                indI < rows &&
                                indY >= 0 &&
                                indY < columns
                            ) {
                                neighbors += current[indI][indY];
                            }
                        });

                        if (neighbors < 2 || neighbors > 3) {
                            copy[i][j] = 0; //death
                        } else if (current[i][j] === 0 && neighbors === 3) {
                            copy[i][j] = 1; // life
                        }
                    }
                }
            });
        });

        setTimeout(run, spdRef.current);
    }, [rows, columns, isGameOn]);

    return (
        <div className="App">
            <div className="rules">
                <h1>Rules for Conways Game of Life</h1>
                <h3>This is a timeless game. The rules are simple:</h3>
                <ol>
                    <lh className="header">Life and Death of Cells</lh>
                    <li>
                        Any living cell with two or three neighbors remains
                        alive
                    </li>
                    <li>
                        A dead cell with three living neighbors will become a
                        living cell
                    </li>
                    <li>All other cells will die in the next generation.</li>
                    <li>
                        All other dead cells will remain dead in the next
                        generation
                    </li>
                    <li>
                        To start the game, double-click on the Start button to
                        the left.
                    </li>
                    <li>
                        You can click anywhere on the grid to create a "living"
                        cell. You can also click a living cell to make it a dead
                        cell, or click Random to randomize the grid
                    </li>
                    <li>
                        You can also stop the automation, which will pause the
                        grid where it stands.
                    </li>
                    <li>
                        The Clear button clears the board, resetting both the
                        speed and generation to 1.
                    </li>
                    <li>
                        You can adjust the speed forward or backward as you
                        please, before, during, or after the simulation has been
                        started.
                    </li>
                    <li>
                        Before or after you start the simuation, you can change
                        the colors of both the living cells and dead cells.
                    </li>
                </ol>
            </div>
            <Design
                rows={rows}
                size={size}
                columns={columns}
                isGameOnRef={isGameOnRef}
                isGameOn={isGameOn}
                grid={grid}
                setGrid={setGrid}
                speedDisplay={speedDisplay}
                generation={generation}
                live={live}
                setLive={setLive}
                dead={dead}
                setDead={setDead}
            />
            <Controls
                // stopRun={stopRun}
                rows={rows}
                setRows={setRows}
                columns={columns}
                speed={speed}
                grid={grid}
                setGrid={setGrid}
                setSpeed={setSpeed}
                spdRef={spdRef}
                speedDisplay={speedDisplay}
                setSpeedDisplay={setSpeedDisplay}
                generation={generation}
                setGeneration={setGeneration}
                isGameOn={isGameOn}
                setIsGameOn={setIsGameOn}
                run={run}
                setDead={setDead}
                setLive={setLive}
            />
        </div>
    );
}

export default App;
