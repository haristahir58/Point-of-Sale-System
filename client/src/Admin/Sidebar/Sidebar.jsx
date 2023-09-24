import React from 'react';
import '../Sidebar/Sidebar.css';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: 'none', paddingTop:'42px' }}>
          <span className="logo">Smart <span>POS</span> Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title1">MAIN</p>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <li>
              <i className="fas fa-tachometer-alt icon"></i>
              <span className='span1'>Dashboard</span>
            </li>
          </Link>
          <p className="title1">LISTS</p>
          <Link to="/admin/supplier" style={{ textDecoration: 'none' }}>
            <li>
              <i className="fas fa-user icon"></i>
              <span className='span1'>Supplier</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: 'none' }}>
            <li>
              <i className="fas fa-shopping-cart icon"></i>
              <span className='span1'>Products</span>
            </li>
          </Link>
          <Link to="/admin/store" style={{ textDecoration: 'none' }}>
            <li>
              <i className="fa fa-store icon"></i>
              <span className='span1'>Store</span>
            </li>
          </Link>
          <Link to="/admin/order" style={{ textDecoration: 'none' }}>
            <li>
              <i className="fas fa-shopping-basket icon"></i>
              <span className='span1'>Orders</span>
            </li>
          </Link>
          <p className="title1">USEFUL</p>
          <li>
            <i className="fas fa-chart-bar icon"></i>
            <span className='span1'>Reports</span>
          </li>
          <li>
            <i className="fas fa-bell icon"></i>
            <span className='span1'>Notifications</span>
          </li>
          <p className="title1">SERVICE</p>
          <li>
            <i className="fas fa-server icon"></i>
            <span className='span1'>System Health</span>
          </li>
          <li>
            <i className="fas fa-file-alt icon"></i>
            <span className='span1'>Logs</span>
          </li>
          <li>
            <i className="fas fa-cog icon"></i>
            <span className='span1'>Settings</span>
          </li>
          <p className="title1">USER</p>
          <li>
            <i className="fas fa-user-circle icon"></i>
            <span className='span1'>Profile</span>
          </li>
          <li>
            <i className="fas fa-sign-out-alt icon"></i>
            <span className='span1'>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
