import { useState } from 'react'

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseCounter = () => {
    setCounter(counter + 1)
      console.log('increasing, value before', counter)
  }

  const restartClick = () => {
    console.log('Setting value to 0 from', counter)
    setCounter(0)
  }

  const decreaseClick = () => {
    setCounter(counter - 1)
    console.log('increasing, value before', counter)
  }

  return (
    <>
      <Display counter={counter}/>
      <Button onClick={increaseCounter} text={'Increase'}/>
      <Button onClick={decreaseClick} text={'Decrease'}/>
      <Button onClick={restartClick} text={'Restart'}/>
    </>
  )
}

export default App