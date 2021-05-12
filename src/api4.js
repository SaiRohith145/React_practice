import React, { Component } from 'react'

class Api4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[]
        }
    }
    userlist=()=>{
        fetch("http://firstenquiry.com/api/react/crud/list.php")
        .then(response=>response.json())
        .then(result=>this.setState({user:result}))
    }
    componentDidMount(){
        this.userlist();
    }
    
    render() {
        return (
            <div className="container">
                <h1 className="text-center">User List</h1>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4> JSON data from User using fetch </h4>
                        <h3 className="text-success">Available Users :- {this.state.user.length}</h3>
                    </div>
                </div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="bg-light text-danger text-center">
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Mobile</th>
                            <th>User Email</th>
                            <th>User Postdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map((xuser,index)=>{
                                return(
                                    <tr className="text-center text-info" key={index}>
                                        <td>{xuser.id}</td>
                                        <td>{xuser.name}</td>
                                        <td>{xuser.mobile}</td>
                                        <td>{xuser.email}</td>
                                        <td>{xuser.postdate}</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Api4
// http://firstenquiry.com/api/react/sale/allproduct.php
// http://firstenquiry.com/api/react/sale/catlist.php
// http://firstenquiry.com/api/react/sale/orderlist.php
// http://firstenquiry.com/api/react/store/orderlist.php
// http://firstenquiry.com/api/react/store/allproduct.php
// http://firstenquiry.com/api/react/todaycall.php
