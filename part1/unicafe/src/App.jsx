import { useState } from 'react'


const Button = ({onClick, text }) => <button onClick={onClick}>{text}</button>

function App() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [ bad, setBad] = useState(0);
  const [ average, setAverage ] = useState(0); 
  const [ total, setTotal ] = useState(0);

  
  const handleGoodClicks = () => {
    const goodClicks = good + 1;
    setGood(goodClicks);
    setTotal(goodClicks + neutral + bad )
    setAverage(average + 1);
   }

  const handleNeutralClicks = () => {
    const neutralClicks = neutral + 1;
     setNeutral(neutralClicks)
    setTotal(neutralClicks + good + bad ) 
    setAverage(average + 0);

  }

  const handleBadClicks = () => {
    const badClicks = bad + 1;
    setBad(badClicks)
    setTotal(badClicks + neutral + good )
    setAverage(average - 1)

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
        <li>Total: {total}</li>
        <li>Avg: {average/total}</li>
        <li>Positive: {(good/total) * 100} %</li>
      </ul>
    </div>
  )
}

export default App
