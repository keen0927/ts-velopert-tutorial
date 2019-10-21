import React from 'react';
import useCounter from '../hooks/useCounter';

// type CounterProps = {
//   count: number;
//   onIncrease: () => void;
//   onDecrease: () => void;
//   onIncreaseBy: (diff: number) => void;
// };

// function Counter({
//   count,
//   onIncrease,
//   onDecrease,
//   onIncreaseBy
// }: CounterProps) {
//   return (
//     <div>
//       <strong>{count}</strong>
//       <button onClick={onIncrease}>+ 1</button>
//       <button onClick={onDecrease}>- 1</button>
//       <button onClick={() => onIncreaseBy(5)}>+ 5</button>
//     </div>
//   );
// }

function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  const handleDecrease = () => {
    if (count === 0) return;
    onDecrease();
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* <button onClick={handleDecrease}>-1</button> */}
      <button onClick={() => count === 0 ? '' : onDecrease()}>-1</button>
      {/* <button onClick={handleDecrease}>-1</button> */}
      <button onClick={() => onIncreaseBy(5)}>+5</button>

    </div>
  )
}

export default Counter;