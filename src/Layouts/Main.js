import { Outlet } from "react-router-dom";
import Footer from "../component/Shared/Footer";
import Header from "../component/Shared/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
