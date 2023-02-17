import { useState } from 'react';
import { usePrevious } from '~/hooks/basic';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const prevCount = usePrevious(count);

  return (
    <div>
      <div>
        count: {count}, previousCount: {prevCount}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>other: {count2}</button>
      </div>
    </div>
  );
};
