import React, {Component} from 'react';
class StateFour extends Component{

    constructor(){
        super();
        this.state = {
            itemlist:[ {name:"Apple" , price:200, qty:5} ],
            newname:'',
            newprice:0,
            newqty:0

        }
    }
    processName=(obj)=>{
        this.setState({
            newname:obj.target.value
        })
    }
    processPrice=(obj)=>{
        this.setState({
            newprice:obj.target.value
        })
    }
    processQty=(obj)=>{
        this.setState({
            newqty:obj.target.value
        })
    }
    saveitem=()=>{
        let newitem={
            name:this.state.newname,
            price:this.state.newprice,
            qty:this.state.newqty
        };
        this.setState({
            itemlist:this.state.itemlist.concat(newitem)
        })
    }

    render(){
        return(
            <div className="container mt-4">
                <div class="row mt-2">
                    <div className="col-lg-3">
                        <label>Enter Item Name</label>
                        <input type="text" className="form-control" onChange={this.processName}/>
                    </div>
                    <div className="col-lg-3">
                        <label>Enter Item Price</label>
                        <input type="number" className="form-control" onChange={this.processPrice}/>
                    </div>
                    <div className="col-lg-3">
                        <label>Enter Item Qty</label>
                        <input type="number" className="form-control" onChange={this.processQty}/>
                    </div>
                    <div className="col-lg-3 pt-4">
                        <button className="btn btn-primary" onClick={this.saveitem}>Save Item</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <h3> State Management For ML Array in ReactJs</h3>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr className="bg-light text-primary">
                                    <td>Item No</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.itemlist.map((xitem , index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{xitem.name}</td>
                                                <td>{xitem.price}</td>
                                                <td>{xitem.price * xitem.qty}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default StateFour;