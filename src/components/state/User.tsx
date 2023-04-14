import { useState } from "react"

type AuthUser = {
    name: String
    email: String
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser ({
            name: 'Tran Minh Tung',
            email: 'tranmingtung@gmail.com',
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}