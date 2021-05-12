import React,{Component} from 'react';

class Myproduct extends Component{
    constructor(){
        super();
        this.state={
            itemlist:["Apple","Mobile","Milk"],
            newitem:''
        }

    }
    processItem=(obj)=>{
        this.setState({
            newitem:obj.target.value
            
        
    })
    }
    addItem=()=>{
        this.setState({
            
            itemlist:this.state.itemlist.concat(this.state.newitem),
            newitem:''
        
    })
    }

    
    deleteItem=(itemindex)=>{
        alert(`Item ${itemindex+1} is removing!`);
        this.state.itemlist.splice(itemindex,1)
        this.setState({
            itemlist:this.state.itemlist
        })
        
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-3">
                        <h3>Add Item</h3>
                        <input type="text" className="form-control" onChange={this.processItem} value={this.state.newitem}/>
                        <button className="btn btn-primary mt-3" onClick={this.addItem}>Save Item</button>

                    </div>
                    <div className="col-lg-6">
                        <h2>Item List</h2>
                        <table className="table table-border">
                            <thead>
                                <tr>
                                    <th>Item Index</th>
                                    <th>Item Name</th>
                                    <th>To Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.itemlist.map((myitem,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{myitem}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={this.deleteItem.bind(this,index)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        );
    }
}
export default Myproduct;