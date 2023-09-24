import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';
import './StoreFetch.css';

const StoreFetch = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);

  useEffect(() => {
    getStore();
  }, []);

  const getStore = async () => {
    try {
      const response = await fetch('/stores');
      if (response.status === 200) {
        const result = await response.json();
        setStore(result);
      } else {
        console.error('Error fetching stores');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteStore = async (id) => {
    try {
      const response = await fetch(`/stores/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        window.alert('Store is Deleted');
        navigate('/admin');
      } else {
        console.error('Error deleting Store');
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
            <h1>Store</h1>
          </div>
          <>
            <div className="list">
              <div className="listContainer">
                <div className="productTableTitle">
                  Store
                  <Link
                    to="/admin/store/new"
                    style={{ textDecoration: 'none' }}
                    className="newLink"
                  >
                    Add New Store
                  </Link>
                </div>
                <div className="tableContainer">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="tableCell">Store ID</th>
                        <th className="tableCell">Store Name</th>
                        <th className="tableCell">Location</th>
                        <th className="tableCell">Address</th>
                        <th className="tableCell">Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {store.map((item, index) => (
                        <tr key={item._id}>
                          <td className="tableCell">{index}</td>
                          <td className="tableCell2">{item.name}</td>
                          <td className="tableCell">{item.location}</td>
                          <td className="tableCell">{item.address}</td>
                          <td className="tableCell">
                            <div
                              className="deleteButton"
                              onClick={() => deleteStore(item._id)}
                            >
                              Delete
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default StoreFetch;
