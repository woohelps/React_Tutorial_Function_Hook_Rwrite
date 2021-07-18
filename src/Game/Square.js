import React from 'react'

function Square(props) {
    return (
        <button className="bg-white border border-gray-700 border-solid h-12 w-12 float-left"
                onClick={()=>props.onClick()}>
            {props.value}
        </button>
    );

}

export default Square;