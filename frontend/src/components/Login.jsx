import { useState } from "react";

export const Login=()=>{
    const [email,setEmail]=useState("");
const [pass,setPass]=useState("")

const handleLogin=(e)=>{
e.preventDefault()
try {
    fetch("http://localhost:4000/users/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            
        },
        body:JSON.stringify({email
        ,pass})
    })
    .then(res=>res.json())
    .then((res)=>{
        localStorage.setItem("token",res.token)
        console.log(res.token)
    })
    setEmail("");
    setPass("")
} catch (error) {
    console.log(error)
}

}
    return <div>
       <form onSubmit={handleLogin}>
       <p>Email:<input type="email" value={email} onChange={(e=>setEmail(e.target.value))} /></p>
        <p>password:<input type="password" value={pass} onChange={(e=>setPass(e.target.value))}/></p>
        <button value="submit">Login</button>
       </form>
    </div>
}