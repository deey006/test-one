import React, {Component} from 'react'
import imgOne from './rec-1.png'
import imgTwo from './rec-2.png'
import imgThree from './rec-3.png'
import imgFour from './img-4.png'
import vecimg from './Vector.svg'
import styles from '../css-folder/jobDescription.module.css'
import Footer from './footer'


class PageInfo extends Component {
    render () {
        return (
            <div className={styles.component}>
                <div  className={styles.sectionOne}>
                    <form className={styles.form}>
                        <input className={styles.keyword} type="text" placeholder="Search by keyword or start filtering" />
                        <input className={styles.searchTown} type="text" placeholder="City/Town" />
                        <button>Search</button>
                    </form>
                </div>
                <div className={styles.jobTitle}>
                    <div className={styles.titleLeft}>
                        <div className={styles.titleText}>
                        <h3>Graphic Designer</h3>
                        <span>Goldstream Digital</span>  <span className={styles.dot}> ●</span>  <span>Lagos,</span> <span> Nigeria </span> <span className={styles.dot}> ●</span>  <span> Part-time</span>
                        <p>25 Applicants</p>
                        </div>
                        <div className={styles.titleButtons}>
                            <button>View Applicants</button>
                            <button>Delete Job</button>
                        </div>
                    </div>
                    <div className={styles.titleRight}>
                        <p>Posted 2 days ago</p>
                        <img src={vecimg} alt="next" />
                    </div>
                </div>

                <div className={styles.description}>
                    <div className={styles.descriptionLeft}>
                        <div className={styles.leftTop}>
                            <h3>Job Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis adipiscing adipiscing at orci lectus magna faucibus facilisi egestas. Dolor pretium etiam potenti fermentum ornare scelerisque bibendum turpis elit. Viverra purus fermentum nulla purus.</p>
                        </div>
                        <div className={styles.leftMiddle}>
                            <h3>Job Function</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis adipiscing adipiscing at orci lectus magna faucibus facilisi egestas. Dolor pretium etiam potenti fermentum ornare scelerisque bibendum turpis elit. Viverra purus fermentum nulla purus.</p>
                        </div>
                        <div className={styles.leftButtonOne}>
                            <p>Industry</p>
                            <h5>Advertising</h5>
                        </div>
                        <div className={styles.leftButtonTwo}>
                            <p>Estimated job duration</p>
                            <h5>3 months</h5>
                        </div>
                    </div>
                    <div className={styles.descriptionRight}>
                        <div className={styles.rightTop}>
                            <p>Budget</p>
                            <p>₦60,000/week</p>
                        </div>
                        <div className={styles.rightMiddleSecond}>
                            <h5>Required working days</h5>
                            <div className={styles.weekDays}>
                             <p>S</p>   <p className={styles.blueBg}>M</p> <p>T</p> <p className={styles.blueBg}>W</p> <p>T</p> <p className={styles.blueBg}>F</p> <p>S</p>
                            </div>
                        </div>
                        <div className={styles.rightMiddleThird}>
                            <h5>Required working hours</h5>
                            <p>4pm-8pm</p>
                        </div>
                        <div className={styles.rightBottom}>
                            <h5>CAC No.</h5>
                            <p>1234567</p>
                        </div>
                        </div>
                </div>
                <div className={styles.aboutCompany}>
                    <div className={styles.aboutHeader}>
                        <h2>About the company</h2>
                    </div>
                    <div className={styles.aboutTop}>
                    <div className={styles.aboutTopLeft}>
                        <div className={styles.aboutTopLeftImg}>
                            <img src={imgTwo} alt="img" />
                        </div>
                        <div className={styles.aboutTopRight}>
                            <div className={styles.aboutTopRightTop}>
                                <h4 className={styles.tile}>Goldstream Digital</h4>
                                <p>VERIFIED</p>
                            </div>
                            <div className={styles.aboutTopRightBottom}>
                                <p>2,500 followers</p>
                            </div>
                        </div>
                        </div>
                        <div className={styles.boutTopRight}>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className={styles.aboutMiddle}>
                        <p>Advertising   <span className={styles.dot}> ●</span>  10-50 employees  <span className={styles.dot}> ●</span>  www.goldstream.com</p>
                    </div>
                    <div className={styles.aboutBottom}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus facilisi sed molestie sagittis pharetra, lacus. Vitae odio morbi nunc senectus. Eget interdum rhoncus, mauris imperdiet convallis rhoncus eget. Eget vitae purus ultrices sed pellentesque praesent egestas. Nisl erat sed metus, vitae facilisi velit. Neque elementum eu tortor convallis felis aliquet euismod. Egestas varius quam quam condimentum. Sollicitudin tristique pellentesque ipsum in. Lacus, et fermentum libero, aliquam ornare scelerisque praesent at nunc. Commodo tempus, maecenas eget lacus. Ut ut ac aliquet interdum phasellus sit. Nunc mauris convallis et curabitur accumsan pretium, et. Et, pulvinar justo, quam leo amet ac vulputate.</p>
                    </div>
                    <div className={styles.aboutMore}>
                        <p>More about Goldstream Digital</p>
                    </div>
                </div>
                <div className={styles.aboutBlue}>
                <div className={styles.aboutBottomTop}>
                    <h3>Download Our Free Mobile App today and Search on the go!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet eget id risus varius neque dapibus rhoncus. Turpis ultrices sem dolor at.</p>

                    <div className={styles.aboutBottomLeft}>
                        <img src={imgFour} alt="img" />
                    </div>
                    </div>
                    <div className={styles.aboutBottomRight}>
                        <img src={imgThree} alt="img" />
                        <img src={imgOne} alt="img" />
                    </div>
                </div>
                <div className={styles.breaker}>
                    <div></div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PageInfo