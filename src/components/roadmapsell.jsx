import React, { useState, useEffect, useRef } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from "react-countdown";
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LiveAuction from './layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'
import img2 from '../assets/images/avatar/avt-11.jpg'
import img3 from '../assets/images/avatar/avt-1.jpg'
import img4 from '../assets/images/avatar/avt-5.jpg'
import img5 from '../assets/images/avatar/avt-7.jpg'
import img6 from '../assets/images/avatar/avt-8.jpg'
import img7 from '../assets/images/avatar/avt-2.jpg'
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg'
import graph from '../assets/images/svg/graph.png'
import { Button, Form } from 'react-bootstrap';



const RoadMapSell = () => {


    return (
        <div className='item-details'>
<br />
<br />
<hr />


            <div className="tf-section tf-item-details">

            <div className="heading mg-bt-12">
                                <h2 className="tf-title">Join the $MXDT Token PreSales!</h2>
                            </div>

                <div className="themesflat-container">






                <div className="container-fluid">
  <div className="container p-5">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card card1 h-100 p-5">
          <div className="card-body">
            <h3 className="card-title">Pre-Sale</h3>
            <br />
            <br />
            <span className="h2">Price: 0.01 USDC</span>
            <br />
            <br />
            <div className="d-grid my-3">
              {/* <a href='https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137' className="btn btn-outline-dark btn-block">Buy Now</a> */}
            </div>
            <ul>
              <li>Whitelist only</li>
              <li>Sold out!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card card2 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">Pre-Sale 1</h3>
            <br />
            <br />
            <span className="h2">Price: 0.02 USDC</span>
            <br />
            <br />
            <div className="d-grid my-3">
            <a href='https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137' target="_blank" className="btn btn-outline-dark btn-block buy-a">Buy Now</a>
            </div>
            <ul>
              <li>Start: August 1 - 10</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card card3 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">Pre-Sale 2</h3>
            <br />
            <br />
            <span className="h2">Price: 0.02 USDC</span>
            <br />
            <br />
            <div className="d-grid my-3">
            <a href='https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137' target="_blank" className="btn btn-outline-dark btn-block buy-a">Coming Soon</a>
            </div>
            <ul>
              <li>Start: August 15 - 22</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 mb-4">
        <div className="card card3 h-100 p-5">
          <div className="card-body">
          <h3 className="card-title">IDO</h3>
            <br />
            <br />
            <span className="h2">Price: 0.08 USDC</span>
            <br />
            <br />
            <div className="d-grid my-3">
            <a href='https://app.sushi.com/miso/0xAc6d5AeF8F56177f0f882cE1123F8AD1737f9601?chainId=137' target="_blank" className="btn btn-outline-dark btn-block buy-a">Coming Soon</a>
            </div>
            <ul>
              <li>Start: October 1 - 15</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





                </div>
            </div>


        </div>
    );
}

export default RoadMapSell;
