import { useEffect, useState } from "react"

export const Notes=()=>{
    const [_,setNote]=useState("");

    const getNote=()=>{
        try {
            fetch("http://localhost:4000/notes",{
                headers:{
                    "Content-Type": "application/json",
                    authorization:`hii ${localStorage.getItem("token")}`
                }
            })
            .then(res=>res.json())
            .then(res=>console.log(res))
            .catch(error=>console.log(error))
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getNote()
        // console.log(_)
    },[])
    return <div>

    </div>
}  