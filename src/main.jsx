import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import {Home, MovieDetails} from './pages/index'
import MovieContextProvider from './context/MovieContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/:idAndTitle' element={<MovieDetails />} />
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
