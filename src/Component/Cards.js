import React, { useState } from 'react'
import Card from './Card';
//import { useState } from 'react';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  //let likedCourses= props.likedCourses;
  //let setLikedCourses= props.setLikedCourses;
  const [likedCourses , setLikedCourses] = useState([])
  function getCourse()
  {
    if(category==="All")
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
    else
    {
        return courses[category];
    }
   
  }
  return (
    <div>
      {
        getCourse().map((course)=>
        (
        <Card key={course.id} 
        course={course} 
        likedCourses={likedCourses} 
        setLikedCourses={setLikedCourses}>

        </Card>))
      }
    </div>
  )
}

export default Cards;