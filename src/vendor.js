import React,{Component} from 'react';

class Myvendor extends Component{

    constructor(){
        super();
        this.state={
            name:'khan',
            email:'enter the email',
            phone:'0000000000',
            city:'Bang'

        }
    }
    processName=(obj)=>{
        this.setState({
            name:obj.target.value
        })
    }
    processEmail=(obj)=>{
        this.setState({
            email:obj.target.value
        })
    }
    processPhone=(obj)=>{
        this.setState({
            phone:obj.target.value
        })
    }
    processCity=(obj)=>{
        this.setState({
            city:obj.target.value
        })
    }



    render(){
        return (
            <div>
                <h1 className="text-center">Vender List</h1>
                <table align="center">
                    <tr>
                        <td>Enter Name <input type="text" onChange={this.processName}/></td>
                        <td>Your Name is - {this.state.name}</td>
                    </tr>
                    <tr>
                        <td>Enter Email <input type="email" onChange={this.processEmail}/></td>
                        <td>Your Email is - {this.state.email}</td>
                    </tr>
                    <tr>
                        <td>Enter Phone <input type="number" onChange={this.processPhone}/></td>
                        <td>Your Phone is - {this.state.phone}</td>
                    </tr>
                    <tr>
                        <td>Select city <select onChange={this.processCity}>
                            <option value="bangalore">bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            </select>
                        </td>
                        <td>Your Phone is - {this.state.city}</td>
                    </tr>

                </table>
            </div>
        );
    }
}




export default Myvendor;