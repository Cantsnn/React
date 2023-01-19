import React from 'react'
import List from './List'
import Info from './Info'
import "./styles.css"


function Todos() {
  return (
    <div className='container'  >
      <div className='todoapp'>
     <List/>
    

     </div>
     <Info/>

    </div>

   
  )
}

export default Todos