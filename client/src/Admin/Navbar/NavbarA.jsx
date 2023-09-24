import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import '../Navbar/Navbar.css';

const NavbarA = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };

  useEffect(() => {
    // Fetch categories from your API when the component mounts
    async function fetchCategories() {
      try {
        const response = await fetch('http://localhost:5000/categories'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <i className="fa fa-search"></i> {/* Search icon */}
        </div>
        <div className="items">
          {/* Categories Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            {/* Replace button with NavLink */}
            <NavLink to="/categories" className="dropbtn">
              Categories
            </NavLink>
            {isOpen2 && (
              <div className="dropdown-content">
                {categories.map((category) => (
                  <NavLink
                    key={category._id}
                    to={`/categories/${category._id}`} // Replace with your category route
                  >
                    {category.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* End Categories Dropdown */}
          <div className="item">
            <i className="fa fa-language icon"></i> {/* Language icon */}
            English
          </div>
          <div className="item">
            <i className="fa fa-moon-o icon"></i> {/* Moon icon for brightness */}
          </div>
          <div className="item">
            <i className="fa fa-bell icon"></i> {/* Notification icon */}
            <div className="counter">1</div>
          </div>
          <div className="item">
            <i className="fa fa-th-list icon"></i> {/* List icon */}
          </div>
          <div className="item">
            <img
              src="https://zoomstudio.com.au/wp-content/uploads/jonathan-Simpson-5.jpg.webp"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarA;
