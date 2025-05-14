const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.one + props.two + props.three}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* <h1>{course}</h1> */}
      <Header course={course}/>

      {/* <p>{part1} {exercises1}</p> */}
      {/* <Content part={part1} exercises={exercises1} /> */}

      {/* <p>{part2} {exercises2}</p> */}
      {/* <Content part={part2} exercises={exercises2} /> */}
      
      {/* <p>{part3} {exercises3}</p> */}
      {/* <Content part={part3} exercises={exercises3} /> */}

      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />

      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

export default App