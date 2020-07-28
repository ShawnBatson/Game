export const SpeedUp = (speed, setSpeed, setDisplay) => {
    if (speed === 100) {
        setSpeed(speed);
    } else if (speed > 100) {
        setSpeed((spd = spd - 100));
        setDisplay((a = a + 1));
    }
};

export const slowDown = (speed, setSpeed, setDisplay) => {
    if (speed === 1000) {
        setSpeed(speed);
    } else if (speed <= 1200) {
        setSpeed((spd) => spd + 100);
        setDisplay((a) => a - 1);
    }
};
