import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Landing, AboutUs, Contact, ErrorPage} from '../pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
          path='/'
          exact
          element={<Landing/>}
          />
          <Route
          path='/about-us'
          exact
          element={<AboutUs/>}
          />
          <Route
          path='/contact'
          exact
          element={<Contact/>}
          />
          <Route
          path='*'
          exact
          element={<ErrorPage/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
