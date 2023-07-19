import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../../redux/apiCalls"
import Topbar from '../../components/topbar/Topbar'
//import Sidebar from '../../components/sidebar/Sidebar'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch,{username, password})
    }


 return (
    <div>
        <Topbar/>
        <div style={{
        
            height: "100vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center" 
            }}>
            <input 
                style={{padding:"10px", marginBottom:"20px"}}
                type="text" 
                placeholder='username' 
                onChange={e=>setUsername(e.target.value)}
            />
            <input 
                style={{padding:"10px", marginBottom:"20px"}}
                type="password" 
                placeholder='password' 
                onChange={e=>setPassword(e.target.value)}
            />
            <button onClick={handleClick} style={{padding:"10px", width:"100px"}}>Login</button>
        </div>
    </div>
    
  )
}
