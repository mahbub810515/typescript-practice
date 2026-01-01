import React from 'react'
import User from './assets/components/User'

let users = [{
  name: "mahabub",
  age: 32,
  isRegistered: true,
  lan: ["bangla", "english"]
},
{
  name: "rahat",
  age: 32,
  isRegistered: true,
  lan: ["bangla", "hinde"]
}]


const App = () => {
  return (
    <div>
      <User users={users}/>
     

    </div>
  )
}

export default App
