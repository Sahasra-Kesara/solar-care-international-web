import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const productList = [
    {
      id: 7,
      name: 'Solar Wash Protect (SWP 50)',
      description: '2 in 1 product for cleaning and antistatic protection, developed and certified for photovoltaic panels.',
      image: '/Images/products/Solar Wash Protect (SWP 50).png',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/solar-wash-protect-concentrated',
      Description: 'Add your Description'
    },
    {
      id: 8,
      name: 'SolarCleano F1',
      description: 'Your all-in-one solar panel cleaning solution. The SolarCleano F1 is a remote-controlled solar panel cleaning robot with the highest cleaning capacity on the market. Suitable for wet and dry cleaning on any type of solar installations.',
      image: '/Images/products/Asset_9.png',
      price: 110.0,
      stock: true,
      category: 'robots',
      link: 'https://solarcleano.com/en/products/SC-F1.jpg',
      Description: 'Add your Description'
    },
    {
      id: 9,
      name: 'Water Softening Agent',
      description: 'Biodegradable treatment for hard and very hard water. Avoids limestone stains on the modules.',
      image: '/Images/products/Water_Softening_Agent-removebg-preview.png',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/water-softnening-agent',
      Description: 'Add your Description'
    },
    {
      id: 1,
      name: 'Lichen Removal Agent',
      description: 'Biodegradable concentrated removal agent for lichens, fungi and moss.',
      image: '/Images/products/Lichen Removal Agent.png',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 21,
      name: 'Metal Oxides Removal Agent',
      description: 'Biodegradable concentrated removal agent for metal oxides residues.',
      image: 'https://res.cloudinary.com/dwf8ifbzs/image/upload/v1729672791/SC-F1_bibj1m.jpg',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/metal-oxides-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 2,
      name: 'Cement Removal Agent',
      description: 'Biodegradable concentrated removal agent for cement dust, stone dust, gypsum and other alkali contaminants.',
      image: '/Images/products/Asset_3.png',
      price: 110.0,
      stock: true,
      category: 'cleaners',
      link: 'https://www.chemitek.pt/products/cement-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 3,
      name: 'Paint Removal Agent',
      description: 'Biodegradable concentrated removal agent for water and solvent based paint residues.',
      image: '/Images/products/Asset_4.png',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/paint-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 4,
      name: 'Jinko Solar',
      description: 'This is a great product.',
      image: '/Images/products/Jinko Solar.png',
      price: 110.0,
      stock: true,
      category: 'panels',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 5,
      name: 'Longi Solar',
      description: 'This is a great product.',
      image: '/Images/products/Longi Solar.png',
      price: 110.0,
      stock: true,
      category: 'panels',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 6,
      name: 'SolarCleano M1',
      description: 'This is a great product.',
      image: '/Images/products/M1-3.jpg',
      price: 110.0,
      stock: true,
      category: 'robots',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 10,
      name: 'Manual Cleaning Brush',
      description: 'This is a great product.',
      image: '/Images/products/Manual Cleaning Brush.jpg',
      price: 110.0,
      stock: true,
      category: 'brushes',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 11,
      name: 'Single Head Cleaning Brush',
      description: 'This is a great product.',
      image: '/Images/products/Single Head Cleaning Brush.jpg',
      price: 110.0,
      stock: true,
      category: 'brushes',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 12,
      name: 'Dual Head Cleaning Brush',
      description: 'This is a great product.',
      image: '/Images/products/Dual Head Cleaning Brush.jpeg',
      price: 110.0,
      stock: true,
      category: 'brushes',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 13,
      name: 'Chemical Sprayer',
      description: 'This is a great product.',
      image: '/Images/products/Chemical Sprayer.jpg',
      price: 110.0,
      stock: true,
      category: 'cleaning kit',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 14,
      name: 'Electric Chemical Sprayer',
      description: 'This is a great product.',
      image: '/Images/products/Electric Chemical Sprayer.jpg',
      price: 110.0,
      stock: true,
      category: 'cleaning kit',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 15,
      name: 'Safety Jacket Kit',
      description: 'This is a great product.',
      image: '/Images/products/Safety Jacket Kit.jpg',
      price: 110.0,
      stock: true,
      category: 'cleaning kit',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 16,
      name: 'JA Solar',
      description: 'This is a great product.',
      image: '/Images/products/JA Solar.jpg',
      price: 110.0,
      stock: true,
      category: 'panels',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 17,
      name: 'SolarCleano L1',
      description: 'This is a great product.',
      image: '/Images/products/SC-L1.jpg',
      price: 110.0,
      stock: true,
      category: 'robots',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 18,
      name: 'SolarCleano T1',
      description: 'This is a great product.',
      image: '/Images/products/SC-T1.jpg',
      price: 110.0,
      stock: true,
      category: 'robots',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 19,
      name: 'SolarCleano B1',
      description: 'This is a great product.',
      image: '/Images/products/SC-B!.jpg',
      price: 110.0,
      stock: true,
      category: 'robots',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Add your Description'
    },
    {
      id: 20,
      name: 'Antistatic Solar Armor',
      description: 'Easy to apply antistatic coating, developed and certified for photovoltaic solar panels.',
      image: '/Images/products/Antistatic_Solar_Armor-removebg-preview.png',
      price: 110.0,
      stock: true,
      category: 'cleaning chemical',
      link: 'https://www.chemitek.pt/products/antistatic-solar-armor',
      Description: 'Add your Description'
    },
    {
      id: 22,
      name: 'SUN2000-2/3/3.68/4/4.6/5/6KTL-L1',
      description: 'This is a great product.',
      image: '/Images/products/sun.png',
      price: 110.0,
      stock: true,
      category: 'inverters',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Single Phase inverter'
    },
    {
      id: 23,
      name: 'SUN2000-3/4/5/6/8/10KTL-M1',
      description: 'This is a great product.',
      image: '/Images/products/sunm1.jpeg',
      price: 110.0,
      stock: true,
      category: 'inverters',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Three Phase inverter'
    },
    {
      id: 24,
      name: 'SUN2000-12/15/17/20KTL-M2',
      description: 'This is a great product.',
      image: '/Images/products/sunm2.png',
      price: 110.0,
      stock: true,
      category: 'inverters',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Three Phase inverter'
    },
    {
      id: 25,
      name: 'Water Drainage Clamps (35mm)',
      description: 'This is a great product.',
      image: '/Images/products/Water_Drainage_Clamps__35mm_-removebg-preview.png',
      price: 110.0,
      stock: true,
      category: 'panels',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Three Phase inverter'
    },
    {
      id: 26,
      name: 'Auto Cleaning Sprinkles',
      description: 'This is a great product.',
      image: '/Images/products/Auto Cleaning Sprinkles.jpg',
      price: 110.0,
      stock: true,
      category: 'others',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Three Phase inverter'
    },
  ];

  // Filter products based on category and search term
  const filteredProducts = productList.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle image click to show popup
  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="product-container">
      {/* Category Filter */}
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="cleaning chemical">Cleaning Chemicals</option>
          <option value="robots">Robots</option>
          <option value="panels">Solar Panels</option>
          <option value="inverters">Inverters</option>
          <option value="cleaning kit">Cleaning Kits</option>
          <option value="brushes">Brushes</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card" data-aos="fade-up">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleImageClick(product)}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {/* Popup for Product Details */}
      {isPopupVisible && selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={closePopup}>X</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer">View More</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;