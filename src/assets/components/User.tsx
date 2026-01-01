import React from 'react'

type userProps = { 
    user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lan: string[];
}
}

const User = ({user}:userProps) => {
    return (
        <div className='w-100 h-50 mx-auto my-10 p-4 text-xl text-white border rounded bg-gray-400'>
            <h1 className='text-center font-bold text-2xl'>User Interface</h1>
            <h3>Name : {user.name}</h3>
            <h3>Age : {user.age}</h3>
            <h2>Speaks:
                {user.lan.map((language,index)=>{
                    return <span key={index}> {language} </span>
                })}

            </h2>
            {user.isRegistered ? <p>Registered User</p> : <p>Not Resigtered User</p>}

        </div>
    )
}

export default User
