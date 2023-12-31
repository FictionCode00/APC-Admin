import { Button, Form, Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import './Myteam.css';
import { useEffect, useState } from "react";
import { changeUserStatus, getMembers } from '../../services/CommonServices';
import { toast } from "react-toastify";

const UserList = () => {
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const getTeamMembers = () => {
        getMembers(localStorage.getItem('id')).then(response => {
            if (response.status === 200) {
                setUsers(response.data.data)
            }
        }).catch(err => {
            console.log(err.response.message)
            toast.error(err.response.message)
        })
    }

    const changeActivestatus = (event, id) => {
        console.log(event.target.checked, id);
        const payload = {}
        if (event.target.checked) {

            payload.status = 1
            payload.id = id

        }
        else {
            payload.status = 0
            payload.id = id
        }
        changeUserStatus(payload).then(res => {
            if (res.status === 200) {
                toast.success("User status changes successfully.")
                getTeamMembers()
            }
        }).catch(err=>{
            toast.error(err.response.data.message)
        })
    }

    useEffect(() => {
        getTeamMembers();
        // console.log('team members', response)

    }, [])
    return (
        <>
            <div class="content_area">
                <section className='scn-1 bg-white p-3 rounded-2'>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className='light-blck heading mb-0'>My Team</h4>
                        <Button className="admn-sbmt-bttn pe-3" onClick={() => navigate("/users/addUser")}><BiPlus className="fs-4 me-2" />Add User</Button>
                    </div>
                    <Table striped borderless hover variant='light' className='p-3 d_table mt-2 my_team_table' responsive>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Referral Code</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user) =>
                                <tr>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.referral_code}</td>
                                    <td><Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        className="inner-toggle"
                                        defaultChecked={user.is_active == 1}
                                        onChange={(e) => changeActivestatus(e, user.id)}
                                    // label="Check this switch"
                                    /></td>
                                    <td className="text-center">
                                        <Button class="btn btn-sm dropdown-toggle" id="dropdownMenuButton1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <BsThreeDotsVertical />
                                        </Button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" onClick={() => navigate(`/users/memberDetail?id=${user.id}`)}>View</a></li>
                                            {/* <li><a class="dropdown-item" href="#">Delete</a></li> */}
                                        </ul>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </section>
            </div >
        </>
    )
}
export default UserList;