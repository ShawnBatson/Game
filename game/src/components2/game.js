import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AutoSizer } from react-virtualized
import Life from "./life"
import Timer from "./timer"

const Game = () => {
    const [w, setW] = useState(40)
    const [h, setH] = useState(40)
    const [int, setInt] = useState(100)
    const [grid, res, movement] = Life(w, h)
    const [started, stopped] = Timer(step, int)

    return (
        <div className="totalPage">
            <div className="header">
                <div className="insideHeader">
                    <div className="headerButtons">
                        <label className="label">Rows:</label>
                        <input
                            className="input"
                            type="text"
                            value={setW}
                        />
                        <label className="label">Columns:</label>
                        <input
                            className="input"
                            type="text"
                            value={setH}
                        />
                    </div>
                    <div className="buttonsTotal">
                        <button className="submit" onClick={movement}>
                            Start
                        </button>
                        <button className="submit" onClick={res}>
                            Stop
                        </button>
                    </div>
                </div>
                <div
                    className="boardBox"
                    // style={{
                    //     width: gridWidth,
                    //     height: gridHeight,
                    //     backgroundSize: `${cellSize}px ${cellSize}px`,
                    // }}
                >
                    {setBoard()}
                </div>
            </div>
        </div>
    );
};

export default Game;

