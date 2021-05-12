import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Myuser from './user.js';
import Myproduct from './product.js'
import Myvendor from './vendor.js';
import Mycity from './city.js';
import Myitem from './item.js';
import Header from './header.js';
import StateOne from './state1.js';
import StateTwo from './state2.js';
import StateThree from './state3.js';
import StateFour from './state4';
import StateFive from './state5';
import StateSix from './state6';
import ApiOne from './api1';
import ApiTwo from './api2';
import ApiThree from './api3';
import ApiEOne from './api_e1';
import ApiETwo from './api_e2';
import Car from './car';
import ApiFour from './api4';
import ApiTen from './crud';
import MyUser from './myuser';
import Mypropsjson from './myuser2';
import Profile from './profile';
import Myaccount from './myaccount';
import LifeCycle from './lifecycle';
import Hook1 from './hook1';
import Hook2 from './hook2';
import Hook3 from './hook3';
import Hook4 from './hook4';
import Hook5 from './hook5';


function App() {
  return (
            <div>
              <HashRouter>
                <Header/>
                
                <Route exact path="/" component={Myuser}/>
                <Route exact path="/user" component={Myuser}/>
                <Route exact path="/product" component={Myproduct}/>
                <Route exact path="/vendor" component={Myvendor}/>
                <Route exact path="/city" component={Mycity}/>
                <Route exact path="/item" component={Myitem}/>
                <Route exact path="/state-one" component={StateOne}/>
                <Route exact path="/state-two" component={StateTwo}/>
                <Route exact path="/state-three" component={StateThree}/>
                <Route exact path="/state-four" component={StateFour}/>
                <Route exact path="/state-five" component={StateFive}/>
                <Route exact path="/state-six" component={StateSix}/>
                <Route exact path="/ApiOne" component={ApiOne}/>
                <Route exact path="/ApiTwo" component={ApiTwo}/>
                <Route exact path="/ApiThree" component={ApiThree}/>
                <Route exact path="/ApiEOne" component={ApiEOne}/>
                <Route exact path="/ApiETwo" component={ApiETwo}/>
                <Route exact path="/car" component={Car}/>
                <Route exact path="/ApiFour" component={ApiFour}/>
                <Route exact path="/ApiTen" component={ApiTen}/>
                <Route exact path="/MyUser" component={MyUser}/>
                <Route exact path="/Mypropsjson" component={Mypropsjson}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Myaccount" component={Myaccount}/>
                <Route exact path="/LifeCycle" component={LifeCycle}/>
                <Route exact path="/Hook1" component={Hook1}/>
                <Route exact path="/Hook2" component={Hook2}/>
                <Route exact path="/Hook3" component={Hook3}/>
                <Route exact path="/:userid/Hook4" component={Hook4}/>
                <Route exact path="/Hook5" component={Hook5}/>

              </HashRouter>
            </div>
          );
}

export default App;
