import React from 'react';

/**
 * Whatever we send in the JSX will be available in the props
 * Any elements or text between the opening and closing tags of the component will be available in the props.children
 */

var person = (props) => {
    console.log(props)
    return (
        <div>
            <p onClick={props.customClickEv}>I am {props.name} and I am {props.age} old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.customChanged} value={props.name} key={props.key} />
        </div>
    )
};

export default person;