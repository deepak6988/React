import Usedata from "../context/userContext"

export default function Profile(){
    const {user} = Usedata();

    if(!user) return <h2>Please Login</h2>
    return <div><h2>Welcome: {user.username}</h2></div>
    
}