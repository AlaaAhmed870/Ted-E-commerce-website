import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Service/axiosInstance';
import { useCart } from '../../Context/CartContext';
import { useWishlist } from '../../Context/WishlistContext';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../Pages/SearchBar';
import Filters from '../Pages/Filters';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Products = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const query = Object.entries(filters).map(([key, value]) => `${key}=${value}`).join('&');
    const searchParam = searchQuery ? `search=${searchQuery}&` : '';
    axiosInstance.get(`/products?${searchParam}${query}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, [filters, searchQuery]);

  return (
    <Container>
      <SearchBar onSearch={setSearchQuery} />
      <Filters onFilter={setFilters} />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
      >
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="p-2">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-light w-100 mb-2">
                    View Details
                  </Link>
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-primary"
                      onClick={() => addToCart(product)}
                      className="w-50 btn btn-outline-dark btn-light btn-sm"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline-primary"
                      onClick={() => addToWishlist(product)}
                      className="w-50 btn btn-outline-dark btn-light btn-sm"
                    >
                      Add to Wishlist
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>No products available</h3>
          </div>
        )}
      </Carousel>
    </Container>
  );
};

export default Products;
