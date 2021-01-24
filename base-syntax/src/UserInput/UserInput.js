import React from  'react';
import './../App.css'

const userInput = (props) => {
    return (
        <input type="text" className="Input" value={props.initialName} onChange={props.changeName} />        
    );
}

export default userInput;