import React from "react";

function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "₹2,499", image: "wireless headphones.avif" },
    { id: 2, name: "Smart Watch", price: "₹4,999", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Laptop", price: "₹55,000", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mobile Phone", price: "₹15,999", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div style={{ background: "#f3f3f3", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <div style={{ background: "black", color: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <h2>Amazon Clone</h2>
        <input placeholder="Search..." style={{ width: "50%", padding: "5px" }} />
        <button>Search</button>
      </div>

      {/* Banner */}
      <div style={{ background: "#90cdf4", padding: "40px", textAlign: "center", fontSize: "24px" }}>
        Welcome to Amazon Clone
      </div>

      {/* Products */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ background: "white", padding: "10px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ background: "black", color: "white", textAlign: "center", padding: "10px" }}>
        © 2026 Amazon Clone
      </div>
    </div>
  );
}

export default App;
