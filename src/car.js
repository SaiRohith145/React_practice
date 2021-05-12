import React, { Component } from 'react'

class Car extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             carlist:[]
        }
    }
    getCar=()=>{
        fetch("http://firstenquiry.com/api/car.php")
        .then(response=>response.json())
        .then(result=>this.setState({carlist:result}))
    }
    componentDidMount(){
        this.getCar();
    }
    
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4> JSON data from server using fetch </h4>
                        <h3 className="text-success">Available Cars :- {this.state.carlist.length}</h3>
                    </div>
                </div>
                {
                    this.state.carlist.map((xcar,index)=>{
                        return(
                            <div className="row mb-3 border-bottom" key={index}>
                                <div className="col-lg-4">
                                    <h4>{xcar.model}</h4>
                                    <p>price:{xcar.price}</p>
                                    <p>varsion:{xcar.version}</p>
                                </div>
                                <div className="col-lg-4">
                                    <img height="200" width="100%" src={`http://firstenquiry.com/api/img/${xcar.image}`}/>
                                </div>
                                <div className="col-lg-4">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr className="bg-light text-danger text-center">
                                                <th>SL NO</th>
                                                <th>Service Date</th>
                                                <th>Service Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                xcar.serviceHistory.map((service,index)=>{
                                                return(
                                                    <tr className="text-center text-info" key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{service.serviceDate}</td>
                                                        <td>{service.serviceCost}</td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default Car;
