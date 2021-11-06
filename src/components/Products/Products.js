import React from 'react';
import Rating from 'react-rating';
import './Products.css'

const Products = (props) => {
    // console.log(star.props.product);
    const { name, img, price, stock, seller, star } = props.product;
    // console.log(props);
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <Rating  emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x" initialRating={star}
                        readonly></Rating>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddToCart(props.product)} className="btn-purchase">Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;