import React from 'react';
import Home from './components/Home';
import About from './components/aboutPage/About';
import Contact from './components/contactPage/Contact';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootRouter from './components/router/RootRouter';
import ContactInfo from './components/contactPage/ContactInfo';
import ContactRoot from './components/router/ContactRoot'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootRouter />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={< ContactRoot />} >
          <Route index element={<Contact />} />
          <Route path='info' element={<ContactInfo />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
