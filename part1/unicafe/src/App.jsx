import { useState } from 'react'


const Button = ({onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  return(
    <div>{props.text}: {props.value}</div>
  )
}

const Statistics = ({title, good, neutral, bad, total, average, positive }) => {
  if( total === 0 ) {
    return (
      <p>No feedback given</p>
    )
  }
  return(
    <div>
     <h2>{title}</h2>
      
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive + "%"} />
    </div>
  )
}

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
    <>
    <table>
      <tr>
        <th><h1>Give Feedback</h1></th>
      </tr>
    <tr>
        <td>
          <Button onClick={handleGoodClicks} text="good" />
        </td>
        <td>
          <Button onClick={handleNeutralClicks} text="neutral" />
        </td>
        <td>
          <Button onClick={handleBadClicks} text="bad" />
        </td>
    </tr>
    <tr>
      <Statistics 
        title="Statistics" 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average/total} 
        positive={(good/total) * 100} 
      />
    </tr>
</table>

    </>
  )
}

export default App
