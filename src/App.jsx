import React from 'react'
import User from './assets/components/User'
import Button from './assets/components/Button'

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
      <Button>click me</Button>
     

    </div>
  )
}

export default App
