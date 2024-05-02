
import logo from './logo.svg';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data_post from './screens/Home/Pages/Data_post';
import Data_get from './screens/Home/Pages/Data_get';
import Data_delete from './screens/Home/Pages/Data_delete';
import Data_puts from './screens/Home/Pages/Data_puts';
import { useEffect, useState } from 'react';

function App() {
 
  return (

    <>
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Data_get" element={<Data_get />} />
          <Route path="/Data_post" element={<Data_post />} />
          <Route path="/Data_delete" element={<Data_delete />} />
          <Route path="/Data_puts" element={<Data_puts />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
