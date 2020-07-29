import React from "react";
import { clear } from "./functions";
import { random } from "./functions";
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
                onclick={() =>
                    random(
                        setIsGameOn,
                        isGameOnRef,
                        setGeneration,
                        rows,
                        columns,
                        setGrid
                    )
                }
            >
                Random
            </button>
        </div>
    );
};

export default Cont;
