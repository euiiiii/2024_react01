import React from 'react';

function Count(props) {
    let cnt = 5;
    let increament = () => {
        cnt = cnt + 1;
        console.log("cnt: ", cnt);
    }
    let decreament = () => {
        cnt = cnt - 1;
        console.log("cnt: ", cnt);333333333
    }
    return (
        <div>
            <button onClick={increament}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    cursor: "pointer",
                }}> + </button>
            <span style={{ margin: "0 20px", fontSize: "20px" }}>{cnt}</span>
            <button onClick={decreament}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    cursor: "pointer",
                }}> - </button>
        </div>
    );
}

export default Count;