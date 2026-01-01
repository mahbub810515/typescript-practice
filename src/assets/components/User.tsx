import React, { use } from 'react'

type userProps = {
    users: {
        name: string;
        age: number;
        isRegistered: boolean;
        lan: string[];
    }[]
}

const User = ({ users }: userProps) => {
    return (
        <div >
            <h1 className='text-center font-bold text-2xl'>User Interface</h1>
            {users.map((user) => {
                return <div className='w-100 h-50 mx-auto my-10 p-4 text-xl text-white border rounded bg-gray-400'>
                    <h2>Name: {user.name}</h2>
                    <h2>Age: {user.age}</h2>
                    <h2 className='flex gap-2'>Lang:  {user.lan.map((lang,index)=>{
                        return <p key={index}>{lang}</p>
                    })} </h2>
                    {user.isRegistered? <p>resgistered user</p> : <p>Not Reg user</p>}
                </div>

            })}
        </div>
    )
}

export default User
