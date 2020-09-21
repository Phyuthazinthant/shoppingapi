import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect }from 'react-router-dom'
import Signin from './features/signin/component/Signin';
function Approutes(){
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/'><Redirect to="/Signin" /></Route>  
                    <Route path="/Signin" render={()=><Signin />} />
                    </Switch>
                </Router>

        </div>
    );
}
export default Approutes;