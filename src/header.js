import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return (
        <nav>
            <Link to="/" className="menu"> <i className="fa fa-home" />Home </Link>
            {/* <Link to="/user" className="menu"> User </Link>
            <Link to="/item" className="menu"> Item </Link>
            <Link to="/product" className="menu"> Product </Link>
            <Link to="/vendor" className="menu"> Vendor </Link>
            <Link to="/city" className="menu"> City </Link> */}
            {/*<Link to="/state-one" className="menu"> State - 1 </Link>*/}
            {/*<Link to="/state-two" className="menu"> State - 2 </Link>*/}
            {/*<Link to="/state-three" className="menu"> State - 3 </Link>*/}
            {/* <Link to="/state-four" className="menu"> State - 4 </Link>
            <Link to="/state-five" className="menu"> State - 5 </Link> */}
            {/*<Link to="/state-six" className="menu"> State - 6 </Link>*/}
            {/*<Link to="/ApiOne" className="menu"> API-1 </Link>*/}
            {/*<Link to="/ApiTwo" className="menu"> API-2 </Link>*/}
            {/*<Link to="/ApiThree" className="menu"> API-3 </Link>*/}
            {/*<Link to="/ApiEOne" className="menu"> API-E1 </Link>*/}
            {/*<Link to="/ApiETwo" className="menu">API-E2</Link>*/}
            {/*<Link to="/car" className="menu">Car</Link>*/}
            {/*<Link to="/ApiFour" className="menu">Api4</Link>*/}
            {/*<Link to="/ApiTen" className="menu"> API-10 </Link>*/}
            {/* <Link to="/MyUser" className="menu"> Myuser </Link>
            <Link to="/Mypropsjson" className="menu"> Myuser2 </Link>
            <Link to="/Profile" className="menu"> Profile </Link> */}
            <Link to="/Myaccoun" className="menu"> Myaccount </Link>
            <Link to="/LifeCycle" className="menu"> LifeCycle </Link>
            <Link to="/Hook1" className="menu"> Hook1 </Link>
            <Link to="/Hook2" className="menu"> Hook2 </Link>
            <Link to="/Hook3" className="menu"> Hook3 </Link>
            <Link to="/0/Hook4" className="menu"> Hook4 </Link>
            <Link to="/Hook5" className="menu"> Hook5 </Link>
        </nav>
    );
}

export default Header;