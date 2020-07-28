import { useState } from "react";
import "../App.css";

const Logic = (gen, living) => {
    const [total, setTotal] = useState({
        gen: gen,
        living: living,
        nextGen: new Map(),
        dead: new Map(),
    });

    const generation = () => {
        return total.generation;
    };

    // const getLiving = () => {
    //     return total.living;
    // };

    const add = (pos) => {
        total.living.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
    };

    const rem = (pos) => {
        total.living.delete(pos);
    };

    const isAlive = (pos) => {
        total.living.has(pos);
    };

    const storeCell = (pos) => {
        if (isAlive(pos.x + " , " + pos.y)) {
            rem(pos.x + " , " + pos.y);
        } else {
            add(pos);
        }

        return new Logic(total.generation, total.living);
    };

    const nextGen = () => {
        total.living.forEach((item) => {
            livingNeighbors(item);
        });
        total.dead.forEach((item) => {
            deadNeighborts(item);
        });

        setTotal(gen++);

        return new Logic(total.generation, total.living);
    };

    const livingNeighbors = (pos) => {
        let livingTotal = 0;

        for (let i = pos.x - 1; i <= pos.x; i++) {
            for (let j = pos.y - 1; j <= pos.j; j++) {
                if (i === pos.x && j === pos.y) {
                    continue;
                }

                if (isAlive(i + " , " + j)) {
                    livingTotal = livingTotal++;
                } else {
                    total.dead.set(i + " , " + j, { x: i, y: j });
                }
            }
        }

        if (livingTotal === 2 || livingTotal === 3) {
            nextGen.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
        }
    };

    const deadNeighborts = (pos) => {
        let livingTotal = 0;

        for (let i = pos.x - 1; i <= pos.x; i++) {
            for (let j = pos.y - 1; j <= pos.y; j++) {
                if (i === pos.x && j === pos.y) {
                    continue;
                }

                if (isAlive(i + " , " + j)) {
                    livingTotal = livingTotal++;
                }
            }
        }

        if (livingTotal === 3) {
            nextGen.set(pos.x + " , " + pos.y, { x: pos.x, y: pos.y });
        }
    };
};

export default Logic;
