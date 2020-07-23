import React from "react";
import "../css/game.css";

const cellSize = 20;
const gridWidth = 800;
const gridHeight = 800;

const Game = () => {
    return (
        <div>
            {" "}
            <div
                className="Grid"
                style={{ width: gridWidth, height: gridHeight }}
            >
                {" "}
            </div>{" "}
        </div>
    );
};

export default Game;
