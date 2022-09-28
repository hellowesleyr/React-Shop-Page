import React from "react";
import { Link } from "react-router-dom";
import Cat from "./Cat";
const Navbar = ({cart}) => {
    return (
        <div className="navbar">
            <div className="navItem">
            <Cat></Cat>
                
            </div>
             <Link to="/"><div  className="navItem navBtn">Home</div></Link>
             <Link to="/shop"><div  className="navItem navBtn">Shop</div></Link>
            <Link className="navRight" to="/cart"><div className="navItem navRight ">
                <div className=" navBtn">Cart</div>
                <div className="cartBubble"><span >6</span></div>
                </div></Link>
        </div>
    )
}

export default Navbar