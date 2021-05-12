import React,{Component} from 'react';

class LifeCycle2 extends Component{
    constructor(){
        super();
        console.log('B constructor');
        this.state={
            counter:5,
            message:''
        }

    }
    static getDerivedStateFromProps(){
        console.log('B getDerivedStateFromProps');
        return true;
    }
    componentDidMount(){
        console.log('B ComponentDidMount');
    }
    one = () =>{
        this.setState({
            counter:this.state.counter+1
        })

    }
    shouldComponentUpdate(){
        console.log("B shouldcomponentupdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("B getsnapshortbeforeupdate");
        return null;
    }
    componentWillUnmount(){
        alert("B componentwillUnmount");
    }

    componentDidUpdate(){
        console.log("B componentDidUpdate");
    }

    render(){
        console.log('B render')
        return(
            <div className="conatiner mt-3">
        <h1>Life Cycle Two is Working </h1>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="text-danger">{this.state.counter}</h2>
                <button onClick={this.one} className="btn btn-primary m-3">the {this.state.counter}</button>
            </div>
        </div>

        </div>
        )
    }
}

export default LifeCycle2;