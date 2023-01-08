import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="main-section">
            <div className="section1">
                <div className="section2">
                    <img className="" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="" width="30px" height="30px"/>
                    <div className="name">america</div>
                </div>
                <div className="bordersec3">
                   <ul className="section3">
                        <li>BOOK</li>
                        <li>CHECK IN</li>
                        <li>MANAGE</li>
                    </ul>   
                </div>
                <div className="colorsection4">
                    <ul className="section4">
                        <li>Deals</li>
                        <li>Flying With Us</li>
                        <li>Where We Fly</li>
                        <li>Shop</li>
                        <li>FAQ</li>
                        <li>Fees</li>
                    </ul>
                </div>
            </div>
            <div className="section5">
                <ul className="section6">
                    <li className="signin">elevate</li>
                    <li className="signin">Sign In</li>
                    <li>Sign Up</li>
                </ul>
                
            </div>
            <div className="dropdown">⬇</div>
        </div>
    );
};
export default Navbar;