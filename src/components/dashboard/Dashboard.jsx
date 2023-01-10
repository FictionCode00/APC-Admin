import './Dashboard.css';
import { FaHandshake, FaSitemap, FaUserAlt, FaUsers } from 'react-icons/fa';

const Dashboard = (props) => {
    return (
        <>
            <div class="content_area">
                <div class="top3_area">
                    <div class="row">
                        {/* <aside class="col-lg-4">
                            <div class="white_three">
                                <a><span style={{ background: "#9ebcf5" }} ><FaUserAlt /></span>
                                    <h3 style={{ color: "#f1a732" }} >12</h3>
                                    <p class="text-uppercase">Total Sellers </p>
                                </a>
                            </div>
                        </aside> */}
                        {/* <aside class="col-lg-4">
                            <div class="white_three">
                                <a>
                                    <span style={{ background: "#822b2b" }} ><FaSitemap /></span>
                                    <h3 style={{ color: "#2e4485" }}>14</h3>
                                    <p class="text-uppercase">Total Agents</p>
                                </a>
                            </div>
                        </aside> */}
                        <aside class="col-lg-4">
                            <div class="white_three ms-0">
                                <a>
                                    <span style={{ background: "#2e4485" }} ><FaUsers /></span>
                                    <div>
                                        <h3 style={{ color: "#2e4485" }}>0</h3>
                                        <p class="text-uppercase">Total Users</p>
                                    </div>
                                </a>
                            </div>
                        </aside>
                        {/* <aside class="col-lg-4">
                            <div class="white_three">
                                <span style={{ background: "#0cc2aa" }}><FaHandshake /></span>
                                <h3 style={{ color: "#0cc2aa" }} >68</h3>
                                <p class="text-uppercase">Total Approved Properties</p>
                            </div>
                        </aside> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;