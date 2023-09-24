import React, { useEffect, useState } from 'react';
import './Widget.css';
import { Link } from 'react-router-dom';

const Widget = ({ type }) => {
  const [productCount, setProductCount] = useState();
  const [soleCount, setSoleCount] = useState();
  const diff = 20;

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const productResponse = await fetch('/product');
      const productData = await productResponse.json();
      setProductCount(productData.length);

      const soleResponse = await fetch('/suppliers');
      const soleData = await soleResponse.json();
      setSoleCount(soleData.length);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  let data;

  switch (type) {
    case 'user':
      data = {
        title: 'SUPPLIERS',
        count: soleCount,
        isMoney: false,
        link: <Link to="/admin/supplier" style={{ fontSize: '12px' }}>See all Suppliers</Link>,
        icon: (
          <i
            className="icon fa fa-user"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <i
            className="icon fa fa-shopping-cart"
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: false,
        link: 'View net earnings',
        icon: (
          <i
            className="icon fa fa-money"
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'products':
      data = {
        title: 'PRODUCTS',
        count: productCount,
        isMoney: true,
        link: <Link to="/admin/products" style={{ fontSize: '12px' }}>See all Products</Link>,
        icon: (
          <i
            className="icon fa fa-shopping-bag"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      };
      break;
    case 'soleDistributors':
      data = {
        title: 'SUPPLIERS',
        count: soleCount,
        isMoney: true,
        link: 'See details',
        icon: (
          <i
            className="icon fa fa-user"
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              color: 'crimson',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {typeof data.count === 'undefined' ? 'N/A' : data.isMoney ? `${data.count}` : data.count}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <i className="fa fa-arrow-up" />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
