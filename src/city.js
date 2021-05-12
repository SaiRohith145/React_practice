import React,{Component} from 'react';

class Mycity extends Component{
    citylist=[];
    constructor(){
        super();
        this.citylist=["Bangalore","Puna","Delhi","Chennai","Kolkata"];
    }
    render(){
        return (
            <div className="text-center">
                <h1 className="text-danger">Available City : {this.citylist.length}</h1>
                {
                    this.citylist.map(xcity=>{
                        return (
                            <p key={xcity}>{xcity}</p>
                            );
                    })
                }
            </div>
        );
    }

}

export default Mycity;