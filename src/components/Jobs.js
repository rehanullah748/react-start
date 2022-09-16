const Jobs = ({allJobs, title, age}) => {
    
   const arr = ['rehan', 'shakil' ,'aziz']
   
  
    return(
        <div>
           {allJobs.length  > 0 ?  <h1 className='text-red-60'>hello</h1> : 'no items'}
        </div>
    )
}
export default Jobs;