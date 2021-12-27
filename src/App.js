
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
import Mathrukam from './Compontents/Mathrukam/Mathrukam'
import Feedback from './Compontents/Feedback/Feedback'
import Deprt from './Compontents/Department/Deprt'
import Map from './Compontents/Map/Map'
import FooterButton from './Compontents/FooterBottom/FooterButton'
import Sfi from './Compontents/SFI/Sfi'
import Footer from './Compontents/Footer/Footer'
import Vedio from './Compontents/vedio/Vedio'


function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Mustafa/>
      <College/> 
      <Studies/>
      <Deprt/>
      <Posters/>
      <Megazin/>
      <Gform/>
      <Committee/>
      <Mathrukam/>
      <Map/>
      <FooterButton/>
      <Vedio/>
      <Sfi/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
