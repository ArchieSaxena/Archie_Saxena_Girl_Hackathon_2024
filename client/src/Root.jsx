import { Outlet } from "react-router-dom";
// import MainNavigation from "./components/MainNavigation";
// import Footer from "./Components/UI/Footer";
// import NavBar from "./Components/UI/NavBar";
import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';

function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
export default Root;
