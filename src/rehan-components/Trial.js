
const Service = (props) => {
    
    
      
    return props.allJobs.map(function(data){
        return(
            

                
        <div className="flex justify-center border-red border">
            <span className=" overflow-hidden ">
                <img className="object-cover rounded-full h-12 w-12 m-5" src="/images/react.png" alt="" />
            </span>
            <div className="">
                    <h2 className="text-base font-semibold capitalize my-5">{data.title}</h2>
                    <span className="inline-block  text-sm text-gray-500 capitalize">{data.status}</span>
                    <span className= "ml-4  text-sm font-medium text-gray-500" >{data.salary}</span>
                </div>
                <div className="flex-1 ml-20 mt-7 flex justify-end ">
                    <button className=" h-10 w-22 bg-rose-600 text-white text-sm font-bold px-6 rounded-md capitalize ">Delete</button>
                </div>
        </div>
       
        )
    })
     
    

  

    
}

export default Service;