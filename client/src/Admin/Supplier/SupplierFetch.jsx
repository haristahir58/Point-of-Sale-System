import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';

const SupplierFetch = () => {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    getSupplier();
  }, []);

  const getSupplier = async () => {
    let result = await fetch('/suppliers');
    result = await result.json();
    setSupplier(result);
  };

  const deleteSupplier = async (id) => {
    let result = await fetch(`/suppliers/${id}`, {
      method: 'Delete',
    });

    if (result.status === 200) {
      window.alert('Supplier is Deleted');
      navigate('/admin');
    } else {
      console.log('Error deleting Supplier');
    }
  };

  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <NavbarA />
          <div className="top">
            <h1>Supplier </h1>
          </div>
          {/* Remove the extra <div> here */}
          <div className="list">
            <div className="listContainer">
              <div className="productTableTitle">
                Supplier
                <Link to="/admin/supplier/new" style={{ textDecoration: 'none' }} className="newLink">
                  Add New Supplier
                </Link>
              </div>
              <div className="tableContainer">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="tableCell">Supplier ID</th>
                      <th className="tableCell">Supplier Name</th>
                      <th className="tableCell">Supplier Address</th>
                      <th className="tableCell">Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplier.map((item, index) => (
                      <tr key={item._id}>
                        <td className="tableCell">{index}</td>
                        <td className="tableCell2">{item.name}</td>
                        <td className="tableCell">{item.address}</td>
                        <td className="tableCell">
                          <div className="deleteButton" onClick={() => deleteSupplier(item._id)}>
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
        </div>
      </div>
    </>
  );
};

export default SupplierFetch;
