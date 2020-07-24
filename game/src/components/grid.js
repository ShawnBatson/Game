import React, { useState } from "react";
import Cell from "./cell";
import "../App.css";

const Grid = () => {
    // const totalBoard = [];

    const [newSize, setSize] = useState({
        //make state for the grid size
        size: [40, 40],
    });
    const [newGame, setNewGame] = useState({
        //make state for the game itself
        game: false,
    });

    const handleRowShift = (event) => {
        // make a max row, mutate the grid beneath that max
        if (!newGame.game) {
            const currentSize = newSize.size; //if no new game, set the board to newsize

            if (event.target.value < 40) {
                currentSize[1] = event.target.value; //change the rows otherwise
            } else {
                currentSize[1] = 40;
            }
            setSize(currentSize);
            setBoard(); //set the board
        }
    };

    const handleColumnShift = (event) => {
        // make a max column, mutate the grid beneath that max
        if (!newGame.game) {
            const currentSize = newSize.size; // if no new game, set the board to newsize

            if (event.target.value < 40) {
                currentSize[0] = event.target.value; //change the columns otherwise
            } else {
                currentSize[0] = 40;
            }
            setSize(currentSize);
            setBoard(); // set the board
        }
    };

    const start = () => {
        //initiating the game,
        if (!newGame.game) {
            setNewGame({ game: true }, () => {
                newGame.intervalRef = setInterval(() => run(), 10);
            });
        }
    };

    const stop = () => {
        //stopping the game
        setNewGame({ game: false }, () => {
            if (newGame.intervalRef) {
                clearInterval(newGame.intervalRef);
            }
        });
    };

    const run = () => {};

    const setBoard = () => {
        let newBoard = []; //board
        let cellRow = []; //cells pattern

        for (let i = 0; i < newSize.size[0]; i++) {
            //create the cells with a double for loop, for both I and J, push the new rows/columns into cellrow
            for (let j = 0; j < newSize.size[1]; j++) {
                cellRow.push(<Cell key={[i, j]} />);
            }
            newBoard.push(
                <div className="row" key={i}>
                    {cellRow}
                </div>
            );
            cellRow = [];
        }
        return newBoard;
    };

    return (
        <div className="totalPage">
            <div className="header">
                <div className="insideHeader">
                    <div className="headerButtons">
                        <label className="label">Rows:</label>
                        <input
                            className="input"
                            type="text"
                            value={setSize[1]}
                            onChange={handleRowShift}
                        />
                        <label className="label">Columns:</label>
                        <input
                            className="input"
                            type="text"
                            value={setSize[0]}
                            onChange={handleColumnShift}
                        />
                    </div>
                    <div className="buttonsTotal">
                        <button className="submit" onClick={start}>
                            Start
                        </button>
                        <button className="submit" onClick={stop}>
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

export default Grid;
