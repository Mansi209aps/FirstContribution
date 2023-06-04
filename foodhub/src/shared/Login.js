import React from "react";

function Login(props) {
    const login = props.login;
    return (
        <div className="position-absolute top-50 start-50 translate-middle border border-black">
            <div className="m-5">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="m-5">
                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <button className="btn btn-primary m-4 btn-lg p-2">
                    {/* <Link to="/signup"> */}
                    <div className="text-white pr-2">LogIn</div>
                    {/* </Link> */}
                </button>
            </div>
        </div>
    );
}


export default Login;