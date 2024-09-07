import React from 'react';
import './Menu.css'; // Import the stylesheet

const Menu = () => {
  const menuItems = [
    { name: "Grilled Chicken", price: "$15.99", description: "Juicy grilled chicken served with a side of vegetables." },
    { name: "Pasta Primavera", price: "$12.99", description: "A blend of fresh vegetables tossed in a light olive oil sauce." },
    { name: "Buffet Salad Bar", price: "$10.99", description: "A variety of fresh salads to choose from." },
    { name: "BBQ Ribs", price: "$18.99", description: "Tender ribs slathered in our house-made BBQ sauce." },
    { name: "Chocolate Lava Cake", price: "$6.99", description: "Warm chocolate cake with a molten center, served with vanilla ice cream." },
    { name: "Cheese Platter", price: "$14.99", description: "A selection of gourmet cheeses and crackers." },
    { name: "Vegetable Stir-Fry", price: "$11.99", description: "Seasonal vegetables stir-fried in a savory sauce." },
    { name: "Seafood Paella", price: "$19.99", description: "A rich blend of seafood, rice, and spices." }
  ];

  return (
    <div className="menu-container">
      <h2 className="section-title" style={{color: "rgb(111, 82, 67)"}}>Our Menu and Pricing</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-price">{item.price}</p>
            <p className="menu-item-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
