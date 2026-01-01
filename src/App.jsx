import React from 'react'
import User from './assets/components/User'

let user = {
  name: "mahabub",
  age: 32,
  isRegistered: true,
  lan: ["bangla", "english"]
}

const App = () => {
  return (
    <div>
      <User user={user}/>

    </div>
  )
}

export default App
