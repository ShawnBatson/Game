import React from "react";
import "../App.css";
const cellSize = 20;
const gridWidth = 800;
const gridHeight = 800;

const Game = () => {
    return (
        <div>
            {" "}
            <div
                className="grid"
                style={{
                    width: gridWidth,
                    height: gridHeight,
                    backgroundSize: `${cellSize}px ${cellSize}px`,
                }}
            >
                {" "}
            </div>{" "}
        </div>
    );
};

export default Game;
