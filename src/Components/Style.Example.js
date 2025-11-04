import React from "react";
import './style.css'

const StyleExample = () => {
    const myStyles = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px'
    }
    return (
        <div>
            <h2 style={{ color: 'red' }}>Inline Example</h2>
            <h2 style={myStyles}>Internal Example</h2>
            <h2 className="success">External CSs</h2>
        </div>
    )

}
export default StyleExample