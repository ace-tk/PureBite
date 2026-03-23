import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Shop.css';

// SVG Icons
const IconSearch = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const IconFilter = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>;
const IconHeart = ({ active }) => <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? "red" : "none"} stroke={active ? "red" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconDelivery = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const IconLeaf = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
const IconPause = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>;

const CATEGORIES = [
  "All Products", "Organic Boxes", "Fruits", "Vegetables", "Smoothies", "Dairy & Eggs"
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Weekly Organic Box",
    description: "Serves 2-3 people at peak ripeness. Sourced locally.",
    price: 29.99,
    subPrice: 26.99,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Best Seller", type: "orange" },
    tags: ["PureBite", "Eco Friendly"],
    category: "Vegetables",
    liked: false
  },
  {
    id: 2,
    title: "Juicing Essentials Box",
    description: "Serves 2-3 people for fresh morning smoothies and juices.",
    price: 35.99,
    subPrice: 32.39,
    rating: 4.9,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=600",
    badge: { text: "New", type: "green" },
    tags: ["PureBite", "Juicing"],
    category: "Organic Boxes",
    liked: false
  },
  {
    id: 3,
    title: "Seasonal Harvest Box",
    description: "A full organic produce box harvested precisely at the right time.",
    price: 39.99,
    subPrice: 29.99,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Limited", type: "orange" },
    tags: ["PureBite", "Seasonal"],
    category: "Organic Boxes",
    liked: false
  },
  {
    id: 4,
    title: "Organic Fruit Box",
    description: "Seasonal fruits picked at the orchards perfectly ripe.",
    price: 27.99,
    subPrice: 25.19,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Limited", type: "blue" },
    tags: ["PureBite", "Family", "10%"],
    category: "Fruits",
    liked: true
  },
  {
    id: 5,
    title: "Farm Fresh Organic Eggs",
    description: "One dozen pasture-raised, free-range organic brown eggs.",
    price: 6.99,
    subPrice: 5.99,
    rating: 4.9,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Dairy", "Farm Fresh"],
    category: "Dairy & Eggs",
    liked: false
  },
  {
    id: 6,
    title: "Whole Organic Milk",
    description: "Cold, fresh, pasteurized organic whole milk.",
    price: 4.99,
    subPrice: 4.49,
    rating: 4.8,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Dairy", "Organic"],
    category: "Dairy & Eggs",
    liked: false
  },
  {
    id: 7,
    title: "Green Detox Smoothie",
    description: "A blend of spinach, kale, apple, and ginger for a healthy start.",
    price: 7.99,
    subPrice: 7.19,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cab32?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Best Seller", type: "orange" },
    tags: ["Detox", "Vegan"],
    category: "Smoothies",
    liked: true
  },
  {
    id: 8,
    title: "Berry Blast Smoothie",
    description: "Antioxidant-rich mixed berries swirled with organic yogurt.",
    price: 8.49,
    subPrice: 7.64,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Antioxidant", "Berries"],
    category: "Smoothies",
    liked: false
  },
  {
    id: 9,
    title: "Tropical Mango Smoothie",
    description: "Sweet mango, pineapple, and coconut water blend.",
    price: 8.99,
    subPrice: 8.09,
    rating: 4.7,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1598428914278-d0adcf296e62?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Summer", type: "green" },
    tags: ["Tropical", "Refreshing"],
    category: "Smoothies",
    liked: false
  },
  {
    id: 10,
    title: "Protein Chocolate Smoothie",
    description: "Rich cacao powder, bananas, and pea protein.",
    price: 9.49,
    subPrice: 8.54,
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1563227448-9366fa2eb5df?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Protein", "Post-Workout"],
    category: "Smoothies",
    liked: false
  },
  {
    id: 11,
    title: "Strawberry Banana Classic",
    description: "The timeless combination of ripe strawberries and bananas.",
    price: 7.49,
    subPrice: 6.74,
    rating: 4.8,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=600",
    badge: null,
    tags: ["Classic", "Kids Love"],
    category: "Smoothies",
    liked: true
  },
  {
    id: 12,
    title: "Sunshine Citrus Blend",
    description: "Oranges, grapefruit, and a hint of turmeric for immunity.",
    price: 8.99,
    subPrice: 8.09,
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1622597467836-f38240662c82?auto=format&fit=crop&q=80&w=600",
    badge: { text: "Immunity", type: "blue" },
    tags: ["Vitamin C", "Citrus"],
    category: "Smoothies",
    liked: false
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === "All Products" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page container">
      <header className="shop-catalog-header">
        <h1>Shop Organic</h1>
        <p>Browse our selection of fresh, organic produce and healthy goods — delivered to your door.</p>
      </header>

      {/* Advanced Search & Filtering Header */}
      <section className="shop-controls">
        <div className="search-bar-wrapper">
          <IconSearch />
          <input type="text" placeholder="Search for organic boxes, Fruits, vegetables" className="search-input" />
        </div>
        <div className="dropdowns-wrapper">
          <select className="control-select">
            <option>All Categories</option>
            <option>Boxes</option>
            <option>Producs</option>
          </select>
          <select className="control-select">
            <option>Sort By: Featured</option>
            <option>Price: Low to High</option>
          </select>
          <button className="btn-filter">
            <IconFilter /> Filters
          </button>
        </div>
      </section>

      {/* Category Pills Slider */}
      <section className="category-pills">
        {CATEGORIES.map(cat => (
          <button 
            key={cat} 
            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-icon">🎁</div>
        <p className="promo-text">
          Get <strong>10% OFF</strong> your first order - Use code: <span className="promo-code">WELCOME10</span> at checkout - Free delivery on orders: <strong>$50+</strong>*
        </p>
      </section>

      {/* Products Display Section */}
      <section className="products-section">
        <div className="products-count">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </div>

        <div className="product-grid-extended">
          {filteredProducts.map(product => (
            <div className="product-card-ext" key={product.id}>
              {/* Image & Badges */}
              <div className="card-image-box">
                {product.badge && (
                  <span className={`card-badge badge-${product.badge.type}`}>
                    {product.badge.text}
                  </span>
                )}
                <button className="btn-heart" aria-label="Favorite">
                  <IconHeart active={product.liked} />
                </button>
                <img src={product.image} alt={product.title} className="card-img" loading="lazy" />
              </div>

              {/* Card Details */}
              <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-desc">{product.description}</p>
                
                <div className="card-rating">
                  <div className="stars">★★★★★</div>
                  <span className="reviews-count">{product.rating} ({product.reviews})</span>
                </div>

                <div className="card-tags">
                  {product.tags.map(tag => (
                    <span className="tag-pill" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="card-purchase">
                  <div className="price-block">
                    <span className="price-label">from</span>
                    <span className="price-current">${product.price}</span>
                  </div>
                  <button className="btn btn-primary btn-add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>

                <div className="card-subscription">
                  Or <strong>${product.subPrice}</strong> / week <button className="btn-text sub-tag" onClick={() => addToCart({...product, price: product.subPrice, title: product.title + " (Subscribed)"})}>Subscribe 10%</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Features Banner */}
      <section className="shop-features-footer">
        <div className="feature-item">
          <div className="feature-icon-wrapper"><IconDelivery /></div>
          <div className="feature-text">
            <h4>Free Delivery</h4>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper"><IconLeaf /></div>
          <div className="feature-text">
            <h4>100% Organic</h4>
            <p>Certified USDA Organic</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper"><IconPause /></div>
          <div className="feature-text">
            <h4>Skip or Pause Anytime</h4>
            <p>No commitment required</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
