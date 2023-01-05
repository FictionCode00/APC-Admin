import { useContext } from "react";
import appContext from "../../context/globalContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideMenu from "./sidebar/Sidebar";

const Layout = (props) => {
    const contextData = useContext(appContext)
    return (
        <>
        {contextData.token &&
            <><Header></Header>
            <SideMenu></SideMenu></>
        }
            {props.children}
            {/* <Footer></Footer> */}
        </>
    )
}
export default Layout;