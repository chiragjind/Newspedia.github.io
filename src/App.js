
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Login from './components/Login';
import Signin from './components/Signin';
const  App =()=> {
   
  const [progress,setprogress]=useState(0)

  const setProgress=(progress)=>{
     setprogress(progress)
  }
 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#fff'
        progress={progress}
      />
        
     <Routes>
     
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Signin' element={<Signin/>}/>
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={6} country="in" category="business"/>}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={6} country="in" category="health"/>}/>
          <Route exact  path='/science' element={<News setProgress={setProgress} key="science" pageSize={6} country="in" category="science"/>}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={6} country="in" category="sports"/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={6} country="in" category="technology"/>}/>
        
        </Routes>
        </Router>
      </div>
    )
  
}

export default App
