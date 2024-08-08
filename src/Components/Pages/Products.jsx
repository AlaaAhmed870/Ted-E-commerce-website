
// PRODUCTS

import { useEffect, useState } from "react";
import {getProduct} from "../../Service/Service.service"
import { useCart } from '../../Context/CartContext';

function Products() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct()
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, []);

    console.log(products);

    return ( 
        <>
             <header className="container text-light bg-dark rounded-2
            py-4 text-center
            w-50 mx-auto my-5">
                <h2> All Products </h2>
            </header>
            
            
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
      {products && products.map((product) => (
        <div key={product.id} className="col">
          <div className="card shadow-sm">
            <img
              src={product.image}
              alt="Product"
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h6 className="card-title">{product.title}</h6>
              <p className="card-text">
                {product.description.length > 52 ? `${product.description.slice(0, 52)}...` : product.description}
              </p>
              <h5 className="card-price">${product.price}</h5>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>


        </>
     );
}

export default Products;