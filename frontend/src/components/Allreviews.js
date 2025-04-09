import React, { useEffect, useState } from "react";
import axios from "axios";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/review/all")
      .then((res) => {
        if (res.data.success) {
          setReviews(res.data.reviews);
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching reviews:", err);
      });
  }, []);

  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <p><strong>Rating:</strong> {review.rating} ⭐</p>
            <p><strong>Comment:</strong> {review.comment}</p>
            <p><em>{new Date(review.date).toLocaleString()}</em></p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default AllReviews;
