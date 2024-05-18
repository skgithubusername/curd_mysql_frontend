import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [date , setDate] = useState('')

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{name,email,phone,date})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))

    }



  return (
    <div className='mt-20 flex justify-center items-center'>
      <div className=' text-black flex justify-center items-center md:w-[600px] w-[380px] bg-white rounded'>
            <form onSubmit={handleSubmit}>
                <h1 className=' text-center font-semibold text-gray-600 mb-8 mt-4'>Add Student</h1>
                <div className='mb-4 bg-slate-400 rounded p-1'>
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder='Enter name'
                    className=' outline-none p-2  bg-slate-400' 
                    onChange={e =>setName(e.target.value)}
                   
                    />

                </div>
                <div className='mb-4 bg-slate-400 rounded p-1'>
                    <label htmlFor="">Email:</label>
                    <input type="email"  placeholder='Enter name' 
                    onChange={e =>setEmail(e.target.value)}
                    className=' outline-none p-2  bg-slate-400' 
                    />

                </div>
                <div className='mb-4 bg-slate-400 rounded p-1'>
                    <label htmlFor="">Phone No.:</label>
                    <input type="text" placeholder='Enter name'
                    onChange={e =>setPhone(e.target.value)}
                    className=' outline-none p-2  bg-slate-400' 
                    />

                </div>
                <div className='mb-4 bg-slate-400 rounded p-1'>
                    <label htmlFor="">D.O.B :</label>
                    <input type="date" placeholder='Enter name'
                    onChange={e =>setDate(e.target.value)}
                    className=' outline-none p-2  bg-slate-400' 
                    />

                </div>
                <button className='  to-gray-700 font-semibold bg-slate-600 p-2 mb-8 mt-4 rounded  w-72'>Submit</button>
            </form>
      </div>
    </div>
  )
}

export default Create
