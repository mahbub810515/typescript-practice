import React from 'react'
import User from './assets/components/User'

const App = () => {
  return (
    <div>     
      <User name={"mahabub"} age={32} isRegistered={true} lan={["bangla","english"]} />
      
    </div>
  )
}

export default App
