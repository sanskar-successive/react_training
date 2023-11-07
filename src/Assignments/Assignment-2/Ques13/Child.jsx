// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.

const Child = ({ count, incrementCount, resetCount }) => {
  return (
    <>
      <h3>Child Component</h3>
      <p>Count state in child : {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  );
};

export default Child;
