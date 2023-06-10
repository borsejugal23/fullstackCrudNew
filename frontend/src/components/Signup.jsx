// import react from "react";

import { useState } from "react"

export const Signup=()=>{
const [name,setName]=useState("")
const [email,setEmail]=useState("");
const [pass,setPass]=useState("")

const handleRegister=(e)=>{
e.preventDefault()
try {
    fetch("http://localhost:4000/users/register",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name,email
        ,pass})
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    setEmail("");
    setName("");
    setPass("")
} catch (error) {
    console.log(error)
}

}
return <div>
    <form action="" onSubmit={handleRegister}>
        <p>Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></p>
        <p>Email:<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></p>
        <p>password<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/></p>
        <button value="submit">submit</button>
    </form>
</div>
}