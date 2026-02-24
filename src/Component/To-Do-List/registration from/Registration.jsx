import {useState} from 'react';
import './Registration.css';
export default function Registration(){
    const [name,setName]=useState(" ")
    const [email,setEmail]=useState(" ")
    const [password,setPassword]=useState(" ")
    const [submittedData,setSubmittedData]=useState({});
    function handleform(){
        if(!name.trim()){
            console.log("fill the name")
            return
        }
        if(!email.trim()){
            console.log("fill the email")
            return
        }
        if(!password.trim()){
            console.log("fill the password")
            return
        }
        setSubmittedData({name,email,password})

    }
    return (
        
        <div className='bg-white px-6 py-12'>
           <h1>Registration Form</h1>  
           <div className='flex flex-col'>
            <label className='text-left'> Name </label>
           <input type="text" placeholder="enter your name"  onChange={(e)=>setName(e,EventTarget,value)}/>
           </div>
           <div className='flex flex-col'>
            <label className='text-left'> Email </label>
           <input type="text" placeholder="enter your email"  onChange={(e)=>setEmail(e,EventTarget,value)}/>
           </div>
           <div className='flex flex-col'>
            <label className='text-left'> password </label>
           <input type="text" placeholder="enter your password" onChange={(e)=>setPassword(e,EventTarget,value)}/>
           </div>
           <button className='w-full'>Submit</button>
           {submittedData && <div className='text-left border-l-6 border-green-600 rounded-2x1 my-3 px-5 py-2 bg-green-200 '>
             <h2>Submitted data</h2>
             <p>Name: {submittedData.name}</p>
             <p>Email:{submittedData.email}</p>
             <p>Password:{submittedData.password}</p>
           </div>}
           
           
        </div>

    )
}