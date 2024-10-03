import React from 'react';
import 'react-notifications-component/dist/theme.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import { ReactNotifications } from 'react-notifications-component'

function App(): JSX.Element {
  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
