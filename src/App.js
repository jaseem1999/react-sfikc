
import React from 'react'
import './App.css'
import Banner from './Compontents/Banner/Banner'
import College from './Compontents/College/College'

import Committee from './Compontents/Committee/Committee'
import Megazin from './Compontents/Megazin/Megazin'
import Mustafa from './Compontents/Mustafa/Mustafa'
import Nav from './Compontents/NavBar/Nav'
import Posters from './Compontents/Posters/Posters'
import Studies from './Compontents/Studies/Studies'
import Gform from './Compontents/Gform/Gform'




function App() {
  
  return (
    <div className="App">
       <Nav/>
      <Banner/>
      <Mustafa/>
      <College/>
      <Studies/>
      <Posters/>
      <Megazin/>
      <Gform/>
      <Committee/>
      
      
    
    </div>
  );
}

export default App;
