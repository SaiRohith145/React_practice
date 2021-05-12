import React, { Component } from 'react'
import UserList from './userlist'
class MyUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            alluser:[
            {name:"abc",mobile:"1234567890",age:"12 years"},
            {name:"bcd",mobile:"2345678901",age:"13 years"}
            
        ]
             
        }
    }
    
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center form">
                    <h3>
                        Props, Component intraction,
                        parent child component,
                        component reusablity
                    </h3>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.alluser.map((xuser,index)=>{
                            return(
                                <UserList
                                key={index}
                                fullname={xuser.name}
                                mobileno={xuser.mobile}
                                age={xuser.age}
                                hobbie={["mango","apple"]}
                                />
                            )
                        })
                    }
                        
                </div>
                
            </div>
            
        )
    }
}

export default MyUser
