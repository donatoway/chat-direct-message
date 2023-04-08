import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/next'


export const login = () => {
    const {data: session} = useSession()
    if(session)
        return (
        <div>
            <p>welcome {session.user.email}</p>
            <button onClick={()=> signOut}>Sign Out</button>
        </div>)
    else {
        return (
        <div>  
            <p>you are not signed in</p>
            <button onClick={()=>signIn}>Sign in</button>
        </div>)
    }
}
