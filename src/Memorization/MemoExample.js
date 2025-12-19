import React, { useCallback, useMemo, useState } from 'react'
import { resumeToPipeableStream } from 'react-dom/server';

const MemoExample = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const result = useMemo(() => {
        return mul(number)
    }, [number])

    const add = useCallback(() => {
        setCount(count + 1)
    },[count])
    return (
        <div className='container p-5'>
            <h2>Count :{count}</h2>
            <button onClick={add}>Add</button>
            <h2>Result  : {result}</h2>
            <button onClick={() => setNumber(number + 1)}>Add</button>
        </div>

    )
}

const mul = (num) => {
    console.log("Funtion Excecuted !");

    return num * num
}
export default MemoExample
