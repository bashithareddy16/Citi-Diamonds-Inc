// public/app.js

import React, { useState, useEffect } from 'react';

// Sample store data
const stores = [
  { id: 1, name: "Location A", address: "123 Main St, City A", phone: "123-456-7890" },
  { id: 2, name: "Location B", address: "456 Elm St, City B", phone: "234-567-8901" },
  { id: 3, name: "Location C", address: "789 Oak St, City C", phone: "345-678-9012" },
  { id: 4, name: "Location D", address: "101 Pine St, City D", phone: "456-789-0123" },
  { id: 5, name: "Location E", address: "202 Maple St, City E", phone: "567-890-1234" },
];

// Sample product catalog
const products = [
  { id: 1, name: "Diamond Ring", price: 1200, image: "/images/ring.jpg" },
  { id: 2, name: "Gold Necklace", price: 800, image: "/images/necklace.jpg" },
  { id: 3, name: "Silver Bracelet", price: 300, image: "/images/bracelet.jpg" },
];

// Function to fetch stores from backend
const fetchStores = async () => {
  const response = await fetch('/api/stores');
  return response.json();
};

// Function to fetch products from backend
const fetchProducts = async () => {
  const response = await fetch('/api/products');
  return response.json();
};

// Contact form submission handler
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // Process form submission
  console.log('Form submitted: ', formData);
};

const App = () => {
  const [storeData, setStoreData] = useState(stores);
  const [productData, setProductData] = useState(products);

  useEffect(() => {
    const loadStores = async () => {
      const storesFromAPI = await fetchStores();
      setStoreData(storesFromAPI);
    };

    loadStores();
  }, []);

  return (
    <div>
      <h1>Welcome to the Jewelry Store</h1>
      <h2>Our Locations</h2>
      <ul>
        {storeData.map(store => (
          <li key={store.id}>{store.name} - {store.address} - {store.phone}</li>
        ))}
      </ul>
      <h2>Product Catalog</h2>
      <ul>
        {productData.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} width="100" />
            <p>{product.name} - ${product.price}</p>
          </li>
        ))}
      </ul>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;