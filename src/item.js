import React,{Component} from 'react';

class Myitem extends Component{
    itemlist=[];
    constructor(){
        super();
        this.itemlist=[
            {name:"Mobile",price:2000,qty:5},
            {name:"Mango",price:200,qty:3},
            {name:"Water",price:40,qty:2},
            {name:"Mouse",price:300,qty:1},
            {name:"Milk",price:23,qty:4},
        ];

    }
    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-center">{this.itemlist.length} Available Items</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Item No</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Item Quantity</th>
                                    <th>Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.itemlist.map((xitem,itemindex)=>{
                                        
                                        return(<tr>
                                                <td>{itemindex}</td>
                                                <td>{xitem.name}</td>
                                                <td>{xitem.price}</td>
                                                <td>{xitem.qty}</td>
                                                <td>{xitem.qty*xitem.price}</td>
                                                

                                                </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        );
    }
}



export default Myitem;