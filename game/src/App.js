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
    const [size, setSize] = useState(rows * 0.5);
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
    }, [rows, columns]);

    return (
        <div className="App">
            <Design
                rows={rows}
                size={size}
                columns={columns}
                isGameOnRef={isGameOnRef}
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
                rows={rows}
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
