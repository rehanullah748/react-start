import { useState} from 'react'
const Service = (props) => {
    console.log(props)
    console.log(object);
    
    return(
        <div>
            <h1 className='text-2xl text-orange-700'>name: {props.myService.name}</h1>
            <h1>email: {props.myService.email}</h1>
            <h1>skills: {props.skills}</h1>
            <h1>degree: {props.degree}</h1>
        </div>
    )
    

}
export default Service;
