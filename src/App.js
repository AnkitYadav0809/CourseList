import React from 'react'
import { apiUrl , filterData } from './data';
import Navbar from './Component/Navbar'
import Filter from './Component/Filter';

const App = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter filterData={filterData}> </Filter>
    </div>
    </div>
  )
}

export default App
