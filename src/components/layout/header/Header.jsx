import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaBars, FaPowerOff, FaSortDown, FaUser } from 'react-icons/fa'
import { useContext } from 'react';
import appContext from '../../../context/globalContext';

const Header = () => {
    let navigate = useNavigate();
    const contextData = useContext(appContext)

    function open_edit_profile(event) {
        event.preventDefault();
        // history('/edit_profile')
    }
    function logout(event) {
        event.preventDefault();
        contextData.setToken('')
        localStorage.setItem('token', '')
        navigate('/')
    }
    function FindActive() {
        let sidebar_id = document.getElementById('sideLayout');
        sidebar_id.classList.toggle("active");
    }

    return (
        <>
            <header class="header">
                <div class="dashboard_logoarea text-center">
                    <a class="menu_bar" onClick={FindActive}><FaBars /></a>
                    <a><img src={require('../../../assets/images/logo.png')} alt="" /></a>
                </div>
                <div class="right_loggedarea">
                    <Dropdown className="header_btn">
                        <Dropdown.Toggle id="dropdown-basic" class="dropdown d-flex">
                            <span className='me-2'>My Account</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="" onClick={open_edit_profile} ><FaUser />My Profile</Dropdown.Item>
                            <Dropdown.Item href="" onClick={logout}><FaPowerOff />Logout</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                </div>
            </header>
        </>
    )
}
export default Header;