import React, { useState } from "react";
import "../App.css";
const cellSize = 20;
const gridWidth = 800;
const gridHeight = 800;

const Grid = () => {
    const totalBoard = [];

    const [board, setBoard] = useState({
        gridBoard: {
            rows: gridHeight / cellSize,
            columns: gridWidth / cellSize,
            boardCells: [],
            boardMain: null,
        },
    });

    const makeEmptyBoard = () => {
        let board = [];
        for (let y = 0; y < board.gridBoard.rows; y++) {
            board.gridBoard.boardMain[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    };
    const makeCells = () => {
        let cells = [];
        for (let y = 0; y < board.gridBoard.rows; y++) {
            for (let x = 0; board.gridBoard.columns; x++) {
                if (board.gridBoard.boardMain[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return makeCells;
    };

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

export default Grid;
