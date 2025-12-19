import React, { useRef } from 'react'

const UseRefHook = () => {
    const qty = useRef();

    const increment = () => {
        qty.current.value++
    }

    return (
        <div className='container p-5'>
            <h2>Reference Example </h2>
            <input placeholder='No Of Items ' ref={qty} />
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseRefHook
