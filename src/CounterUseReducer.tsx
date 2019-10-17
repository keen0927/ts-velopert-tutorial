import React, { useState } from 'react';

function Counter() {

    const [ count, setCount ] = useState(0);

    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => {
        if (count === 0) return;
        setCount(count - 1);
    }

    return (
        <>
            <h1>카운트</h1>
            <p>{ count }</p>
            <div>
                <button type="button" onClick={onIncrease}>+ 1</button>
                <button type="button" onClick={onDecrease}>- 1</button>
            </div>
        </>
    )
}

export default Counter;