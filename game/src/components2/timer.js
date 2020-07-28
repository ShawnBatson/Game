import { useRef, useState, useEffect } from "react";

export default function Timer(cb, interval) {
    const [start, setStart] = useState(true);
    const ref = useRef();
    ref.current = cb;

    useEffect(() => {
        if (start) {
            const intId = setInterval(() => ref.current(), interval);
            return () => clearInterval(intId);
        }
    }, [start, interval]);

    return {
        start,
        toggle() {
            setStart((currentState) => !currentState);
        },
    };
}
