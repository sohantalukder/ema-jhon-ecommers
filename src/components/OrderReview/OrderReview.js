import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/UseCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart.js';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
	const history = useHistory();
	const [cart, setCart] = useCart();
	const handleRemove = (key) => {
		const newCart = cart.filter((products) => products.key !== key);
		setCart(newCart);
		removeFromDb(key);
	};
	const handlePlaceOrder = () => {
		history.push('/shipping');
		// setCart();
		// clearTheCart();
	};
	return (
		<div className="shop-container">
			<div className="product-container">
				{cart.map((product) => (
					<ReviewItem
						handleRemove={handleRemove}
						product={product}
						key={product.key}
					></ReviewItem>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<button onClick={handlePlaceOrder} className="order">
						Proceed to Shipping
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;
