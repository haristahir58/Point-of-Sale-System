import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';
import './Store.css';

const Store = () => {
  const navigate = useNavigate();

  let name, value;
  const [store, setStore] = useState({
    name: '',
    location: '',
    address: '',
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStore({ ...store, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, location, address } = store;

    try {
      const res = await fetch('/stores/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          address,
        }),
      });

      const data = await res.json();
      if (res.status === 201 && data) {
        window.alert('Store Submission Successful');
        navigate('/admin/store');
      } else {
        window.alert('Invalid store');
        console.error('Invalid store');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <NavbarA />
          <div className="top">
            <h1>Add New Store</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form method="POST">
                <div className="formInput">
                  <label>Store Name</label>
                  <input
                    type="text"
                    placeholder="Write Store Name"
                    name="name"
                    id="name"
                    value={store.name}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>

                <div className="formInput">
                  <label>Select Location</label>
                  <select
                    name="location"
                    id="location"
                    className="selctOptions"
                    value={store.location}
                    onChange={handleInputs}
                  >
                    <option value="Rawalpindi, Pakistan">Rawalpindi, Pakistan</option>
                    <option value="Lahore, Pakistan">Lahore, Pakistan</option>
                    <option value="Islamabad, Pakistan">Islamabad, Pakistan</option>
                    <option value="Karachi, Pakistan">Karachi, Pakistan</option>
                    <option value="Balochistan, Pakistan">Balochistan, Pakistan</option>
                    <option value="Peshawar, Pakistan">Peshawar, Pakistan</option>
                    <option value="Northern District, Pakistan">Northern District, Pakistan</option>
                  </select>
                </div>

                <div className="formInput">
                  <label>Address</label>
                  <textarea
                    className="textArea"
                    placeholder="Enter Address"
                    name="address"
                    id="address"
                    autoComplete="off"
                    value={store.address}
                    onChange={handleInputs}
                  ></textarea>
                </div>

                <input
                  type="submit"
                  name="send"
                  id="send"
                  value="Add Store"
                  onClick={PostData}
                  className="button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
