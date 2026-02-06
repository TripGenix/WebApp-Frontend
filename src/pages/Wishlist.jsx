import React, { useState, useEffect } from "react";
import "./Wishlist.css";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  /* ======================
     Load from localStorage
  ====================== */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  /* ======================
     Remove item
  ====================== */
  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      <p className="subtitle">Your saved tours</p>

      {wishlist.length === 0 ? (
        <p className="empty">No items in wishlist yet ❤️</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />

              <div className="wishlist-info">
                <h4>{item.name}</h4>
                <p>{item.location}</p>
                <span className="price">LKR {item.price}</span>
              </div>

              <div className="wishlist-actions">
                <button className="book-btn">Book Now</button>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
