import React,{Component, component} from 'react';

class StateOne extends Component{
    constructor(){
        super();
        this.state={
            customer:"Ramesh",
            mobile:9999999999,
            edu:["10th","12th","B.Tech","M.Tech"]
        }
    }
    render(){
        return(
            <div className="text-center">
                <h3>About - {this.state.customer}</h3>
                <h5> His Mobile No - {this.state.mobile}</h5>
                <h5>About Education - {this.state.edu.length} Level</h5>
                {
                    this.state.edu.map((myedu,index)=>{
                        return(
                            <p key={index}> {index+1}.{myedu} </p>
                        );
                    })
                }

            </div>
        );

    }
}
export default StateOne;