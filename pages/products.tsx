/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
export default function Prodcuts() {
  return (
    <Layout  header={1} className="home-one" footer={1} noHeader={undefined} SideBar={undefined}>
        <PageBanner titleHtml={`Products`} titleText="Products" />
        <div className="container_main">
            <div className="text_about">We provide aerial solutions for hobby, GIS and Agricultural sectors. The products are indigenously designed and custom assembled.</div>
            <div className="container_box1">
                <img src="assets/images/products/airdoe.png" alt="airdoe" />
                <div className="container_text">
                    <div className="text_airdoe">Airdoe</div>
                    <div className="text_paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <div className="text_spec">Specifications</div>
                    <div className="text_speclist">
                        <ul>
                            <li>Lightweight fixed wing plane</li>
                            <li>Weighs less than 150g </li>
                            <li>Coreless motors and modular components </li>
                            <li>Android app-based control</li>
                        </ul>
                    </div>
                    <div className="btnbuy">
                        <button>Buy Now</button>
                    </div>
                </div>
                
            </div>
            <div className="container_box2">

                <div className="container_outerbox1">
                    <div className="container_img2">
                        <img src="assets/images/products/skyper.png" alt="skyper" />
                    </div>
                    <div className="text_details">
                        <div className="text_skyper">Skyper</div>
                        <div className="text_paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor</div>
                        <div className="text_amount">&#8377; 1500</div>
                    </div>               
                </div>

                <div className="container_outerbox2">
                    <div className="container_img2">
                        <img src="assets/images/products/skyper.png" alt="skyper" />
                    </div>
                    <div className="text_details">
                        <div className="text_skyper">Skyper</div>
                        <div className="text_paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor</div>
                        <div className="text_amount">&#8377; 1500</div>
                    </div>               
                </div> 

                <div className="container_outerbox3">
                    <div className="container_img2">
                        <img src="assets/images/products/skyper.png" alt="skyper" />
                    </div>
                    <div className="text_details">
                        <div className="text_skyper">Skyper</div>
                        <div className="text_paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor</div>
                        <div className="text_amount">&#8377; 1500</div>
                    </div>               
                </div> 

            </div>
        </div>
    </Layout>   
  );
}
