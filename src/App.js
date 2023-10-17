import { useEffect } from 'react';
import ReactGa from 'react-ga';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-NGF23F2TX7');

    ReactGa.pageview('/');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
