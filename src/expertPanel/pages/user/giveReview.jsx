import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const ReviewForm = () => {
const { expertEmail } = useParams();
  const [formData, setFormData] = useState({
    userEmail: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      expertEmail, // Expert's email
      userEmail: formData.userEmail, // Reviewer's email
      comment: formData.comment, // Review comment
    };

    try {
      const response = await fetch('http://localhost:5000/api/experts/add-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const result = await response.json();
      console.log('Review submitted:', result);
      // Reset the form state and handle the successful submission here
      setFormData({ userEmail: '', comment: '' });
      
    } catch (error) {
      console.error('Error submitting review:', error);
      // Handle the error state here
     
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Onest bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">How was the Consultation?</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="userEmail"
            placeholder="Your Email*"
            required
            value={formData.userEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="comment"
            placeholder="Type your review"
            required
            value={formData.comment}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Submit Review →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
