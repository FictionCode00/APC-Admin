import moment from "moment/moment";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { getUserInfo, media_url } from "../../services/CommonServices";


export const UserDetail = () => {
    const [params] =useSearchParams()
    const [user,setUser]=useState({})
    // console.log(params.get('id'));
    const getInfo=()=>{
        getUserInfo(params.get('id')).then(res=>{
            if(res.status===200){
                setUser(res.data.data)
            }
        }).catch(err=>{
            console.log(err.response.data.message);
        })
    }
    
    useEffect(() => {
        getInfo()
    }, []);
    return (
        <>
            <div class="content_area">
                <section className='scn-1 bg-white p-3 rounded-2 member_detail'>
                    <h4 className='light-blck heading'>Member Details</h4>
                    <Row>
                        <Col xs={12} sm={3} md={4}>
                            <div className="userImg-prnt">
                                <img className="img-fluid" src={media_url+user.user_image} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} sm={9} md={8}>
                            <Row className="dt_Row">
                                <Col xs={12} md={4} className='dt_col1'>Full Name :</Col>
                                <Col xs={12} md={8} className='dt_col2'>{user.fullname}</Col>
                            </Row>
                            <Row className="dt_Row">
                                <Col xs={12} md={4} className='dt_col1'>Email :</Col>
                                <Col xs={12} md={8} className='dt_col2'>{user.email}</Col>
                            </Row>
                            <Row className="dt_Row">
                                <Col xs={12} md={4} className='dt_col1'>Referral Code :</Col>
                                <Col xs={12} md={8} className='dt_col2'>{user.referral_code}</Col>
                            </Row>
                            <Row className="dt_Row">
                                <Col xs={12} md={4} className='dt_col1'>Date Joined :</Col>
                                <Col xs={12} md={8} className='dt_col2'>{moment(user.created_on).format("DD-MM-YYYY")}</Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </div>
        </>
    )
}