import Nav from './pages/navbar';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw'
import AllData from './pages/alldata';
import CreateAccount from './pages/createaccount';
import Home from './pages/home'
import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from './context';


import './App.css';
function App(){
    return (
        <div className="Container">
            <HashRouter>
                <Nav />
                <Routes>
                
                    <Route path="/home" exact           element={ <Home /> }          />
                    <Route path="/createaccount/"   element={ <CreateAccount /> } />
                    <Route path="/deposit/"         element={ <Deposit /> }       />
                    <Route path="/withdraw/"        element={ <Withdraw /> }      />
                    <Route path="/alldata/"         element={ <AllData /> }       />
                
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;