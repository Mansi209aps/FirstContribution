import React from 'react'

function Signup(props) {
    const signup = props.Signup;
    return (
        <div className='position-absolute top-50 start-50 translate-middle border border-black'>
            <div className='m-4'>
                <div className="input-group">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
            </div>
            <div className='mt-1 mb-4'>
                <div className="form-check form-check-inline ml-4 ">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                </div>
                <div className="form-check form-check-inline ml-4">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                </div>
            </div>
            <div className="m-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className='m-4'>
                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock" />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <button className="btn btn-primary m-4 btn-lg p-2">
                    {/* <Link to="/signup"> */}
                    <div className="text-white pr-2">SignUp</div>
                    {/* </Link> */}
                </button>
            </div>
        </div>

    )
}

export default Signup;