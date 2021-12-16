import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const productList1 = useSelector((state) => state.productList1);
  const { products1 } = productList1;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <h1>Top Reviews</h1>
          <u className='more'><Link to='/search/category/all/name/all/min/0/max/0/rating/0/order/toprated/pageNumber/1'> See more </Link></u>
          <div className='middle '>
            {products1.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row1 start ">
              {products1.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
          <h1>New products</h1>
          <u className='more'><Link to='#more'> See more </Link></u>
          <div className='middle '>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row1 start ">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
