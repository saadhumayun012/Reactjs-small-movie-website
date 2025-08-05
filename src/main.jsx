import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import {Home, MovieDetailsCard} from './components/index'
import MovieContextProvider from './context/MovieContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/:idAndTitle' element={<MovieDetailsCard />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieContextProvider>
      <RouterProvider router={router}/>
    </MovieContextProvider>
  </StrictMode>
)
