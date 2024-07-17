import React, { useEffect, useState } from 'react'
import { apiUrl , filterData } from './data';
import Navbar from './Component/Navbar'
import Filter from './Component/Filter';
// import { useState , useEffect } from 'react';
///import { useEffect } from 'react';
import Spinner from './Component/Spinner';
import Card from './Component/Card';
import Cards from './Component/Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  const [courses , setCourses] = useState(null);
  const [loading , setLoading]= useState(true);
  const[category , setCategory]= useState(filterData[0].title);
  async function fetchData()
  
  {
    setLoading(true);
    try
    {
   let response = await fetch(apiUrl);
   let output = await response.json();
   setCourses(output.data);
    }
    catch(error)
    {
       toast.error("Api not working");
    }
    setLoading(false);
  }
  useEffect(()=> {

    fetchData(); }, []
  )
  return (
    <div className="min-h-screen flex-col flex bg-slate-950">
    <div>
      <Navbar></Navbar>
    </div>
    <div className="bg-slate-950">
      <Filter filterData={filterData} category ={category } setCategory={setCategory}> </Filter>
    </div>
    <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
      {
      loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
      }
      </div>
    </div>
  )
}

export default App;