const Total = (course) => {
  const sum = course.parts.reduce(( acc, part ) => {
    console.log('Exercises in', part.name, 'is:', part.exercises);
    return acc += part.exercises;
  }, 0);
  console.log('Total:', sum);
  return sum;
}

export default Total