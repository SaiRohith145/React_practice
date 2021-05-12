import React,{useState} from 'react';

const Hook3 = ()=>{
const [itemlist,updateItem]=useState([{name:'Apple',price:200,qty:5}]);
const [update,updateObj]=useState({name:'',price:0,qty:0})
const [message,upmessage]=useState('')
const add=()=>{   
    updateItem([...itemlist,update])
    document.getElementById("name").value='';
        document.getElementById("price").value=null;
        document.getElementById("qty").value=null;
    upmessage(`${update.name} added successfully `)
}
const del = (index) => {
    
    itemlist.splice(index,1);
    updateItem([...itemlist]);
    upmessage(`removed successfully `)

}
return(
    <div className="container">
        <div className="row mt-3">
            <div className="col-lg-3">
                <div className="form-group">
                    <h2>Add Item</h2>
                    <label>Enter the Name</label>
                    <input type='text' id="name" className="form-control"
                    onChange={obj =>{ updateObj({...update,name:obj.target.value})}}/>
                    <label>Enter the Price</label>
                    <input type='number' id="price" className="form-control"
                    onChange={obj =>{ updateObj({...update,price:obj.target.value})}}/>
                    <label>Enter the Qty</label>
                    <input type='number' id="qty" className="form-control"
                    onChange={obj =>{ updateObj({...update,qty:obj.target.value})}}/>
                    <button className="btn btn-primary btn-block mt-3" onClick={add}>submit</button>
                    <h3 className="text-success">{message}</h3>
                </div>
            </div>
            <div className="col-lg-9">
                <h4 className="text-center text-danger">
                    Available Item : {itemlist.length}
                </h4>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Item NO</th>
                            <th>tem Price</th>
                            <th>Item Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        itemlist.map((x,i)=>
                        {
                         return(  <tr key={i}> 
                             <td>{i+1}</td>
                             <td>{x.name}</td>
                             <td> {x.price}</td>
                             <td> {x.qty} </td>
                             <td><button className="btn btn-danger ml-3" onClick={()=>del(i)}>Remove</button></td>
                             </tr>)
                        }
                        )
                    }
                    </tbody>
                    </table>
            </div>
        </div>

    </div>
)
}
export default Hook3;