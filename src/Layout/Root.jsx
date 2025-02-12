import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
      <div>
        <div className="max-w-[1460px]  mx-auto ">
          <Header></Header>
          <Outlet></Outlet>
          
        </div>
        <div>
         <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;