import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=1`);
  };
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium1" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="row">
          <div className="price">${product.price}</div>
        </div>
        <div className='product'>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
        </div>
        <div className='product'>
          <div className='product1'>
            {product.countInStock > 0 ? (<button
              onClick={addToCartHandler}
              className="small">
              <i class="fas fa-shopping-cart"></i> Add to cart
            </button>) : (<p className='alert-word'>Out of stock</p>)}
          </div>
        </div>

      </div>
    </div>
  );
}
