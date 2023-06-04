import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";


const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg bg-success-subtle">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="d-flex">
                    <button className="btn btn-primary m-2 btn-lg p-2">
                        <Link to="/login">
                            <div className="text-danger pr-2">Login</div>
                        </Link>
                    </button>
                    <button className="btn btn-primary m-2 btn-lg p-2">
                        <Link to="/signup">
                            <div className="text-danger pr-2">SignUp</div>
                        </Link>
                    </button>
                </div>
                {/* <Link to='/' className="btn btn-primary m-2 btn-lg p-2" href="#" role="button">SignUp</Link> */}
            </div>
        </nav>
    );
}

export default Header;