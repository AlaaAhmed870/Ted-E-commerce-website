import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Service/axiosInstance';

const ProductReview = ({ reviews, setReviews }) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (rating < 1 || rating > 5 || review.trim() === '') {
      setError('Please provide a valid rating (1-5) and review.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Optimistically update the UI
    const newReview = { rating, review };
    setReviews((prevReviews) => [newReview, ...prevReviews]);

    try {
      // Post new review
      await axiosInstance.post(`/products/${productId}/reviews`, newReview);

      // Optionally handle the server response here if needed
    } catch (error) {
      console.error('Error submitting review:', error);

      // Revert optimistic update if submission fails
      setReviews((prevReviews) => prevReviews.filter((r) => r !== newReview));

      setError('Failed to submit review. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setRating(1);
      setReview('');
    }
  };

  return (
    <div>
      <h4>Reviews</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            id="rating"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(Number(e.target.value))}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="form-control"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
      <h5>Customer Reviews</h5>
      {reviews.length > 0 ? (
        reviews.map((r, index) => (
          <div key={index} className="border p-3 mb-3">
            <h6>Rating: {r.rating} / 5</h6>
            <p>{r.review}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductReview;
