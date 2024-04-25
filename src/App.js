import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import axios  from 'axios';
import {originals, action} from './urls'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url ={action}  title='Action ' isSmall />
    </div>
  );
}

export default App;
