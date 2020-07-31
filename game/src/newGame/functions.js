import produce from "immer";

export const clear = (
    setSpeed,
    setGrid,
    rows,
    columns,
    setIsGameOn,
    isGameOnRef,
    setGeneration,
    setSpeedDisplay
) => {
    if (!isGameOnRef) {
        console.log("Stop");
        alert("Stop");
    }
    setIsGameOn(false);
    setGeneration(1);
    setSpeedDisplay(1);
    setSpeed(1000);

    setGrid((current) => {
        return produce(current, (copy) => {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    copy[i][j] = 0;
                }
            }
        });
    });
};

export const random = (
    setIsGameOn,
    isGameOnRef,
    setGeneration,
    setGrid,
    rows,
    columns
) => {
    if (!isGameOnRef) {
        alert("stop");
    }
    setIsGameOn(false);
    setGeneration(1);

    setGrid((current) => {
        return produce(current, (copy) => {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    Math.random() < 0.5 ? (copy[i][j] = 0) : (copy[i][j] = 1);
                }
            }
        });
    });
};
