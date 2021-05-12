import React ,{Component} from 'react';
class UserList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="col-lg-4 form-group">
                <div className="p-3 border">
                    <h5>{this.props.fullname}</h5>
                    <p>Mobile No - {this.props.mobileno}</p>
                    <p>Age - {this.props.age}</p>
                    <p> 
                        {
                            this.props.hobbie.map(xhobbie=>{
                                return(
                                    <small> {xhobbie} , </small>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        )
    }

}
export default UserList;