import React, { Component } from 'react';
import UserList from './userlist';
import axios from 'axios';


class Mypropsjson extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            alluser:[
        ]
             
        }
    }

    getUser=()=>{
        axios.get("user3.json").then(response=>{this.setState({
            alluser:response.data
        })
    })
    }
    componentDidMount(){
        this.getUser();
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center form">
                    <h3>
                        Read data from json and use  props
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
                                hobbie={xuser.hobbie}
                                />
                            )
                        })
                    }
                        

                </div>
                
            </div>
            
        )
    }
}

export default Mypropsjson
