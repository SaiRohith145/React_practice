
import React,{Component, component} from 'react';

class StateTwo extends Component{
    constructor(){
        super();
        this.state={
            name:"Mumbai",
            city:["Puna","Chennai"]
            
        }
    }
    updateName=(object)=>{
       this.setState({
           name:object.target.value
       })
    }
    addcity=()=>{
        
        this.setState({
            city:this.state.city.concat(this.state.name),
            name:''
        })
    }
    render(){
        //alert("render() called update the dom")
        return(
            <div className="text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>setState() Example</h2>
                    </div>
                    <div className="col-lg-6">
                        <label>Enter New Name</label>
                        <input type="text" className="form-control" value={this.state.name} 
                        onChange={this.updateName}/>
                        <button className="btn btn-primary m-3" onClick={this.addcity}>Add To List</button>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-success mt-3">{this.state.name}</h3>
                        
                    </div>
                </div>
                    <div className="row mt-4">
                        {
                            this.state.city.map((x,i)=>{
                               return(
                                <div className="col-lg-2"> 
                               <p key={i}> {i+1}.{x} </p>
                               </div>);

                            })
                        }


                    </div>
                

            </div>
        );

    }
}
export default StateTwo;