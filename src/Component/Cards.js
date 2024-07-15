import React from 'react'
import Card from './Card';

const Cards = (props) => {
  let courses = props.courses;
  function getCourse()
  {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => 
      {
        allCourses.push(courseData);
      }
      )
    })
    return allCourses;
  }
  return (
    <div>
      {
        getCourse().map((course)=>
        (<Card key={course.id} course={course}></Card>))
      }
    </div>
  )
}

export default Cards
