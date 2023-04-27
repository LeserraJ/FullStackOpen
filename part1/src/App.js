const Header = () =>{
  const course = 'Half Stack application development'

return(
  <div>
    <h1>{course}</h1>
  </div>
)
};

const Content = (props) =>{
  const lessons = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]
  return(
    <div>
      <p>{lessons[0].part} {lessons[0].exercises}</p>
      <p>{lessons[1].part} {lessons[1].exercises}</p>
      <p>{lessons[2].part} {lessons[2].exercises}</p>
    </div>
  )
};

const Total = (props) =>{
  const exercises = [
    {exercises: 10},
    {exercises: 7},
    {exercises: 14},
  ]

  return(
    <div>
      <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}  </p>
    </div>
  )
};


const App = () => {
    return (
    <div>
     <Header/>
     <Content/>
     <Total/>
    </div>
  )
}

export default App


//3 new components Header, Content, Total, and display all in the App component