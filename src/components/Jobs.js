import currency from 'currency-formatter'
const Jobs = ({allJobs}) => {
    
    return(
        <div className="">
           {allJobs.length  > 0 ?  allJobs.map(function(job) {
             return(
                <div className="flex mb-4 hover:bg-gray-100 p-4 rounded-sm">
                    <span className="w-12 h-12 overflow-hidden">
                        <img className="object-cover rounded-full w-full h-full" src="/images/react.png" alt="" />
                    </span>
                    <div className="ml-5">
                        <h2 className="text-base font-semibold capitalize">{job.title}</h2>
                        <span className="inline-block mt-1 text-sm text-gray-500 capitalize">{job.status}</span>
                        <span className= "ml-4 text-sm font-medium text-gray-500" >{currency.format(job.salary, {code: 'USD'})}</span>
                    </div>
                <div className=' flex-1 ml-50 flex justify-end'>
                    <button className='bg-rose-600 text-white text-sm font-bold px-6 rounded-md capitalize'>delete</button>
                </div>
                </div>
             )
           }) : 'no jobs'}
        </div>
    )
}

export default Jobs;