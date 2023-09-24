import React from "react";
import { Link, NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Offer1 from '../Images/offer-1.jpg'
import User1 from '../Images/user1.jpg'
import User2 from '../Images/user2.jpg'
import User3 from '../Images/user3.jpg'
import Pepsi from '../Images/Pepsi-Logo.png'
import Paypal from '../Images/paypal.png'
import Samsung from '../Images/samsung-logo.png'
import Daraz from '../Images/daraz.png'
import Philips from '../Images/philips-logo-0.jpg'
import './Style/Home.css'
import AboutBack from '../Images/about-back.jpg'

export default function Home() {
  return (
    <div>
      <>
      <Navbar/>
          <div className="container">
            <div className="row">

              <div className="col-2">
                <h6 className="text-primary text-uppercase font-weight-bold">
                  About Us
                </h6>
                <h1 className="mb-4">End-to-end supply chain solutions</h1>
                <p className="mb-4">
                  At Smart POS, we specialize in providing
                  comprehensive supply chain solutions for businesses of all
                  sizes. We believe in building long-term
                  relationships with our clients based on trust, integrity, and
                  commitment to excellence. Whether you're a small startup or a
                  large corporation, we have the expertise and resources to meet
                  your unique supply chain needs. Contact us today to learn how
                  we can help you streamline your operations and achieve
                  success.
                </p>

              </div>
              <div className="col-2">
                <img src={AboutBack} alt="" />
              </div>
            </div>
          </div>


    <div class="offer">
      <div class="small-container">
        <div class="row">
            <div class="col-2">
                <img src={Offer1} class="offer-img"/>
            </div>
            <div class="col-2">
                <p>Exclusively Available on LuckyStore</p>
                <h1>50% OFF U8 Smart Watch 1.5</h1>
                <small>Capacitive Touch Screen TFT LCD for Men & Women with adjustable brightness, so everything is clear.</small>
                
               <br/> <a href="" class="btn">Buy Now</a>

            </div>
        </div>
    </div>
</div>


<div class="testimonial">
    <div class="small-container">
        <div class="row">
           
            <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam libero iure tempora ullam sapiente, ipsam inventore voluptate delectus </p>

            <div class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <img src={User1} alt=""/>
            <h3>Haris Tahir</h3>
           </div>


           <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam libero iure tempora ullam sapiente, ipsam inventore voluptate delectus </p>

            <div class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <img src={User2} alt=""/>
            <h3>Abdullah Tahir</h3>
           </div>



           <div class="col-3">
            <i class="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam libero iure tempora ullam sapiente, ipsam inventore voluptate delectus </p>

            <div class="rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <img src={User3} alt=""/>
            <h3>Shakir Khan</h3>
           </div>


        </div>
    </div>
</div>

<div class="brands">
    <div class="small-container">
        <div class="row">
            <div class="col-5">
                <img src={Daraz}/>
            </div>
            <div class="col-5">
                <img src={Samsung}/>
            </div>
            <div class="col-5">
                <img src={Pepsi}/>
            </div>
            <div class="col-5">
                <img src={Paypal}/>
            </div>
            <div class="col-5">
                <img src={Philips}/>
            </div>
        </div>
    </div>
</div>
     <Footer/>
      </>
    </div>
  );
}
