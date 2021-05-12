import React, { Component } from 'react'

 class StateFive extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             itemlist:[{name:"Apple",price:200}],
             message:'',
             newname:'',
             newprice:''
              
         }
     }
     processName=(obj)=>{
        this.setState({
            newname:obj.target.value,
            message:'Hi, you are typing - '+obj.target.value

        })
     }
     processPrice=(obj)=>{
        this.setState({
            newprice:obj.target.value,
            message:'Hi, you are typing - '+obj.target.value
        })
     }
     saveitem=()=>{
         let newitem ={
              name:this.state.newname,
              price:this.state.newprice
            
             
         };
         this.setState({
             itemlist:this.state.itemlist.concat(newitem),
             message:`${this.state.newname} and ${this.state.newprice} is added`,
             newname:'',
             newprice:''
         })

     }
     deleteitem=(index)=>{
         this.state.itemlist.splice(index,1)
         this.setState({
             itemlist:this.state.itemlist,
             message:`item deleted`

         })
     }


     
    render() {
        return (
            <div className="container mt-3">
                <div className="row mt-3 border-bottom pb-3">
                    <div className="col-lg-4 text-center">
                        <h3 className="text-success"> Add New Element </h3>
                        <p>{this.state.message}</p>
                    </div>
                    <div className="col-lg-3 text-center">
                        <label>Enter Name</label>
                        <input type="text" className="form-control" onChange={this.processName} value={this.state.newname}/>

                    </div>
                    <div className="col-lg-3 text-center">
                        <label>Enter price</label>
                        <input type="number" className="form-control" onChange={this.processPrice} value={this.state.newprice}/>
                    </div>
                    <div className="col-lg-2 text-center pt-4">
                        <button className="btn btn-primary btn-block" onClick={this.saveitem}>Save</button>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    {
                        this.state.itemlist.map((xitem,itemindex)=>{
                            return(
                                <div className="col-lg-3 form-group" key={itemindex}>
                                    <div className="p-3 border">
                                    <p>{xitem.name},Rs. {xitem.price}</p>
                                    <hr/>
                                    <button className="btn btn-danger btn-sm" onClick={this.deleteitem.bind(this,itemindex)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        )
    }
}
export default StateFive;
