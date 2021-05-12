import React, { Component } from 'react'

class StateSix extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ItemList:[{name:'Rohit',contact_no:'1231321',age:'21',city:'Bangalore',pincode:'342421'}],
            newname:'',
            newcontact:'',
            newage:'',
            newcity:'',
            newpincode:''
             
        }
    }
    processName=(obj)=>{
        this.setState({
            newname:obj.target.value,
            

        })
     }
    processCon=(obj)=>{
        this.setState({
            newcontact:obj.target.value,
            

        })
     }
    processAge=(obj)=>{
        this.setState({
            newage:obj.target.value,
           

        })
     }
    processCity=(obj)=>{
        this.setState({
            newcity:obj.target.value,
            

        })
     }
    processPin=(obj)=>{
        this.setState({
            newpincode:obj.target.value,
            

        })
     }
     saveitem=()=>{
        let newitem ={
             name:this.state.newname,
             contact_no:this.state.newcontact,
             age:this.state.newage,
             city:this.state.newcity,
             pincode:this.state.newpincode
           
            
        };
        this.setState({
            ItemList:this.state.ItemList.concat(newitem),
            newname:'',
            newcontact:'',
            newage:'',
            newcity:'-------',
            newpincode:''
        })
    }
    deleteitem=(index)=>{
        this.state.ItemList.splice(index,1)
        this.setState({
        ItemList:this.state.ItemList,
        
        })
    }
    
    render() {
        return (
            <div className="container-fluid text-center">
                <h1>Manage User</h1>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className="bg-primary">Name</th>
                                <th className="bg-primary">Contact_no</th>
                                <th className="bg-primary">Age</th>
                                <th className="bg-primary">City</th>
                                <th className="bg-primary">Pincode</th>
                                
                            </tr>
                            <tr>
                                <th><input type="text" onChange={this.processName} value={this.state.newname}/></th>
                                <th><input type="number" onChange={this.processCon} value={this.state.newcontact}/></th>
                                <th><input type="number" onChange={this.processAge} value={this.state.newage}/></th>
                                <th><select onChange={this.processCity} value={this.state.newcity}>
                                    <option value=" ">-------</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Puna">Puna</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Mumbai">Mumbai</option>
                                    </select></th>
                                <th><input type="number" onChange={this.processPin} value={this.state.newpincode}/><button className="btn btn-primary ml-1" onClick={this.saveitem}>Save</button></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.ItemList.map((xitem,itemindex)=>{
                                
                            return(<tr>
                            
                            <td>{xitem.name}</td>
                            <td>{xitem.contact_no}</td>
                            <td>{xitem.age}</td>
                            <td>{xitem.city}</td>
                            <td>{xitem.pincode}<button className="btn btn-danger ml-1" onClick={this.deleteitem.bind(this,itemindex)}>delete</button></td>
                            

                            </tr>);
                                })
                        }

                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default StateSix;
