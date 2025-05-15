import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <>
      <div>button press history: {props.allClicks.join(' ')}</div>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const handleReset = () => {
    setLeft(0)
    setRight(0)
    setAll([])
    setTotal(0)
  }

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 400, margin: '2rem auto', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, fontSize: 24, marginBottom: 24 }}>
        <span>{left}</span>
        <Button onClick={handleLeftClick} text="Left" />
        <Button onClick={handleRightClick} text="Right" />
        <span>{right}</span>
      </section>
      <History allClicks={allClicks} />
      <p style={{ fontWeight: 'bold', margin: '16px 0' }}>Total: {total}</p>
      <Button onClick={handleReset} text="Reset" />
    </main>
  )
}

export default App
