import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';

const AddProducts = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    categoryId: '', // Store category ID here
    brand: '',
    description: '',
    imageUrl: '',
    price: '',
  });
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);

  // Fetch categories from your API when the component mounts
  useEffect(() => {
    async function fetchCategories() {
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
    }

    fetchCategories();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    // Update the category in the state with the selected category ID
    setProduct({
      ...product,
      categoryId: e.target.value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('categoryId', product.categoryId); // Use product.category directly
    formData.append('brand', product.brand);
    formData.append('description', product.description);
    formData.append('image', image);
    formData.append('price', product.price);

    console.log(formData);
    console.log(image); // Add this line to check if the image state is set correctly 


    const res = await fetch('/product/new', {
      method: 'POST',
      body: formData, // Correct the fetch options
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('Invalid Product');
      console.error();
    } else {
      window.alert('Product Submission Successful');
      console.log('Product Submission Successful');
      navigate('/admin');
    }
  };

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <NavbarA />
          <div className="top">
            <h1>Add New Product</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt=""
              />
            </div>
            <div className="right">
              <form method="POST">
                <div className="formInput">
                  <label>
                    Image:
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>

                <div className="formInput">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={product.name}
                    onChange={handleInput}
                  />
                </div>

                <div className="formInput">
                  <label>Product Category</label>
                  <select
                    name="categoryId"
                    className="selctOptions"
                    value={product.categoryId}
                    onChange={handleCategoryChange} // Use the category change handler
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="formInput">
                  <label>Brand</label>
                  <input
                    type="text"
                    placeholder="Write Brand Name"
                    name="brand"
                    id="brand"
                    autoComplete="off"
                    value={product.brand}
                    onChange={handleInput}
                  />
                </div>

                <div className="formInput">
                  <label>Description</label>
                  <textarea
                    className="textArea"
                    name="description"
                    id="description"
                    autoComplete="off"
                    value={product.description}
                    onChange={handleInput}
                  ></textarea>
                </div>

                <div className="formInput">
                  <label>Price</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required=""
                    value={product.price}
                    onChange={handleInput}
                  />
                </div>

                <input
                  type="submit"
                  name="send"
                  id="send"
                  value={"Add Products"}
                  className="button"
                  onClick={PostData}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
