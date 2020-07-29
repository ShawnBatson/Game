import React from "react";
import produce from "immer";
import "../App.css";

const Cont = ({
    rows,
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
}) => {
    const toggleButton = () => {
        const startButton = document.querySelector(".start");
        startButton.setAttribute("disabled", "true");

        setIsGameOn(!isGameOnRef.current);
        isGameOnRef.current = true;
        run();

        setTimeout(() => {
            startButton.removeAttribute("disabled");
        }, 1000);
    };

    return (
        <div className="controls">
            <button
                className="start"
                onclick={() => {
                    toggleButton();
                }}
            >
                {isGameOnRef ? "Stop" : "Start"}
            </button>
            <button
                onClick={(
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
                        alert("stop");
                        return;
                    }
                    setIsGameOn = false;
                    setGeneration = 1;
                    setSpeedDisplay = 1;
                    setSpeed = 1000;

                    setGrid = (current) => {
                        return produce(current, (copy) => {
                            for (let i = 0; i < rows; i++) {
                                for (let j = 0; j < columns; j++) {
                                    copy[i][j] = 0;
                                }
                            }
                        });
                    };
                }}
            >
                Clear
            </button>
            <button
                onclick={(
                    setIsGameOn,
                    isGameOnRef,
                    setGeneration,
                    rows,
                    columns,
                    setGrid
                ) => {
                    if (isGameOnRef.current) {
                        alert("stop");
                        return;
                    }
                    setIsGameOn("false");
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
                }}
            >
                Random
            </button>
        </div>
    );
};

export default Cont;
