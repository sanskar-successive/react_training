// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import { useReducer } from "react";

const VotingApp = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "VoteA":
        return {...state , countA : state.countA + 1};
      case "VoteB":
        return {...state , countB : state.countB + 1};
      default:
        return state;
    }
  };
  const [voteCount, dispatch] = useReducer(reducer, { countA: 0, countB: 0 });
  
  return (
    <>
      <h3>Voting Application</h3>
      <button onClick={() => dispatch({ type: "VoteA" })}>Vote A</button>
      <p>Vote count of A : {voteCount.countA}</p>
      <button onClick={() => dispatch({ type: "VoteB" })}>Vote B</button>
      <p>Vote count of B : {voteCount.countB}</p>
    </>
  );
};

export default VotingApp;
