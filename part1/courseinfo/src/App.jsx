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
  return(
    <>
      <Part part={props.part1} exercise={props.exercises1} />
      <Part part={props.part2} exercise={props.exercises2} />
      <Part part={props.part3} exercise={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>
        Number of exercises {props.exercise}
      </p>
    </>
  )
}

const App = () => {
  // const course = 'Half Stack application development';
  // const part1 = 'Fundamentals of React';
  // const exercises1 = 10;
  // const part2 = 'Using props to pass data';
  // const exercises2 = 7;
  // const part3 = 'State of a component';
  // const exercises3 = 14;
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    excercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  console.log()
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.excercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total exercise={part1.excercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;