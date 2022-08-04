import CreateAccount from "./createaccount";

function Nav(){
    return(
        <nav className="navbar navbar-dark bg-transparent">
            <div className="container-fluid">
                <ul className="nav">

                    <li className="nav-item">
                        <a className="nav-link" href="#/home/">Bad Bank</a>
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
    );
}



export default Nav;