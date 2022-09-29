import {useState} from "react"
import { v4 as uuid } from 'uuid';
const Add = (props) => {
    const [title, setTitle] = useState('')
    const [exp, setExp] = useState('')
    const [status, setStatus] = useState('');
    const [salary, setSalary] = useState('')
    const updateTitle = (event) => {
        
        setTitle(event.target.value)
    }
    const store = (event) => {
               event.preventDefault()
              props.addNewJob( {id: uuid(), title: title, experiance:  exp,status: status, salary: salary})
              setTitle('');
              setExp('')
              setStatus('');
              setSalary('')
    }
    return (
        <form className="flex flex-wrap" onSubmit={store}>
            <div className='w-full   p-5'>
<h1 className="capitalize text-lg font-semibold">create new job</h1>
            </div>
            <div className="w-full sm:w-6/12  p-5">
                <input type="text" name="" placeholder="Project..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded' value={title} onChange={updateTitle} required/>
            </div>
            <div className="w-full sm:w-6/12  p-5">
            <input type="number" name="" placeholder="Experiance..." value={exp}  onChange= {(events) => setExp(events.target.value)
            } className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded' required />
            
            </div>
            <div className="w-full sm:w-6/12  p-5">
            <input type="text" name="" placeholder="Remote, Hybrid..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded' value={status} onChange={(event) => setStatus(event.target.value)} required />
            
            </div>
            <div className="w-full sm:w-6/12 p-5 tex-center">
            <input type="number" name="" placeholder="Salary..." className='w-full border-gray-300 px-3 py-2.5 border outline-none rounded' value={salary} onChange={(event) => setSalary(event.target.value)} required />
            
            </div>
            <div className="w-full sm:w-6/12   p-5 text-center">
                <input type="submit" value="add job" className='bg-emerald-600 text-white capitalize py-2.5 px-5 rounded font-semibold cursor-pointer' />
            </div>
        </form>
    )
}
export default Add;