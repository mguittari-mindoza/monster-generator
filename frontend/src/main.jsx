import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx';
import MonsterPage from './components/Pages/MonsterPage/MonsterPage.jsx';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monster" element={<MonsterPage />} />
      <Route path="/notfound" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
