import React from "react";
import uniqid from "uniqid";


const SmallCard = (data) => {
let cardData = data.cardData 
    return (
        <div className="smallCard">
            <div className="imgContainer">
                <img className = "smallCardImg" src={cardData.imgURL} alt="" />
            </div>
            <div className="TitleSection">
                {cardData.name}
            </div>
            <div className="Controls">
                <label htmlFor="quantitySelect"></label>
                <input type="number" name="quantitySelect" id="" />
                <button className="addToCart">Add to cart</button>
            </div>
            .
        </div>
    )
}


export default SmallCard