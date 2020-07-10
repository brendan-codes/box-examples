import React from 'react';
const BoxDisplay = ({boxes}) => {


    return (
        <div>
        { boxes.map((val, i) =>
        // every element gets a key of the idx
            <div key={i} style={val.style}>
                <p>color: {val.color}</p>
                <p>height: {val.height}</p>

                <button>Delete</button>
            </div>
        )}
        </div>
    )
}

export default BoxDisplay;