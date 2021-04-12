import React, { useState } from 'react';

const CounterPureFunction = () => {
  // state variable, initialized to 0
  const [count, setCount] = useState(0);

        return (
              <div>
                <div role="counter">{count}</div>
                <button role="increment" onClick={() => setCount(count + 1)}>Increment</button>
                <button role="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        )
};

export default CounterPureFunction;