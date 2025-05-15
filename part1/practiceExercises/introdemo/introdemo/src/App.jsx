const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const sum = a+b;
  console.log(now, sum);

  return (
    <div>
      <Hello name='Mateo' age='27'/>
      <p>It is {now.toString()}</p>
      <p>
        {a} plus {b} is {sum}
      </p>
    </div>
  )
}

export default App;