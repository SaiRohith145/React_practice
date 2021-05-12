import React, {useState} from 'react';

const Hook2=()=>{
    //[varible/array,function] = useState(intial Value)


    const [citylist,updateCityList]=useState(["Mumbai","Goa","Hyderabad","Delhi","Puna"]); 
    //[currentValue, updatedValue]=useState(intial Value);
    const [newcity,processCity]=useState("");
    
    const save = () =>{
        updateCityList([...citylist,newcity]);
        document.getElementById("ip").value="";

    }
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3 text-center">
                    <label>Enter City Name</label>
                    <input type="text" id="ip" className="form-control" 
                    onChange={obj =>{ processCity(obj.target.value)}}
                    />
                    <button className="btn btn-primary btn-block m-3" 
                    onClick={save}>save</button>
                
                

                </div>
                <div className="col-lg-9 text-center ">
                <h4>Data from Hooks Array {citylist.length}</h4>
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
export default Hook2;