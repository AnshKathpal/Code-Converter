import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Login } from '../Components/Login'
import {Converter} from "../Components/Converter"
export const AllRoutes = () => {
  return (
    <Routes>

<Route path = "/" element = {<Login/>} />
<Route path = "/converter" element = {<Converter />} />




    </Routes>
  )
}
