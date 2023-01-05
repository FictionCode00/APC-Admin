import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Sidebar.css';
import { FaCoins, FaMoneyCheck, FaTachometerAlt, FaUserAlt, FaUsers, FaUserTie, FaWallet } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { RiPriceTag2Fill } from 'react-icons/ri';
import { MdSavings } from 'react-icons/md';





const SideMenu = () => {
    let navigate = useNavigate();

    const [current_tab, set_current_tab] = useState(window.location.href.split("/")[3].split("?")[0])

    function dashboard() {
        set_current_tab("dashboard");
        navigate('/dashboard')
    }
    function Users() {
        set_current_tab("users");
        navigate('/users')
    }
    function Payments() {
        set_current_tab("paymentManagement");
        navigate('/paymentManagement')
    }
    function Affiliates() {
        set_current_tab("affiliatesManagement");
        navigate('/affiliatesManagement')
    }
    function Wallet() {
        set_current_tab("walletManagement");
        navigate('/walletManagement')
    }
    function Coins() {
        set_current_tab("coinsManagement");
        navigate('/coinsManagement')
    }
    function Stake() {
        set_current_tab("stakeManagement");
        navigate('/stakeManagement')
    }
    function Referral() {
        set_current_tab("referralManagement");
        navigate('/referralManagement')
    }
    function Bonus() {
        set_current_tab("bonusManagement");
        navigate('/bonusManagement')
    }
    

    useEffect(() => {
        set_current_tab(window.location.href.split("/")[3].split("?")[0])
    }, [window.location.href.split("/")[3].split("?")[0]])


    return (
        <>
            <div class="left_sidebar" id="sideLayout">
                <ul>
                    <li class={current_tab == "dashboard" ? "active" : ""}><a onClick={dashboard}><FaTachometerAlt /><span>Dashboard</span></a></li>
                    <li class={current_tab == "users" ? "active" : ""}><a onClick={Users}><FaUserTie /><span>Users Management</span></a></li>
                    <li class={current_tab == "referralManagement" ? "active" : ""}><a onClick={Referral}><BiTransfer /><span>Referral Management</span></a></li>
                    <li class={current_tab == "paymentManagement" ? "active" : ''}><a onClick={Payments}><FaMoneyCheck /><span>Payment management</span></a></li>
                    <li class={current_tab == "bonusManagement" ? "active" : ""}><a onClick={Bonus}><MdSavings /><span>Bonus Management</span></a></li>
                    <li class={current_tab == "stakeManagement" ? "active" : ""}><a onClick={Stake}><RiPriceTag2Fill /><span>Stake management</span></a></li>
                    <li class={current_tab == "coinsManagement" ? "active" : ""}><a onClick={Coins}><FaCoins /><span>Coins management</span></a></li>
                    <li class={current_tab == "walletManagement" ? "active" : ""}><a onClick={Wallet}><FaWallet /><span>Wallet management</span></a></li>
                    <li class={current_tab == "affiliatesManagement" ? "active" : ''}><a onClick={Affiliates}><FaUsers /><span>Affiliates management</span></a></li>
                </ul>
            </div>
        </>
    )
}
export default SideMenu;