import React,{useState,useEffect} from 'react';
/*
useState = state mangement class component
useEffect = componentDidMount() in class component
*/


const Hook5 =()=>{
    const[userlist,updateUser]=useState([]);
    const[citylist,updateCity]=useState([]);
    const getUser=()=>{
        fetch("user3.json")
        .then(response=>response.json())
        .then(result=>updateUser(result))
        }
    const getCity=()=>{
        fetch("city.json")
        .then(response=>response.json())
        .then(result=>updateCity(result))
    }
    useEffect(()=>{
        //alert("Auto call");
        getUser();
        getCity();
    },[])
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>{userlist.length} -: useState() ,useEffect Example </h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <h2 className="text-primary mb-3">City List</h2>
                            {
                                citylist.map(x=><p>{x}</p>)
                            }
                </div>
                <div className="col-lg-9 text-center">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-light text-info">
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Hobbies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userlist.map((xuser,index)=>
                                <tr key={index} className="bg-light text-info">
                                    <th>{index+1}</th>
                                    <th>{xuser.name}</th>
                                    <th>{xuser.age}</th>
                                    <th>{xuser.mobile}</th>
                                    <th>{xuser.hobbie.map((xh)=><p>{xh}</p>)}</th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Hook5;