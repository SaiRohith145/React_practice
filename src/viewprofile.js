import React ,{ Component } from 'react';

class Viewprofile extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //console.log("hello views " + this.props.hobbie);
    }

    render(){
        if(this.props.name){
        return(
            <div className="card">
                <div className="card-header bg-warning text-success">
                    <b>About - {this.props.name} </b>
                </div>
                <div className="card-body">
                    <p>Full Name : {this.props.name} </p>
                    <p>Age :       {this.props.age} </p>
                    <p>Hobbies :   
                            {
                                this.props.hobbie.map((x,i)=>{
                                    return( 
                                        <label key={i}> {x} , </label>
                                        
                                    )
                                })
                            } 
                    </p>
                    <p>Mobile No : {this.props.mobile} </p>
                </div>
                <div className="card-footer"></div>
            </div>
        )
    }
    else{
        return(
            <h3 className="text-center text-danger mt-5 pt-5">Click on User Name</h3>
        )
    }// else end
  } // render end
} // class end

export default Viewprofile;
