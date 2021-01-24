import React from 'react';
import './../App.css'

const userOutput = (props) => {
    return <p className="Output">{props.outputText}</p>;
}

export default userOutput;