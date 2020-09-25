import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Register from './pages/Register';
import Todos from './pages/Todos'
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}

export default App;
