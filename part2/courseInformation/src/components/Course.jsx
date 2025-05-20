import Part from './Part'
import total from './Total'

const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total of {total(course)} exercises</p>
    </>
  )
}

export default Course