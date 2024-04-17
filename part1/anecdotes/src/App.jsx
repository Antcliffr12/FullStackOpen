import { useState } from 'react'
  
const Button = (props) => {
  return <button onClick={props.onSmash}>{props.text}</button>
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const initVotes = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(initVotes);

  const handleAnecdotes = () => {
    const randomAnecdotes = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdotes)
  }

  const handleVotes = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }
  
  //loop thorugh arry of votes to get the highest
  //get key of highest Vote and input it with word list
  let highestVoteIndex = 0;
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > votes[highestVoteIndex]) {
      highestVoteIndex = i;
    }
  }
 
  return (
    <div>
      {anecdotes[selected]}
      <div>
        has votes {votes[selected]}
      </div>  
      <div>
        <h2>Anecdote with the most votes</h2>

        {anecdotes[highestVoteIndex]}
      </div>
      <div>
        <Button onSmash={handleVotes} text="Vote" />
        <Button onSmash={handleAnecdotes} text="Next Anecdote" />
      </div>
    </div>
  )
}

export default App
