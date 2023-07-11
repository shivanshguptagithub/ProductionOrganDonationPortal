import { Outlet } from "react-router-dom";
import Topbar from "./TopBar";

function Layout(){
    return (
        <div>
            <Topbar/>
            <Outlet/>
        </div>
    );
}
export default Layout;