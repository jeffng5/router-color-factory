import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Colors from "./Colors"
import SingleColor from "./SingleColor"
import ColorForm from "./ColorForm"
import './App.css';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
<Route path="/colors" element= {<Colors />} />

<Route path="/colors/:color" element= {<SingleColor/>} />
<Route path="/colors/new" element= {<ColorForm/>} />
</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
