import React from "react";
import { useOutletContext, useParams } from "react-router-dom"
import SmallCard from "./smallCard";
const Shop = ({ products }) => {
    console.log(`Products are ${products}`)
    return(
        <div className="shop">
            
            <div className="shopPanel">
            <div className="shopBackgroundDiv"></div>
                {
                    products.map(product => {
                        return<SmallCard cardData = {product} ></SmallCard>
                    })
                }
            </div>
        </div>
    )
}

export default Shop