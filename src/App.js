import { useState} from 'react'
import Jobs from './components/Jobs';
import Service from './components/Sst';


function Rehan() {
  const [jobs, setJobs] = useState([
    {id: 1, title: 'web developer', experiance:  3},
    {id: 2, title: 'mobile developer', experiance: 3},
    {id: 3, title: 'blockchain developer', experiance:  2},
    {id: 4, title: 'react developer', experiance:  4},
    {id: 5, title: 'javascript developer', experiance:  5}
    
  ])
  const [user, setUser] = useState({name: 'habib', email: 'rehan@gmail.com'})
  return (
    <div>
    <Jobs allJobs={jobs} title='jobs component' age='23' />
    <Service myService= {user} skills='java' degree='BS' />

    </div>
  )
}

export default Rehan;
