import { Col } from 'react-bootstrap';
import './Dashboard.css';
import { FaHandshake, FaMoneyBill, FaSitemap, FaUserAlt, FaUsers } from 'react-icons/fa';
import { useEffect } from 'react';
import { useState } from 'react';
import { dashboardData } from '../../services/CommonServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {TbBusinessplan} from 'react-icons/tb';
import {RiLuggageDepositLine} from 'react-icons/ri';
import {GiWallet} from 'react-icons/gi'
const Dashboard = () => {
    const [data,setData]=useState({})
    let navigate=useNavigate()

    const GetData=()=>{
        dashboardData().then(res=>{
            if(res.status===200){
                setData(res.data.data)
            }
        }).catch(err=>{
            toast.error(err.response.data.message)
        })
    }
    useEffect(()=>{
        GetData()
    },[])

    return (
        <>
            <div class="content_area">
                <div class="top3_area">
                    <div class="row cards-scn1">
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
                        <Col md={3} className='main-card-pt'>
                            <div class="card rounded-2">
                                <div class="card-details d-flex align-items-center mx-auto">
                                    <div className='c-icon_bg rounded-circle me-4'>
                                        <FaUsers />
                                    </div>
                                    <div className='c-text'>
                                        <h6>
                                            {data.userCount}
                                        </h6>
                                        <p>
                                            Total Users
                                        </p>
                                    </div>
                                </div>
                                <button class="card-button submit_bttn" onClick={()=>navigate('/users')} >Users &gt;&gt;</button>
                            </div>
                        </Col>
                        <Col md={3} className='main-card-pt'>
                            <div class="card rounded-2">
                                <div class="card-details d-flex align-items-center mx-auto">
                                    <div className='c-icon_bg rounded-circle me-4'>
                                        <TbBusinessplan />
                                    </div>
                                    <div className='c-text'>
                                        <h6>
                                            ${data.totalBuisness}<span> USD</span>
                                        </h6>
                                        <p>
                                            Total Buisness
                                        </p>
                                    </div>
                                </div>
                                <button class="card-button submit_bttn" >Total Buisness  &gt;&gt;</button>
                            </div>
                        </Col>
                        <Col md={3} className='main-card-pt'>
                            <div class="card rounded-2">
                                <div class="card-details d-flex align-items-center mx-auto">
                                    <div className='c-icon_bg rounded-circle me-4'>
                                        <RiLuggageDepositLine />
                                    </div>
                                    <div className='c-text'>
                                        <h6>
                                            ${data.totalDeposit}<span> USD</span>
                                        </h6>
                                        <p>
                                            Total Deposit
                                        </p>
                                    </div>
                                </div>
                                <button class="card-button submit_bttn" >Deposit History  &gt;&gt;</button>
                            </div>
                        </Col>
                        <Col md={3} className='main-card-pt'>
                            <div class="card rounded-2">
                                <div class="card-details d-flex align-items-center mx-auto">
                                    <div className='c-icon_bg rounded-circle me-4'>
                                        <GiWallet />
                                    </div>
                                    <div className='c-text'>
                                        <h6>
                                            ${data.totalWithdraw}<span> USD</span>
                                        </h6>
                                        <p>
                                            Total Withdraw
                                        </p>
                                    </div>
                                </div>
                                <button class="card-button submit_bttn" >Withdraw History  &gt;&gt;</button>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;