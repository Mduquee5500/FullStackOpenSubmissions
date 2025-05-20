import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value, symbol }) => {
  return (
    <>
      <li>{text} {value}{symbol}</li>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all == 0 ? 0 : (good - bad) / all;
  const positive = all == 0 ? 0 : (good / all) * 100;

  if(all == 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>

    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <ul>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={all} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} symbol={'%'} />
      </ul>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text={'good'} />
      <Button onClick={handleNeutral} text={'neutral'} />
      <Button onClick={handleBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
