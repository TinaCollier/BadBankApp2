import Nav from './navbar';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw'
import AllData from './pages/alldata';
import CreateAccount from './pages/createaccount';
import Home from './pages/home'
import {
    HashRouter,
    Route
} from 'react-router-dom';
import { UserContext } from './context';


import './App.css';
function App(){
    return (
        
        <HashRouter>
            <Nav />
            <UserContext.Provider value={{ name:'tina', email:'tina@mit.edu', password:'secret', balance:100 }}>
                <Route path="/" exact           component={ Home }          />
                <Route path="/createaccount/"   component={ CreateAccount } />
                <Route path="/deposit/"         component={ Deposit }       />
                <Route path="/withdraw/"        component={ Withdraw }      />
                <Route path="/alldata/"         component={ AllData }       />
            </UserContext.Provider>
        </HashRouter>
        
    );
}

export default App;