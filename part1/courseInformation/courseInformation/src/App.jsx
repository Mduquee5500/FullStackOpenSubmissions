const Header = (props) => {
  console.log('Header:', props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  console.log('Part: ', props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log('Content: ', props)
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  console.log('Total: ', props)
  return (
    <p>Number of exercises {props.one + props.two + props.three}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

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

      <Content parts={course.parts} />

      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Total one={course.parts[0].exercises} two={course.parts[1].exercises} three={course.parts[2].exercises}/>
    </div>
  )
}

export default App