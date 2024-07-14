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
  async function fetchData()
  
  {
    setLoading(true);
    try
    {
   let response = await fetch(apiUrl);
   let output = await response.json();
   setCourses(output);
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
    <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData}> </Filter>
    </div>
    <div>
      {
      loading ? (<spinner></spinner>) : (<Cards></Cards>)
      }
      </div>
    </div>
  )
}

export default App
