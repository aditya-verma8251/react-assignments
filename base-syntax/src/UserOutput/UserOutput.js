import React from 'react';
import './../App.css'

const UserOutput = (props) => {
    return <p className="Output">{props.outputText}</p>;
}

export default UserOutput;