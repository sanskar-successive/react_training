import { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h3>Parent Component</h3>
      <p>Count state in parent : {count}</p>
      <Child
        count={count}
        incrementCount={incrementCount}
        resetCount={() => setCount(0)}
      />
    </>
  );
};

export default Parent;
