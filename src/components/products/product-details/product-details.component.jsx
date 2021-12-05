import React from "react";
import './product-details.component.scss';

const ProductDetails = () => {
    return (
        <div className="product-details-wrapper">
            <div className='product-image'
        style={{
            backgroundImage: 'url("https://i.ibb.co/QfpjK7P/Lucky-Rabbit.jpg")'}}/>

            <div >
                <div> Product Name </div>
                <div> Brand </div>
                <div> Price </div>
                <div> Qty </div>
                <div> Custom Button </div>
                <div> Description </div>
            </div>

            
        </div>
    )
}

export default ProductDetails;