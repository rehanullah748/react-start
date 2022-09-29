import { data } from "autoprefixer";

const Jobs = (props) => {
    return props.allJobs.map(function(data){
        return (
            
            <div className="flex justify-center w-full mt-10"> 
                <div className=" ">
                    <div className="flex mg:w-1/2">
                <div className=" overflow-hidden w-"><img className="h-12 w-16 rounded-full object-cover mb-6" src="/images/react.png" alt="" /></div>
               
                <div className="ml-5">
                <div className="">{data.title}</div>
                
                
                <span className="">{data.status}</span>
                <span className="ml-4">{data.salary}</span>
                </div>
                </div>
                </div>
                
                
                
                <div className="md:w-1/2 align-left flex justify-end text-left"><button className="bg-green-400 w-20 h-12 rounded">Submit</button></div>
            
            </div>
           
        )
    })
}
export default Jobs;