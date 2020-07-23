import React, { createRef } from "react";

function DisplayGrid(props) {
    const myCanvas = createRef(null);
    const current = myCanvas.current;
    const ctx = current.getContext("2d");
    return (
        <canvas
            ref={myCanvas}
            width="200"
            height="200"
            style={{ border: "1px solid green" }}
        />
    );
}

DisplayGrid.defaultProps = {
    width: "500",
    height: "500",
};

// DisplayGrid.propTypes = {
//     width: PropTypes.string,
//     height: PropTypes.string,
// };

export default DisplayGrid;
