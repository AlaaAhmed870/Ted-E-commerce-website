// src/Components/CheckoutForm.jsx
import { useState } from 'react';
import axiosInstance from '../../Service/axiosInstance';
import { useCart } from '../../Context/CartContext';

const CheckoutForm = () => {
  const { cart, clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderDetails = {
        ...formData,
        cart,
        total: getCartTotal(),
      };
      await axiosInstance.post('/checkout', orderDetails);
      clearCart(); // Clear cart after successful checkout
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
        <select
          id="paymentMethod"
          value={formData.paymentMethod}
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
          className="form-select"
        >
          <option value="">Select Payment Method</option>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Place Order</button>
    </form>
  );
};

export default CheckoutForm;
