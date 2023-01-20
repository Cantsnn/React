import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import React from 'react'
import './App.css';
import Home from "./components/Home"
import User from "./components/User"
import Users from "./components/Users"
import About from "./components/About"
import ErrorPage from "./components/ErrorPage"

function App() {
 
  
  return (
    
       <Router>
        <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/"   >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index  element={<Home/>}/>
          <Route path="/about"   element={<About/>}/>
          <Route path="users" element={<Users />}>
             
            <Route path=":id" element={<User />} />
            <Route path="*"   element={<ErrorPage/>}/>
        </Route>
        <Route path="*"   element={<ErrorPage/>}/>

        </Routes>

        </div>
       </Router>
       
 
  );
}

export default App;
