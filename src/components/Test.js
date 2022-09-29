import { useState } from "react"
const Test = (props) => {
   const [state, setState] = useState('aziz')
    return <h1>{state}</h1>;
    //2- return <h1>{props.testData.length}</h1>
    //3-  return(
    //     <div>
    //         <h1>{props.testData.length}</h1>
    //     </div>
    // )
    //4-  return props.testData.length > 0 ? props.testData.map(function(user) {
    //    return(
    //     <div>
    //         <h1>{user.title}</h1>
    //     </div>
    //    )
    // }) : <h1>no data</h1>
    //5- 
    
    
}
export default Test;