import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/UseCart';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../cart/Cart';
import Products from '../../Products/Products';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);
	const [cart, setCart] = useCart();
	const [displayProduct, setDisplayProduct] = useState([]);
	const size=10;
	useEffect(() => {
		fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setDisplayProduct(data.products);
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
			});
	}, [page]);
	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storeCart = [];
			for (const key in savedCart) {
				const addedProduct = products.find((product) => product.key === key);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storeCart.push(addedProduct);
				}
			}
			setCart(storeCart);
		}
	}, []);
	const handleAddToCart = (product) => {
		const exists = cart.find((pd) => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter((pd) => pd.key !== product.key);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, product];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}
		setCart(newCart);
		addToDb(product.key);
	};
	const handleSearch = (event) => {
		const searchText = event.target.value;
		const matchProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchText.toLowerCase())
		);
		setDisplayProduct(matchProducts);
	};
	return (
		<>
			<div className="search">
				<input
					onChange={handleSearch}
					type="text"
					placeholder="Type to search"
				/>
				<button>
					<i className="fas fa-shopping-cart"></i>
					<span>0</span>
				</button>
			</div>
			<div className="shop-container">
				<div className="product-container">
					{displayProduct.map((product) => (
						<Products
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						></Products>
					))}
					<div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review">
							<button className="order">Please Order</button>
						</Link>
					</Cart>
				</div>
			</div>
		</>
	);
};

export default Shop;
