import React, {Component} from "react"
import '../css-folder/jobs.css'

class AvailableJobs extends Component  {
    render () {
        return (
            <div className="overall-container">
            <div className="jobs-container">
                <div className="job-image">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="image" />
                </div>

                <div className="company-name">
                    <div className="name">
                        <p>Goldstream Digital <br />
                        <span>Graphic Designer</span> 
                        </p>
                    </div>
                    <div className="verified">
                        <p>VERIFIED</p>
                    </div>
                </div>

                    <div className="company-location">
                    <div className="name">
                        <p>Location <br />
                        <span>Lagos, Nigeria</span> 
                        </p>
                    </div>
                    </div>

                    <div className="name">
                        <p>Budget <br />
                        <span>₦250,000/month</span> 
                        </p>
                    </div>

                    <div className="name">
                        <p>Type <br />
                        <span>Per-time</span> 
                        </p>
                    </div>
                    <div className="name">
                        <p>1 day ago</p>
                    </div>
                    <button className="view-Offer">View Offer</button>
            </div>
            </div>
        )        
    }
}

export default AvailableJobs