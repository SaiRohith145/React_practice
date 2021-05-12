import React,{Component, component} from 'react';

class StateThree extends Component{
    constructor(){
        super();
        this.state={
            
            newcustomer:'Ravi',
            customerlist:["Ramesh","Ganesh"],
            message:''
            
        }
    }
    save=()=>{
        this.setState({
            customerlist:this.state.customerlist.concat(this.state.newcustomer),
            message:`${this.state.newcustomer} Added in the list`,
            newcustomer:''
        })
    }
    processName=(obj)=>{
        this.setState({
            newcustomer:obj.target.value
        })
    }
    
    
    render(){
        
        return(
            
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1>State Management</h1>
                                <p>{this.state.message}</p>
                            </div>
                            <div className="col-lg-6">
                                <label>Enter Customer Name</label>
                                <input type="text"
                                className="form-control"
                                onChange={this.processName}
                                value={this.state.newcustomer}
                                />
                                <button onClick={this.save} className="btn btn-primary"> Add customer </button>
                            </div>
                            <div className="col-lg-6">
                                <h4>Customer List</h4>
                                {
                                    this.state.customerlist.map((customer,index)=>{
                                        return(
                                            <p key={index}>{customer}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>
                

            
        );

    }
}
export default StateThree;