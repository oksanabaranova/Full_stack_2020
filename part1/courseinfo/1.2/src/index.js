import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part1 = {props.part1} excercises1 = {props.excercises1} />
      <Part part2 = {props.part2} excercises2 = {props.excercises2}/>
      <Part part3 = {props.part3} excercises3 = {props.excercises3}/>      
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part1} {props.excercises1}
      {props.part2} {props.excercises2}
      {props.part3} {props.excercises3}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exercises {props.exercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of component'
  const excercises3 = 14

  return (
    <div>
      <Header course = {course} /> 
      <Content part1 ={part1} excercises1 = {excercises1} part2 = {part2} excercises2 = {excercises2} part3 = {part3} excercises3 = {excercises3}  /> 
      <Total exercises={excercises1 + excercises2 + excercises3} /> 
    </div>     
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
  

// 
