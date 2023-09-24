import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarA from '../Navbar/NavbarA';
import Sidebar from '../Sidebar/Sidebar';


const AddSupplier = () => {
  const navigate = useNavigate();

    let name,value;
    const [supplier, setSupplier] = useState({
        name:"", address:""
    });

    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setSupplier({...supplier, [name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault();
        const {name, address} = supplier;
   
        const res = await fetch("/suppliers/new",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name,address
        })
        
      });
      
      const data = await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid suppliers");
        console.log("Invalid suppliers")
      }
      else{
        window.alert("supplier Submission Successfull");
        console.log("supplier Submission Successfull");
        navigate("/admin/supplier");
      }
    
    };

  return (
    <>
      <div className="new">
        <Sidebar/>
        <div className="newContainer">
          <NavbarA/>
          <div className="top">
            <h1>Add New Supplier</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form method='POST'>
                <div className="formInput">
                  <label>Supplier Name</label>
                  <input type="text" placeholder='Write Store Name' name="name" id="name" value={supplier.name}  onChange={handleInputs} autoComplete='off' />
                </div>


                <div className="formInput">
                  <label>Address</label>
                  <textarea className='textArea' placeholder='Enter Address' name="address" id="address" value={supplier.address}  onChange={handleInputs}   autoComplete='off'></textarea>
                </div>

                <input type="submit" name='send' id='send' value={"Add Supplier"} onClick={PostData} className="button" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSupplier;
