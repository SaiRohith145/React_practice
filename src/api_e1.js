import React , {Component} from 'react';

class ApiEOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             edulist:[]
        }
    }
    getEdu=()=>{
        fetch("http://firstenquiry.com/api/react/live/alledu.php")
        .then(response=>response.json())
        .then(result=>this.setState({edulist:result}))
    }
    componentDidMount(){
        this.getEdu();
    }    
    
    render(){
        return(
            <div className="container">
                <h1 className="text-center">Tech Training - {this.state.edulist.length}</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Program</th>
                            <th>Available</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            this.state.edulist.reverse().map((xedu,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{xedu.id}</td>
                                        <td>{xedu.course_name}</td>
                                        <td>{xedu.active}</td>
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
export default ApiEOne;

