import React from 'react'
import ReactDOM from 'react-dom'

const Food = (props) => {
    const { food } = props;

    return (
        <div>{food}</div>
    )
};

export default Food;