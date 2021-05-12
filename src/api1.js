import React,{Component} from 'react';
class ApiOne extends Component{
    constructor(){
        //alert("from constructor")
        super();
        this.state={
            userlist:[],
            myuser:[],
            citylist:[]
        }
    }
    getUser=()=>{
        fetch("user.json")
        .then(response=>response.json())
        .then(result=>this.setState({userlist:result}))
    }
    getMyUser=()=>{
        fetch("user2.json")
        .then(response=>response.json())
        .then(result=>this.setState({myuser:result}))
    }
    citylist=()=>{
        fetch("city.json")
        .then(response=>response.json())
        .then(result=>this.setState({citylist:result}))
    }
    componentDidMount(){
        this.getMyUser();
        this.citylist();
        

    }
    render(){
       // alert("from render")
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1> Available Users -:{this.state.userlist.length}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                <button className="btn btn-primary" onClick={this.getUser}>Button</button>
                       {
                           this.state.userlist.map((xuser,index)=>{
                               return(
                                   <p key={index} className="border p-2 text-center">{xuser}</p>
                               )
                           })
                       } 
                    </div>
                    <div className="col-lg-6">
                        <h4> My user Are :{this.state.myuser.length}</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Contact No</th>
                                    <th>City Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.myuser.map((xuser,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{xuser.name}</td>
                                                <td>{xuser.mobile}</td>
                                                <td>{xuser.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 text-center">
                        <h5>City List : {this.state.citylist.length}</h5>
                        {
                           this.state.citylist.map((xcity,index1)=>{
                               return(
                                   <p key={index1} className="border p-2 text-center">{xcity}</p>
                               )
                           })
                       }
                    </div>
                </div>

            </div>
        )
    }
}
export default ApiOne;