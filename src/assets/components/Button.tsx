import React, { Children } from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
  return (
    <button className='bg-green-500 p-2 text-center rounded'>{children}</button>
  )
}

export default Button
