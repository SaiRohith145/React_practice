import React, { Component } from 'react'

class ApiThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             citylist:[]
        }
    }
    getCity=()=>{
        fetch("http://firstenquiry.com/api/react/live/allcity.php")
        .then(response => response.json())
        .then(result => this.setState({citylist:result}))
    }
    componentDidMount(){
        this.getCity();
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>{this.state.citylist.length} - Available Employee </h3>

                    </div>
                </div>
                <div className="row">
                    {
                        this.state.citylist.map((xcity,index)=>{
                            return(
                                <div className="col-lg-3  form-group" key={index}>
                                    <p className="border p-3">{xcity.name}</p>
                                </div>
                            )
                        })
                    }

                </div>
                
            </div>
        )
    }
}

export default ApiThree;
/*http://firstenquiry.com/api/react/live/allservice.php*/
/*http://firstenquiry.com/api/react/live/alledu.php*/
