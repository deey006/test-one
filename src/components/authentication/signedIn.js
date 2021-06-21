import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signedin extends Component {
//     state = {
//         email: '',
//         password: '',
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]:e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(this.state)
//     }

    render() {
        return (
         <div className="container">
            <div  id='section-one'></div>

         {/* input field section  */}
        <div className="input-container">
          <div className="input-field" id="input-field">
            <form>
              <div className="form-group">
                {/* <img className="icon" src="./assets/user-icon.svg" alt="" /> */}
                  <input type="email" id="email" placeholder="email@address.com" name="email"
                          required />
              </div>
              <div className="form-group">
                {/* <img className="icon" src="./assets/password-icon.svg" alt="" /> */}
                  <input type="password" id="password1" placeholder="Create Password" 
                          required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" title="Please include at least one uppercase, one lowercase, one number and min of 8 Characters" />
              </div>
              <div className="form-group" id="check">
                <div className="check-box">
                  <input type="checkbox" name="Remember-me" id="Remember-me" />  
                  <label htmlFor="Remember-me" id="label-remeber">Remember me</label>
                </div>
                <div className="forget">
                  <p> <Link to='/rest-password'>Forgot Password</Link></p>
                </div>
              </div>
              <button className="submit" type="submit">Sign in</button> 

          </form>
        
          </div>
        </div>
        
    {/* <!-- the divider --> */}
    <div className="divider">
      <div className="dash"></div>
      <div className="or"> <p>or</p> </div>
      <div className="dash"></div>
    </div>

    {/* <!-- sign up options section --> */}
    <div className="signin-options">
      <div className="buttons">
          <button>Sign in with Google</button>
          <button>Sign in with Apple</button>
          <button>Sign in with Facebook</button>
      </div>
    </div>
    {/* <!-- the question sectiom --> */}
    <div className="question">
      <p>Don’t  have an account? <a href="#" id="create-one">Create one</a> </p>
    </div>
         </div>       
        )
    }
}

export default Signedin
