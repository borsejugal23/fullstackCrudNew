import { useState } from "react";

export const AddNote=()=>{

    const [title,settitle]=useState("")
    const [body,setbody]=useState("");
    const [category,setcategory]=useState("")
    
    const addNewNote=(e)=>{
    e.preventDefault()
    try {
        fetch("https://defiant-tuna-clothes.cyclic.app/notes/create",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                authorization:`hii ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({title,body
            ,category})
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
        setbody("");
        settitle("");
        setcategory("")
    } catch (error) {
        console.log(error)
    }
    
    }
    return <div>
        <form action="" onSubmit={addNewNote}>
            <p>title:<input type="text" value={title} onChange={(e)=>settitle(e.target.value)}/></p>
            <p>body:<input type="text" value={body} onChange={(e)=>setbody(e.target.value)}/></p>
            <p>category<input type="text" value={category} onChange={(e)=>setcategory(e.target.value)}/></p>
            <button value="submit">submit</button>
        </form>
    </div>
} 