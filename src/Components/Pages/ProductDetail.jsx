import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Service/axiosInstance';
import ProductReview from '../Pages/ProductReview'; // Corrected import path
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/products/${productId}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await axiosInstance.get(`/products/${productId}/reviews`);
        if (res && res.data) {
          setReviews(res.data);
        } else {
          console.warn('No reviews found');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data);
        } else {
          console.error('Error message:', error.message);
        }
      }
    };

    fetchProduct();
    fetchReviews();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    
    <section className='bg-light '>
      
      <div className='container'>
          <div>

            
             <div>
                <img 
                    src={product.image}
                    alt={product.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
             </div>
            
             <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
             </div>

          </div>

          <div>
              {/* Product details and image gallery */}
              <ProductReview reviews={reviews} setReviews={setReviews} />
          </div>
      
      </div>
    </section>
    
    
    
  
    
    
  );
};

export default ProductDetail;
