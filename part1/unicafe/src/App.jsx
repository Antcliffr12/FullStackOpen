import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [ bad, setBad] = useState(0);

  const handleGoodClicks = () => {
    const goodClicks = good + 1;
      setGood(goodClicks);
  }

  const handleNeutralClicks = () => {
    const neutralClicks = neutral + 1;
    setNeutral(neutralClicks)
  }

  const handleBadClicks = () => {
    const badClicks = bad + 1;
    setBad(badClicks)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClicks} text="good" />
      <Button onClick={handleNeutralClicks} text="neutral" />
      <Button onClick={handleBadClicks} text="bad" />
      <br/> 
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  )
}

export default App
