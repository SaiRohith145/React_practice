import React , {Component} from 'react';
import axios from 'axios';
import Viewprofile from './viewprofile';

class Profile extends Component{
    constructor(){
        super();
        this.state={
            alluser:[],
            aboutuser:[]
        }
    }
    getUser = () =>{
        axios.get("user3.json").then(response=>{
            this.setState({
                alluser:response.data,
                aboutuser:response.data[0]
            })
        })
    }
    componentDidMount(){
        this.getUser();
    }

    getInfo = (index) =>{
        this.setState({
            aboutuser:this.state.alluser[index]
        })
        console.log(this.state.alluser[index]);
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Props Example Based on Events</h3>
                    </div>

                    <div className="col-lg-3">
                        {
                            this.state.alluser.map((xuser , index)=>{
                                return(
                                        <button className="btn btn-primary btn-block m-2" 
                                                key={index} 
                                                onClick={this.getInfo.bind(this,index)}> 
                                                {xuser.name} 
                                        </button>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-9">
                        <Viewprofile
                            name={this.state.aboutuser.name}
                            mobile={this.state.aboutuser.mobile}
                            age={this.state.aboutuser.age}
                            hobbie={this.state.aboutuser.hobbie}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;