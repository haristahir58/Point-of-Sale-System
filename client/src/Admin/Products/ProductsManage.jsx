import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';

const ProductsManage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/product');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`/product/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        window.alert('Product is Deleted');
        // Refresh the product list after successful deletion
        fetchProducts();
      } else {
        console.error('Error deleting product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <NavbarA />
          <div className="top">
            <h1>Products</h1>
          </div>
          <div className="list">
            <div className="listContainer">
              <div className="productTableTitle">
                Products
                <Link to="/admin/products/new" style={{ textDecoration: 'none' }} className="newLink">
                  Add New Product
                </Link>
              </div>
              <div className="tableContainer">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="tableCell">Product ID</th>
                      <th className="tableCell">Product Name</th>
                      <th className="tableCell">Category</th>
                      <th className="tableCell">Brand</th>
                      <th className="tableCell">Description</th>
                      <th className="tableCell">Price</th>
                      <th className="tableCell">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product._id}>
                        <td className="tableCell">{index + 1}</td>
                        <td className="tableCell2">
                          {product.name}
                          <img src={`http://localhost:5000/${product?.imageUrl}`} alt={product.name} />
                        </td>
                        <td className="tableCell">
                          {/* Render the category name here */}
                          {categories.find((cat) => cat._id === product.category)?.name}
                        </td>
                        <td className="tableCell">{product.brand}</td>
                        <td className="tableCell">{product.description}</td>
                        <td className="tableCell">{product.price}</td>
                        <td className="tableCell">
                          <div className="deleteButton" onClick={() => deleteProduct(product._id)}>
                            Delete
                          </div>
                          <Link to={`/admin/products/${product._id}`} className="buttonLink">
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsManage;
