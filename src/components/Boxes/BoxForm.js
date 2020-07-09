import React, {useState} from 'react';
const BoxForm = ({boxes, setBoxes}) => {

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        setBoxes([...boxes,{
            "color": color,
            "height": height,
            "style": {
                "display": "inline-block",
                "background": color,
                "height": `${height}px`
            }
        }]);

        setColor("");
        setHeight("");
    }


    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" value={color} onChange={colorHandler}></input>
                <input type="text" value={height} onChange={heightHandler}></input>
                <input type="submit" value="click me!"></input>
            </form>
        </div>
    )
}

export default BoxForm;