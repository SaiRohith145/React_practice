import React,{Component} from 'react'

class ApiETwo extends Component{
    constructor(){
        super();
        this.state={
            service:[]
        }
    }
    getser=()=>{
        
            fetch("http://firstenquiry.com/api/react/live/allservice.php")
            .then(response=>response.json())
            .then(result=>this.setState({service:result}))

        
    }
    componentDidMount(){
        this.getser();
    }
    render(){
        return(
            <div className="container-fluid">
                <h1 className="text-center">Total Services are Available :- {this.state.service.length}</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Seoname</th>
                            <th>Active</th>
                            <th>Displayhome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.service.map((xserv,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{xserv.id}</th>
                                        <th>{xserv.name}</th>
                                        <th>{xserv.seoname}</th>
                                        <th>{xserv.active}</th>
                                        <th>{xserv.displayhome}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            
        )
    }
}

export default ApiETwo;