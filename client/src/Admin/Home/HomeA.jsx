import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarA from '../Navbar/NavbarA'
import "./HomeA.css"
import SupplierFetch from '../Supplier/SupplierFetch'
import ProductsManage from '../Products/ProductsManage'
import Widget from '../Widget/Widget'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <NavbarA/>
          <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="products"/>
          </div>
          <div className="charts">
                <Featured/>
                <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>
        
        </div>
    </div>
  )
}

export default Home