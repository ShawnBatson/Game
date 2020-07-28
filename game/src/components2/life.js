import { useState, useEffect } from "react";

const rando = () => Math.round(Math.random());
const arr = (w, h, fill = rando) =>
    Array.from({ length: w }, () => Array.from({ length: h }, fill));

export default function Life(w, h) {
    const [grid, setGrid] = useState([]);

    const get = (x, y, r = grid[x]) => {
        return r ? r[y] || 0 : 0;
    };

    const neighbors = (x, y) => {
        return (
            get(x - 1, y - 1) +
            get(x - 1, y) +
            get(x - 1, y + 1) +
            get(x, y - 1) +
            get(x, y + 1) +
            get(x + 1, y - 1) +
            get(x + 1, y) +
            get(x + 1, y + 1)
        );
    };

    const res = () => {
        setGrid(arr(w, h));
    };

    const movement = () => {
        const newGrid = [];

        for (let x = 0; x < w; x++) {
            const row = [];
            for (let y = 0; y < h; y++) {
                const neighbor = neighbors(x, y);
                if (get(x, y)) {
                    if (neighbor < 2) {
                        row.push(0);
                    } else if (neighbor < 4) {
                        row.push(1);
                    } else {
                        row.push(0);
                    }
                } else if (neighbor === 3) {
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
    };
    useEffect(() => {
        res();
    }, [w, h]);
    return { res, grid, movement };
}
