import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import PopupForm from './PopupForm';

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const productList = [
    {
      id: 7,
      name: 'Solar Wash Protect (SWP 50)',
      description: '2 in 1 product for cleaning and antistatic protection, developed and certified for photovoltaic panels.',
      image: '/images/products/Solar Wash Protect (SWP 50).png',
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
      image: '/images/products/Asset_9.png',
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
      image: '/images/products/Water_Softening_Agent-removebg-preview.png',
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
      image: '/images/products/Lichen Removal Agent.png',
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
      image: '/images/products/Asset_3.png',
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
      image: '/images/products/Asset_4.png',
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
      image: '/images/products/Jinko Solar.png',
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
      image: '/images/products/Longi Solar.png',
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
      image: '/images/products/M1-3.jpg',
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
      image: '/images/products/Manual Cleaning Brush.jpg',
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
      image: '/images/products/Single Head Cleaning Brush.jpg',
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
      image: '/images/products/Dual Head Cleaning Brush.jpeg',
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
      image: '/images/products/Chemical Sprayer.jpg',
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
      image: '/images/products/Electric Chemical Sprayer.jpg',
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
      image: '/images/products/Safety Jacket Kit.jpg',
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
      image: '/images/products/JA Solar.jpg',
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
      image: '/images/products/SC-L1.jpg',
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
      image: '/images/products/SC-T1.jpg',
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
      image: '/images/products/SC-B!.jpg',
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
      image: '/images/products/Antistatic_Solar_Armor-removebg-preview.png',
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
      image: '/images/products/sun.png',
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
      image: '/images/products/sunm1.jpeg',
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
      image: '/images/products/sunm2.png',
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
      image: '/images/products/Water_Drainage_Clamps__35mm_-removebg-preview.png',
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
      image: '/images/products/Auto Cleaning Sprinkles.jpg',
      price: 110.0,
      stock: true,
      category: 'others',
      link: 'https://www.chemitek.pt/products/lichen-removal-agent',
      Description: 'Three Phase inverter'
    },
  ];

  const categories = ['all', 'cleaning chemical','cleaning kit', 'brushes', 'robots', 'panels', 'inverters', 'others'];
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSubmitForm = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic (e.g., sending data to the server)
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // animation easing
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);


  useEffect(() => {
    // Add the fadeIn and zoomIn styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      .modal { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, 0.75); animation: fadeIn 0.3s ease-in-out; }
      .modal img { max-width: 90%; max-height: 90%; object-fit: contain; animation: zoomIn 0.3s ease-in-out; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const filteredProducts = productList.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });  

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900"  data-aos="fade-up">Our Products</h1>
        {/* Category Buttons */}
        <div className="flex justify-center mb-6">
  {/* Category buttons */}
  <div className="category-buttons flex gap-4" data-aos="fade-up">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => handleCategoryChange(category)}
        className={`px-4 py-2 rounded-md text-white font-semibold ${
          selectedCategory === category
            ? 'bg-slate-700 hover:bg-slate-300'
            : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
        }`}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
</div>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-6" data-aos="fade-up">
          <input
            type="text"
            placeholder="⌕ Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-lg w-full sm:w-1/2"
          />
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="flex flex-col md:flex-row justify-between gap-4 items-start bg-white rounded-lg shadow text-gray-500"
      data-aos="fade-up"
    >
      <div className="relative w-full md:w-48 flex justify-center items-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none cursor-pointer"
          onClick={() => handleImageClick(product.image)}
        />
      </div>
      <div className="flex-auto p-6" data-aos="fade-up">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold dark:text-gray-500">
            {product.name}
          </h1>
          <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
            Rs.{product.price.toFixed(2)}/=
          </div>
          <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
            {product.stock ? 'In stock' : 'Out of stock'}
          </div>
        </div>

        {/* Align the button to the left */}
        <div className="flex py-2 text-sm font-medium justify-start">
  <button
    type="button"
    onClick={() => handleBuyNowClick(product)}
    className="py-1 px-3 border-2 border-slate-300 text-blue-600 hover:bg-slate-400 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out text-sm font-medium rounded-full"
  >
    Buy Now
  </button>
</div>



        <hr/>
        {/* Group the About Product Link and Description to align them to the left */}
        <div className="Flex justify-center items-left">
          <div className="flex">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-700 hover:underline"
            >
              About Product
            </a>
          </div>
          {/* <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 text-left">
            {product.description}
          </p> */}
          
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Modal for full image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImage} alt="Full view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Popup Form for buying */}
      <PopupForm
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        onSubmit={handleSubmitForm}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;