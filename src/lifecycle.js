import React,{Component} from 'react';
import LifeCycle2 from './lifecycle2';

class LifeCycle extends Component{
    constructor(){
        super();
        console.log('A constructor');
        this.state={
            counter:5,
            message:'',
            display:true
        }

    }
    static getDerivedStateFromProps(){
        console.log('A getDerivedStateFromProps');
        return true;
    }
    componentDidMount(){
        console.log('A ComponentDidMount');
    }
    one = () =>{
        this.setState({
            counter:this.state.counter+1
        })

    }
    two = () =>{
        this.setState({
            display:!(this.state.display)
        })

    }
    shouldComponentUpdate(){
        console.log("A shouldcomponentupdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("A getsnapshortbeforeupdate");
        return null;
    }
    componentDidUpdate(){
        console.log("A componentDidUpdate");
    }
    componentWillUnmount(){
        alert("A componentwillUnmount");
    }

    render(){
        console.log('A render')
        return(
            <div className="conatiner mt-3">
        <h1>Life Cycle One is Working </h1>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="text-danger">{this.state.counter}</h2>
                <button onClick={this.one} className="btn btn-primary m-3">the {this.state.counter}</button>
                <button onClick={this.two} className="btn btn-primary m-3">the two</button>
                {this.state.display?<LifeCycle2/>:null}
                {this.state.display?"hello":"bye"}
            </div>
        </div>

        </div>
        )
    }
}

export default LifeCycle;
//to convet the any varible into string use this .toString