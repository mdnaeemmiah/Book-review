import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <div>
                
            </div>
        </div>
    );
};

export default Layout;