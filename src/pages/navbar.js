import CreateAccount from "./createaccount";

function Nav(){
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="nav nav-pills">

                    <li className="nav-item" >
                        
                        <a className="nav-link" id="icon" href="#/home/" ><img 
                        src="palmtreeicon.png" alt="" width="30" height="24" />Bad Bank</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/createaccount/">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/deposit/">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/withdraw/">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/alldata/">All Data</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
}



export default Nav;