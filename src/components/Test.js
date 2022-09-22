const Test = (props) => {
    //1- return props.testData.length;
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
    return(
        <div>
            <h1>All users</h1>
            {props.testData.length > 0 ? props.testData.map((user) => {
           return(
        <div>
            <h1>{user.id}</h1>
        </div>
           )
            })  : <p>no data</p>}
        </div>
    )
}
export default Test;