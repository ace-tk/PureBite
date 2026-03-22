import React, { useState } from 'react';
import './Shop.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Weekly Organic Box",
    description: "A weekly assortment of fresh, organic fruits and vegetables.",
    price: 29.99,
    rating: 4.8,
    reviews: 253,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    category: "Weekly"
  },
  {
    id: 2,
    title: "Seasonal Harvest Box",
    description: "A mix of seasonal organic produce sourced at peak ripeness. 🍏",
    price: 39.99,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800",
    category: "Monthly"
  },
  {
    id: 3,
    title: "Juicing Essentials Box",
    description: "A box filled with the freshest ingredients for juicing, ready to use.",
    price: 45.99,
    rating: 4.7,
    reviews: 132,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800",
    category: "Weekly"
  },
  {
    id: 4,
    title: "Family Organic Box",
    description: "A large box filled with organic produce, perfect for families.",
    price: 49.99,
    rating: 4.9,
    reviews: 99,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800",
    category: "Weekly"
  }
];

const Shop = () => {
  const [priceRange, setPriceRange] = useState(50);
  const [categories, setCategories] = useState({
    Weekly: true,
    Monthly: false
  });

  const handleCategoryChange = (cat) => {
    setCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const handleApply = () => {
    // Implement filter logic here, currently a mock
  };

  const clearFilters = () => {
    setPriceRange(60);
    setCategories({ Weekly: false, Monthly: false });
  };

  return (
    <div className="shop-page">
      {/* Hero Header */}
      <section className="shop-hero">
        <div className="container shop-hero-content">
          <h1>Shop Organic Boxes</h1>
          <p>Browse our selection of fresh, organic produce boxes delivered to your door.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="shop-main container">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">Category <span className="chevron"></span></h3>
            <div className="filter-options">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.Weekly} 
                  onChange={() => handleCategoryChange('Weekly')} 
                />
                <span className="custom-checkbox"></span>
                Weekly
                <span className="count">(4)</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.Monthly} 
                  onChange={() => handleCategoryChange('Monthly')} 
                />
                <span className="custom-checkbox"></span>
                Monthly
                <span className="count">(1)</span>
              </label>
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-title">Price <span className="chevron"></span></h3>
            <div className="price-slider-container">
              <input 
                type="range" 
                min="20" 
                max="60" 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="price-slider"
              />
              <div className="price-labels">
                <span>$20</span>
                <span>${priceRange}</span>
                <span>$60</span>
              </div>
            </div>
            <button className="btn btn-primary btn-apply" onClick={handleApply}>Apply</button>
            <button className="btn btn-clear" onClick={clearFilters}>Clear Filters</button>
          </div>
        </aside>

        {/* Product Grid section */}
        <div className="shop-content">
          <div className="shop-content-header">
            <h2>4 Organic Boxes</h2>
            <div className="sort-dropdown">
              <span>Sort By: </span>
              <select className="sort-select">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {MOCK_PRODUCTS.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-rating">
                    <div className="stars">
                      {'★'.repeat(Math.round(product.rating))}
                      {'☆'.repeat(5 - Math.round(product.rating))}
                    </div>
                    <span className="reviews">{product.reviews} reviews</span>
                  </div>
                  <div className="product-footer">
                    <div className="price-info">
                      <span className="from-text">from</span>
                      <span className="product-price">${product.price}</span>
                    </div>
                    <button className="btn btn-primary btn-view">View Box</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
