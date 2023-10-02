import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="container-fluid centercontainer">
        <div className="row">
          <div className="col-md-11 col-12 m-auto second_part">
            <div className="row">
              <div className="col-md-4 col-12 m-auto left_side">
                <div className="leftside_info">
                  <i className="fa-solid fa-shuttle-space fa-rotate-270 fa-2xl rocketlogo" style={{ lineHeight: 2, fontSize: '70px' }}></i>
                  <h1>Welcome</h1>
                  <p>to the complete <span> MERN</span></p>
                  <h2>Backend course</h2>
                </div>
              </div>
              <div className="col-md-8 col-12 m-auto right_side">
                <div className="rightside_info">
                  <div className="formbtns d-flex p-2 align-self-end mb-3">
                    <Link to="/Signin"> <button type="button" className="btn btn-outline-dark mybtn formbtn">Sign up here</button></Link>
                  </div>
                  <h1 className="formtitle">Welcome Again</h1>
                  <form action="/login" method="post">
                    <div className="row inputfield ">
                      <div className="col-6 leftfield ">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-at"></i></span>
                          <input type="email" name="lEmail" autoComplete="off" minLength="4" className="form-control" placeholder="Email" required aria-label="Recipient's Email" aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                          <input required autoComplete="off" type="password" name="lPassword" minLength="8" className="form-control" placeholder="Password*" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                      </div>
                    </div>
                    <input type="submit" className="btn btn-dark mybtn align-self-end " value="go to Home" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
