import React ,{ Component } from 'react';
import axios from 'axios';
class Myaccount extends Component{
    constructor(){
        super();
        this.state={
            alluser:[],
            user:[]
            
        }
    }

    getUser = () =>{
        axios.get("myaccount.json").then(response=>{
            this.setState({
                alluser:response.data

            })
        })
    }
    getpos=()=>{
        fetch("http://firstenquiry.com/api/react/dashboard.php")
        .then(response=>response.json())
        .then(result=>this.setState({user:result}))
    }
    componentDidMount(){
        this.getUser();
        this.getpos();
    }

    render(){
        
        return(
            <div className="container">
            <h1 className="text-center"> Total Accounts : {this.state.alluser.length} </h1>
            <div>
                {this.state.user.customer}
                <br/>
                {this.state.user.followup}
                <br/>
                {this.state.user.interested}
            </div>
            <div className="">
                {
                this.state.alluser.map((xuser,index)=>{
                    return(
                        <div className="row border-bottom form-group pb-3 " key={index}>
                            <div className="col-lg-3">
                            <div className="p-3 bg-light">
                            <h4>Basic Information</h4>
                            <p>Name-{xuser.personal[0].name}</p>
                            <p>gender-{xuser.personal[0].gender}</p>
                            <p>age-{xuser.personal[0].age}</p>
                            <p>exp-{xuser.personal[0].exp}</p>
                            </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="p-3 bg-info">
                            <h4>Contact Information</h4>
                            <p>mobile-{xuser.contact[0].mobile}</p>
                            <p>gender-{xuser.contact[0].email}</p>
                            <p>age-{xuser.contact[0].city}</p>
                            <p>exp-{xuser.contact[0].address}</p>
                            </div>
                            </div>
                            <div className="col-lg-5">
                                <h4>About Education and Training</h4>
                                <table className="table table-bordered table-sm">
                                    <thead>
                                        <tr>
                                            <th>Education</th>
                                            <th>city</th>
                                            <th>passing</th>
                                            <th>Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            xuser.education.map((edu,index)=>{
                                                return(
                                                    <tr key={index*100}>
                                                        <td>{edu.board}</td>
                                                        <td>{edu.city}</td>
                                                        <td>{edu.year}</td>
                                                        <td>{edu.marks}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    )
                })
                
                
                
                
                
                
                
                /* {
                 this.state.alluser.map(xuser=>
                     <div className="">
                         {
                             
                             xuser.personal.map(n=>
                                <div>{n.name}
                                <ul>
                                <li>{n.gender}</li>
                                <li>{n.age}</li>
                                <li>{n.exp}</li>
                                </ul>
                                <br/>
                                </div>
                                )
                                
                                
                                
                         }
                         {
                             xuser.contact.map(c=>
                                <div>{c.mobile}
                            <ul>
                            <li>{c.email}</li>
                            <li>{c.city}</li>
                            
                            </ul>
                            <br/>
                            </div>
                            )
                         }
                         {
                             xuser.education.map((e,i)=>
                             <div>
                                 {e.board} {e.year} {e.city} {e.marks}
                             </div>
                                
                             )
                         }
                         
                     </div>

                 )   
                } */}
            </div>
            </div>
        )
    }
}

export default Myaccount;