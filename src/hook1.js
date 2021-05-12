import React, {useState} from 'react';

const Hook1=()=>{
    //[varible/array,function] = useState(intial Value)

    const [counter,updateCounter]=useState(5); 
    const [message,updateMessage]=useState(""); 
    const [citylist,updateCityList]=useState(["Mumbai","Goa","Hyderabad","Delhi","Puna"]); 
    //[currentValue, updatedValue]=useState(intial Value);
    const one = () =>{
        for(let i=0;i<5;i++){
        updateCounter(pre=>pre+1);}
        updateMessage(`tatal count is : `)
    }
    
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-9 text-center ">
                    <h2 className="text-success">The Counter is : {counter}</h2>
                    <h2 className="text-success">{message}{counter}</h2>
                    <button className="btn btn-border btn-primary" onClick={()=>(updateCounter(counter+1))}>OnePlus</button>
                    <button className="btn btn-border btn-primary ml-2" onClick={one}>FivePlus</button>
                </div>
                <div className="col-lg-3 text-center">
                    <h4>Data from Hooks Array</h4>
                    {
                        citylist.map((cityname,index)=>
                            
                                <p key={index}> {cityname} </p>
                            
                        )
                    }
                   

                </div>
            </div>
        </div>
    )

}
export default Hook1;