import React from 'react'

type userProps = { 
    name: string,
    age: number, 
    isRegistered: boolean 
}

const User = ({name,age,isRegistered}:userProps) => {
    return (
        <div className='w-100 h-50 mx-auto my-10 p-4 text-xl text-white border rounded bg-gray-400'>
            <h1 className='text-center font-bold text-2xl'>User Interface</h1>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
            {isRegistered ? <p>Registered User</p> : <p>Not Resigtered User</p>}

        </div>
    )
}

export default User
