import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../SharedPage/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
           <div className="py-20">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;