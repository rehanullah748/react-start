import { useState } from "react";
const Form = () => {
   const [title, setTitle] = useState('')
   const [exp, setExp] = useState('')
   const [status, setStatus] = useState('')
   const [salary, setSalary] = useState('')
    

    
    return (
        
        <form className="flex flex-wrap justify-between">
            <h1>{salary}</h1>
            <h1>{exp}</h1>
            <h1>{title}</h1>
            <h1>{status}</h1>

        <div className="w-full sm:w-6/12  p-5">
            <input type="text" name="" placeholder="Project..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded'  required value={title} onChange = {(event)=>{setTitle(event.target.value)}} />
        </div>
        <div className="w-full sm:w-6/12  p-5">
        <input type="number" name="" placeholder="Experiance..." 
         className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded' required value={exp} onChange = {(event)=> {setExp(event.target.value)}} />
        
        </div>
        <div className="w-full sm:w-6/12  p-5">
        <input type="text" name="" placeholder="Remote, Hybrid..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded'  required />
        
        </div>
        <div className="w-full sm:w-6/12 p-5 tex-center">
        <input type="number" name="" placeholder="Salary..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded'  required  />
        
        </div>
        <div className="w-full sm:w-6/12   p-5 text-center">
            <input type="submit" value="add job" className='bg-emerald-600 text-white capitalize py-2.5 px-5 rounded font-semibold cursor-pointer' />
        </div>
    </form>
    )
    }
    export default Form;