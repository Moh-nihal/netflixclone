/* eslint-disable no-unused-vars */
import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Movies from '../Components/Movies'
import WebSeries from '../Components/WebSeries'
import TV from '../Components/TV'
import Songs from '../Components/Songs'
import Adult from '../Components/Adult'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'  Component={Movies}/>
        <Route path='/movies'  Component={Movies}/>
        <Route path='/web-series'  Component={WebSeries}/>
        <Route path='/tv'  Component={TV}/>
        <Route path='/songs' Component={Songs}/>
        <Route path='/adult'  Component={Adult }/>
    </Routes>
    </BrowserRouter>
  )
}
