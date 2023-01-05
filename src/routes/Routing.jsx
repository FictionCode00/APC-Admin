import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AffiliatesManagement from "../components/affiliates/Affiliates";
import Dashboard from "../components/dashboard/Dashboard";
import Login from "../components/login/Login";
import UserList from "../components/myteam/Myteam";
import { UserDetail } from "../components/myteam/View";
import PaymentManagement from "../components/payment/Payment";
import CoinsManagement from "../components/coins/Coins";
import BonusManagement from "../components/bonus/Bonus";
import StakeManagement from "../components/stake/Stake";
import ReferralManagement from "../components/referral/Referral";
import WalletManagement from "../components/wallet/Wallet";
import appContext from "../context/globalContext";

const Routing = (props) => {
    const contextData = useContext(appContext)

    return (
        <Routes>
            <>
                {contextData.token ?
                    <>
                        <Route path="*" exact element={<Dashboard />} />
                        <Route path="/dashboard" exact element={<Dashboard />} />
                        <Route path="/users" exact element={<UserList />} />
                        <Route path="/users/memberDetail" exact element={<UserDetail />} />
                        <Route path="/paymentManagement" exact element={<PaymentManagement />} />
                        <Route path="/referralManagement" exact element={<ReferralManagement />} />
                        <Route path="/bonusManagement" exact element={<BonusManagement />} />
                        <Route path="/stakeManagement" exact element={<StakeManagement />} />
                        <Route path="/coinsManagement" exact element={<CoinsManagement />} />
                        <Route path="/walletManagement" exact element={<WalletManagement />} />
                        <Route path="/affiliatesManagement" exact element={<AffiliatesManagement />} />
                    </>
                    :
                    <Route path="*" exact element={<Login />} />}
            </>
        </Routes>
    )
}
export default Routing;