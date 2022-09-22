import { useState} from 'react'
import Jobs from './components/Jobs';
import Test from "./components/Test"

function Rehan() {
  const [jobs, setJobs] = useState([
    {id: 1, title: 'web developer', experiance:  3, status: 'remote', salary: 3000},
    {id: 2, title: 'mobile developer', experiance: 3,status: 'hybrid', salary: 4500},
    {id: 3, title: 'blockchain developer', experiance:  2,status: 'office', salary: 8000},
    {id: 4, title: 'react developer', experiance:  4,status: 'remote', salary: 3000},
    {id: 5, title: 'javascript developer', experiance:  5,status: 'hybrid', salary: 9000}
    
  ])

  return (
    <div>
     
    {/* <Jobs allJobs={jobs}  /> */}
    <Test testData={jobs} />

    </div>
  )
}

export default Rehan;
