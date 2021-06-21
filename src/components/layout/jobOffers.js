import React, {Component} from "react"
import '../css-folder/jobs.css'
import AvailableJobs from './availableJobs'
import Footer from './footer'

class Jobs extends Component {
    render () {
        return (
        <div className="container">
            <div  id='section-one'></div>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="header-image">
                        <div className="image">
                            <img id="image" src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="img" />
                        </div>
                        </div>
                        <div className="header-words">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam, pariatur sint soluta sequi ratione at error ullam nulla magnam aliquam consectetur, veniam eum quos ipsa labore quod inventore iure.</p>
                        </div>
                </div>
            </div>
            <div className="input-field">
                <form className="form-field">
                    <div className="filter">
                        <input className="keyword" type="text" placeholder="Search by keyword or start filtering" />
                    </div>
                    <div className="location">
                        <input className="location-city" type="text" placeholder="City/Town" />
                        <button type="submit"> Search</button>
                    </div>
                </form>
            </div>

            <div className="available-jobs">
                <div className="available-title">
                    <div className="title-left">
                        <p>300 job offers found</p>
                    </div>
                    <div className="search-option">
                    <label htmlFor="option">Sort by:</label>
                        <select id="option">
                            <option>Jobs</option>
                            <option>Popularity</option>
                            <option>Skills</option>
                        </select>
                    </div>
                </div>
            </div>
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <AvailableJobs />
            <Footer />
        </div>
        )
    }
} 
export default Jobs