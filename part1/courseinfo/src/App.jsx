const Header = (props) => {
  console.log(props)
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return( 
  <p>
    {props.part} {props.exercise}
  </p>
  )
}
 

const Content = (props) => {
  const results = props.parts.map(part => {
    return <Part key={part.name} part={part.name} exercise={part.exercises} />
  })
  return(
    <>
    {results}
    </>
  )
}

const Total = (props) => {
  let sum = 0;
 
  props.parts.map(part => {
    const excercises = part.exercises;     
    sum += excercises;
  })
  return(
    <>
      <p>
        Number of exercises {sum}
      </p>
    </>
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;