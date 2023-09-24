import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NavbarA from '../Navbar/NavbarA';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    // Fetch and display products for the selected category using the 'id' parameter
    async function fetchCategoryProducts() {
      try {
        const response = await fetch(`http://localhost:5000/categories/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryData(data);
        } else {
          console.error('Failed to fetch category products');
        }
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    }

    fetchCategoryProducts();
  }, [id]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavbarA />
        <div className="top">
          <h1>Category: {categoryData.name}</h1>
        </div>
        <div className="list">
          <div className="listContainer">
            <div className="productTableTitle">
            {categoryData.name}
            </div>
            <div className="tableContainer">
              <table className="table">
                <thead>
                  <tr>
                    <th className="tableCell">Product ID</th>
                    <th className="tableCell">Product Name</th>
                    <th className="tableCell">Brand</th>
                    <th className="tableCell">Description</th>
                    <th className="tableCell">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryData.products &&
                    categoryData.products.map((product, index) => (
                      <tr key={product._id}>
                        <td className="tableCell">{index + 1}</td>
                        <td className="tableCell2">{product.name} <img src={`http://localhost:5000/${product?.imageUrl}`} alt={product.name} /></td>
                        <td className="tableCell">{product.brand}</td>
                        <td className="tableCell">{product.description}</td>
                        <td className="tableCell">{product.price}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
