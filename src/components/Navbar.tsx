import "../styles/Navbar.css";
import ToggleDarkmode from "./ToggleDarkMode";
import LinkedinButton from "./LinkedinButton";
import CvButton from "./CvButton";


function Navbar() {

return (
    <>
        <div className="navbar">

            <CvButton></CvButton>
            <LinkedinButton></LinkedinButton>
            <ToggleDarkmode></ToggleDarkmode>
        </div>
    </>
);
}

export default Navbar;
