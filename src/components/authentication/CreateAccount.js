import React, {Component} from "react"

class CreateAccount extends Component {
    render() {
        return (
            <div className="container">
          <div className="section-one">
                <div className="message">
                  <p>Create an account to get recommended jobs that match your resume and apply to multiple jobs in seconds!</p>
                </div>
              </div>
          
              {/* <!-- the question sectiom --> */}
              <div className="question">
                <p>Are you an Employer? Register Here</p>
              </div>
           
              {/* <!-- sign up options section --> */}
              <div className="signin-options">
                <div className="buttons">
                    <button>Sign up with Google</button>
                    <button>Sign up with Apple</button>
                    <button>Sign up with Facebook</button>
                </div>
              </div>
              
              <div className="divider">
                <div className="dash"></div>
                <div className="or"> <p>or</p> </div>
                <div className="dash"></div>
              </div>
          
              <div className="input-container">
                <div className="input-field" id="input-field">
                  <form className="form">
                  
                    <div className="form-group">
                        <input type="text" id="name" placeholder="Full Name" name="name"
                                required minLength="2" maxLength="100" />
                    </div>

                    <div className="form-group">
                        <input type="tel" id="phone" placeholder="Phone" name="phone"
                               required  maxLength="11" />
                    </div>

                    <div className="form-group">
                        <input type="email" id="email" placeholder="email@address.com" name="email"
                                required />
                    </div>

                    <div className="form-group">
                        <input type="password" id="password1" placeholder="Create Password" 
                                required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Please include at least one uppercase, one lowercase, one number and min of 8 Characters" />
                    </div>

                    <div className="form-group">
                        <input type="password" id="password2" placeholder="Comfirm Password" name="password"
                                required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" />
                    </div>
                    <button className="submit" type="submit">Register</button>
                </form>
                </div>
              </div>
              <div className="rest-password">
                <p>By creating an account, you agree to the Terms of Service</p>
                <p>Already have an account? <span className="alt"> <strong>Log In</strong> </span></p>
              </div>
            </div>
              )
          }
          
    }

export default CreateAccount