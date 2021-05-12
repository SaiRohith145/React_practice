import React,{useState} from 'react';
import { Link ,useParams } from 'react-router-dom';


const userlist = [
    {name:'Harish',mobile:9999999998,age:'20 years',photo:'1.jpg'},
    {name:'Manu',mobile:9999999995,age:'22 years',photo:'2.jpg'},
    {name:'Mahesh',mobile:999999944,age:'21 years',photo:'3.jpg'},
    {name:'Gopi',mobile:9999999933,age:'23 years',photo:'1.jpg'},
    {name:'Alex',mobile:9999999992,age:'25 years',photo:'2.jpg'},
    {name:'Moti',mobile:9999999991,age:'26 years',photo:'3.jpg'}
    

];

const Hook4 = () =>{
    const [user,updateUser]=useState(userlist);
    const {userid}=useParams();
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Reactjs Hooks , useState , useParams Example</h3>
                    <p>useParams() use to receive data from url sent by other page</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {
                        user.map((xuser,index)=>{
                            return(
                                //<Link className="btn btn-primary m-3 btn-block btn-sm" to={`/${index}/hook-four`}>  {xuser.name} </Link>
                                <Link to={`/${index}/hook4`} className="btn btn-primary btn-block btn-sm"> {xuser.name} </Link>
                            )
                        })
                    }
                </div>
                <div className="col-lg-6 text-center mt-5">
                    <h4>About User : {user[userid].name}</h4>
                    <p>Full name : {user[userid].name}</p>
                    <p>Mobile : {user[userid].mobile}</p>
                    <p>Age : {user[userid].age}</p>
                </div>
                <div className="col-lg-3">
                    <br/>
                    <img src={user[userid].photo} height="200" width="200"/>
                </div>
            </div>
        </div>
    )
}

export default Hook4;