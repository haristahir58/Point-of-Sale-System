import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import Home from './Home/Home'
import UserLogin from './Home/UserLogin'
import UserRegistration from './Home/UserRegistration'
import AdminLogin from './Home/UserLogin';
import Service from './Home/Service';
import HomeA from './Admin/Home/HomeA'
import Store from './Admin/Store/Store';
import StoreFetch from './Admin/Store/StoreFetch';
import ProductsManage from './Admin/Products/ProductsManage';
import AddProducts from './Admin/Products/AddProducts';
import UpdateProducts from './Admin/Products/UpdateProduct';
import SupplierFetch from './Admin/Supplier/SupplierFetch';
import AddSupplier from './Admin/Supplier/AddSupplier';
import CategoryProducts from './Admin/Category/CategoryProducts';



function App() {
  return (
    <>
<Router>
      <div>
<Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/user/login" element={<UserLogin/>} />
          <Route exact path="/user/register" element={<UserRegistration />} />
          <Route exact path="/services" element={<Service />} />


            <Route exact path='/admin' element={<HomeA/>}/>
            <Route exact path="admin/login" element={<AdminLogin />} />

            <Route path='/admin/products'>
              <Route index element={<ProductsManage />} />
              <Route path="/admin/products/:id" element={<UpdateProducts />} />
              <Route path="/admin/products/new" element={<AddProducts />} />
            </Route>


            <Route exact path="admin/store" element={<StoreFetch />} />
            <Route exact path="admin/store/new" element={<Store />} />
            
            <Route exact path="admin/supplier" element={<SupplierFetch />} />
            <Route exact path="admin/supplier/new" element={<AddSupplier />} />

            <Route exact path="/categories/:id" element={<CategoryProducts/>} />


                  
          
          
          
          </Routes>

      </div>
    </Router>


  </>
  );
}

export default App;
