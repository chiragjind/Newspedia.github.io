import React from 'react';

function Signin() {
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
                    <a href="/Login"> <button type="button" className="btn btn-outline-dark mybtn formbtn">Already Customer</button></a>
                  </div>
                  <h1 className="formtitle">Employee Registration Form</h1>
                  <form action="/userschema" method="post">
                    <div className="row inputfield">
                      <div className="col-6 leftfield">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-signature"></i></span>
                          <input type="text" autoComplete="off" name="Username" minLength="4" className="form-control" placeholder="Username" required aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-at"></i></span>
                          <input type="email" name="Email" autoComplete="off" minLength="4" className="form-control" placeholder="Email" required aria-label="Recipient's Email" aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-phone"></i></span>
                          <input required pattern=".{10}" autoComplete="off" type="tel" name="Phonenumber" minLength="10" className="form-control" placeholder="Phonenumber" aria-label="phonenumber" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-lock"></i></span>
                          <input required autoComplete="off" type="password" name="Password" minLength="8" className="form-control" placeholder="Password*" aria-label="password" aria-describedby="basic-addon1" />
                        </div>
                      </div>
                      <div className="col-6 rightfield">
                        <div className="input-group mb-3">
                          <input required autoComplete="off" type="text" name="Lastname" minLength="4" className="form-control" placeholder="Lastname" aria-label="lastname" aria-describedby="basic-addon1" />
                        </div>
                        <div className="radiobtn d-flex mb-4 mt-4">
                          <div className="form-check me-5 fs-2">
                            <input className="form-check-input me-2" name="Gender" type="radio" id="flexRadioDefault1" value="male" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                              Male
                            </label>
                          </div>
                          <div className="form-check fs-2">
                            <input className="form-check-input me-2" name="Gender" type="radio" id="flexRadioDefault2" value="Female" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                              Female
                            </label>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1"><i className="fa-brands fa-pagelines"></i></span>
                          <input required autoComplete="off" type="number" name="Age" className="form-control" placeholder="Age" aria-label="Age" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                          <input required autoComplete="off" minLength="8" type="password" className="form-control" name="ConfirmPassword" placeholder="Confirm Password*" aria-label="cpassword" aria-describedby="basic-addon1" />
                        </div>
                      </div>
                    </div>
                    <input type="submit" className="btn btn-dark mybtn align-self-end" value="Go to Home" />
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

export default Signin;
