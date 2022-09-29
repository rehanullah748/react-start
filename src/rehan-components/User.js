
function Laram(props) {
    return props.laramData.length > 0 ? props.laramData.map (function(data){
        return (
            <div className="flex ">
          <h1 className="">{data.id}</h1> 
          <h1>{data.name}</h1> 
          <h1>{data.qualification}</h1> 
          <h1>{data.address}</h1> 
          
          </div>
        )
    }) : 'no items';
}
export default Laram;