// Cart.jsx

import { useCart } from '../../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart , getCartTotal, addToCart , } = useCart();


  return (
    <div>
        <div>
            <div className="py-3 font-medium">
                <h6>Cart Summary</h6>
            </div>
            <div className="d-flex justify-content-between py-3 font-medium">
                <h6>SubTotal</h6>
                <h6>${getCartTotal()}</h6>
            </div>
        </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (

        <div>
          {cart.map(item => (
            <div key={item.id} className='row justify-content-between align-items-center shadow-sm py-5 px-3 my-3 bg-white'>
                <div className="col-lg-3 col-md-12 d-flex align-items-center justify-content-center mb-3">
                    <img src={item.image} alt="Image" className="img-fluid rounded-md" style={{ maxHeight: '200px' }} />
                </div>
                
                <div className="col-lg-6 col-md-12">
                    <div className="d-lg-block d-none font-medium mb-3">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="d-block d-lg-none font-medium mb-3">
                        <h3>{item.title.slice(0, 19)}</h3>
                    </div>
                    <h3 className="font-normal">${item.price}</h3>
                    <div className="d-flex justify-content-start align-items-center mt-1">
                        <button onClick={() => addToCart(item)} className="btn btn-success me-2">Add</button>
                        <div className="p-3">{item.quantity}</div>
                        <button onClick={() => removeFromCart(item)} className="btn btn-danger ms-2">Minus</button>
                    </div>
                </div>
            </div>
          ))}
        </div>

      )}
      <button onClick={clearCart} className="btn btn-primary w-100 py-3 mt-4 rounded-lg">Clear Cart</button>
    </div>
  );
};

export default Cart;
