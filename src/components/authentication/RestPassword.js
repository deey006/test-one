import React,  { Component } from "react";

class ResetPassword extends Component {
    render () {
        return (
            <div className="container">
            <div  id='section-one'></div>

            <div className="reset-header">
                <p className="p-one">Reset your password</p>
                <p className="p-two">Enter the email associated with your account and we will <br /> send you instructions to reset your password.</p>
            </div>

            <div className="input-container">
          <div className="input-field" id="input-field">
            <form>
              <div className="form-group">
                {/* <img className="icon" src="./assets/user-icon.svg" alt="" /> */}
                  <input type="email" id="email" placeholder="Enter your email adress" name="email"
                          required />
              </div>
              <button className="submit" type="submit">Submit</button> 
              </form>
              </div>
              </div>
            </div>
        )
    }
}

export default ResetPassword