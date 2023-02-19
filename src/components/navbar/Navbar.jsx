import "./Navbar.css";

const Navbar= ()=>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Booking.com</span>
                <button className="navList">List your property</button>
                <div className="navItems">
                    
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                    
                </div>
                
            </div>


        </div>
    )
}

export default Navbar;