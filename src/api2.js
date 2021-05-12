import React, { Component } from 'react'

class ApiTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emplist:[]
        }
    }
    getEmp=()=>{
        fetch("staff.json")
        .then(response => response.json())
        .then(result => this.setState({emplist:result}))
    }
    componentDidMount(){
        this.getEmp();
    }
    
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>{this.state.emplist.length} - Available Employee </h3>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.emplist.map((xemp,index)=>{
                            return(
                                <div className="col-lg-3  form-group" key={index}>
                                    <div className="card">
                                        <div className="card-header bg-info text-white text-center">
                                            {xemp.name}
                                        </div>
                                        <div className="card-body p-0">
                                            <img className="img-fluid" src={xemp.Pic}/>
                                        </div>
                                        <div className="card-footer text-center">
                                            {xemp.edu}
                                        </div>
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

export default ApiTwo;
