import React, {useState} from 'react';
import BoxDisplay from './BoxDisplay';
import BoxForm from './BoxForm';

const Boxes = (props) => {
                                // [value, function]
    const [boxes, setBoxes] = useState([
        {
            "color": "red",
            "height": "100",
            "style": {
                "display": "inline-block",
                "background": "red",
                "height": "100px"
            }
        }
    ])

    return (
        <div>
            <h1>Hello Boxes!</h1>
            <BoxForm
                boxes={boxes}
                setBoxes={setBoxes}
            />
            <BoxDisplay boxes={boxes} />
        </div>
    )
}

export default Boxes;