import React from "react";
import produce from "immer";
import "../App.css";

const Cont = ({
    rows,
    setRows,
    setColumns,
    columns,
    speed,
    grid,
    setGrid,
    setSpeed,
    spdRef,
    speedDisplay,
    setSpeedDisplay,
    generation,
    setGeneration,
    isGameOn,
    setIsGameOn,
    isGameOnRef,
    run,
    live,
    setLive,
    dead,
    setDead,
}) => {
    const toggleButton = () => {
        const startButton = document.querySelector(".start");
        startButton.setAttribute("disabled", "true");

        setIsGameOn(!isGameOnRef);
        isGameOnRef = true;
        run();

        setTimeout(() => {
            startButton.removeAttribute("disabled");
        }, 500);
    };

    // const toggleStop = () => {
    //     const startButton = document.querySelector(".start");
    //     startButton.setAttribute("disabled", "true");

    //     setIsGameOn(false);
    //     setGeneration(generation);
    //     setSpeedDisplay(speed);
    //     setSpeed(1000);
    // };

    const handleLive = (e) => {
        //change colors of the live
        if (isGameOn) {
            return;
        } else {
            setLive(e.target.value);
        }
    };
    const handleDead = (e) => {
        //change colors of the dead
        if (isGameOn) {
            return;
        } else {
            setDead(e.target.value);
        }
    };

    const speedUp = (speed, setSpeed, setSpeedDisplay) => {
        //up the speed
        if (speed === 100) {
            setSpeed(speed);
        } else if (speed > 100) {
            setSpeed((spd) => spd - 100);
            setSpeedDisplay((c) => c + 1);
        }
    };
    const speedDown = (speed, setSpeed, setSpeedDisplay) => {
        // down the speed
        if (speed === 1000) {
            setSpeed(speed);
        } else if (speed <= 2000) {
            setSpeed((spd) => spd + 100);
            setSpeedDisplay((c) => c - 1);
        }
    };

    const clear = (
        //clear the board
        setSpeed,
        setGrid,
        rows,
        columns,
        setIsGameOn,
        isGameOnRef,
        setGeneration,
        setSpeedDisplay
    ) => {
        if (isGameOnRef) {
            console.log("stop");
            alert("Board Cleared");
            return;
        }
        setIsGameOn(false);
        setGeneration(1);
        setSpeedDisplay(1);
        setSpeed(1000);

        setGrid((curr) => {
            return produce(curr, (copy) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        copy[i][j] = 0;
                    }
                }
            });
        });
    };

    const random = (
        //randomize the board
        setIsGameOn,
        isGameOnRef,
        setGeneration,
        setGrid,
        rows,
        columns
    ) => {
        if (isGameOnRef) {
            alert("stop");
            return;
        }
        setIsGameOn(false);
        setGeneration(1);

        setGrid((current) => {
            return produce(current, (copy) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        Math.random() < 0.5
                            ? (copy[i][j] = 0)
                            : (copy[i][j] = 1);
                    }
                }
            });
        });
    };

    return (
        <div className="controls">
            <button
                className="start"
                onClick={() => {
                    toggleButton();
                }}
            >
                {isGameOnRef ? "Stop" : "Start"}
            </button>
            {/* <button className="start" onclick={() => toggleStop()}>
                {isGameOnRef ? "Start" : "Stop"}{" "}
            </button> */}
            <button
                className="clear"
                onClick={() =>
                    clear(
                        setSpeed,
                        setGrid,
                        rows,
                        columns,
                        setIsGameOn,
                        isGameOnRef,
                        setGeneration,
                        setSpeedDisplay
                    )
                }
            >
                Clear
            </button>
            <button
                className="random"
                onClick={() =>
                    random(
                        setIsGameOn,
                        isGameOnRef,
                        setGeneration,
                        rows,
                        setGrid,
                        columns
                    )
                }
            >
                Random
            </button>
            <div className="speedCont">
                <button
                    onClick={() => speedUp(speed, setSpeed, setSpeedDisplay)}
                >
                    Speed +
                </button>
                <button
                    onClick={() => speedDown(speed, setSpeed, setSpeedDisplay)}
                >
                    Speed -
                </button>
                <span className="display">Speed: {speedDisplay}</span>
            </div>
            <div className="colorContainer">
                <div className="livingColor">
                    <label htmlFor="livePick">&nbsp; Live Cell Color: </label>
                    <input
                        name="livePick"
                        type="color"
                        value={live}
                        onChange={(e) => handleLive(e)}
                    />
                </div>
                <div className="deadColor">
                    <label htmlFor="deadPick">Dead Cell Color: </label>
                    <input
                        name="deadPic"
                        type="color"
                        value={dead}
                        onChange={(e) => handleDead(e)}
                    />
                </div>
            </div>
            <span>Generation: {generation}</span>
        </div>
    );
};

export default Cont;
