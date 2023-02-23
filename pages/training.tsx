import React from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
export default function Training() {
  return (
    <Layout  header={1} className="home-one" footer={1} noHeader={undefined}>
      <PageBanner titleHtml={`Training`} titleText="About" />
      <section className="main_container">
        <div className="mainBox">
            <div className="innerBox">
                <div className="boxOne_boxTwo" >
                <div className="boxOne">
                    <div className="sideBarDet">
                        <div className="sideName">
                            <h3>Courses</h3>
                        </div>
                            
                        <div className="detTwo">
                            <ul>
                                <li><a href="#">AeroFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                                <li><a href="#">MultiFloat</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="sideBarImg">
                        <img src="assets/images/features/feature1.png" alt="feature1" />
                        <div className="textImg">Fundamentals of graphic design</div>
                    </div> */}
                </div>

                <div className="box2"> 
                
                    <div className="innerBoxOne">
                    <div className="img1">
                        <img src="assets/images/training/Black_Square.png" alt="" />
                        <div className="textFormat">
                            <h6>Aero Float Begineer</h6>
                            <div className="series">
                                <p>Aero Float Series</p>
                            </div>
                        </div>
                    </div>


                    <div className="img1">
                        <img src="assets/images/training/Black_Square.png" alt="" />
                        <div className="textFormat">
                            <h6>Aero Float Advanced</h6>
                            <p>Aero Float Series</p>
                        </div>
                    </div>

                    <div className="img1">
                        <img src="assets/images/training/Black_Square.png" alt="" />
                        <div className="textFormat">
                            <h6>Aero Float Professional</h6>
                            <p>Aero Float Series</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>

                <div className="box3">
                    <div className="imgBoxOne">
                        <img src="assets/images/training/Black_Rec.png" alt="" />
                    
                    </div>
                    {/* <div className="ratings">
                        <p>5 Stars</p>
                        <p className="numRating">5.0</p>
                        <p className="pRating">12,246 ratings</p>
                    </div> */}
                    {/* <div className="contents"> */}
                        <div className="contentDetails">
                            <h4 className="text">Aero Float Beginner</h4>
                            <h6 className="makeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            <div className="sideBtn">
                                <button>Enroll for Free</button>
                                {/* <div className="textDetails">
                                    <h6 className="enrollDetails">Enroll to start your <span>7-day</span> full access free trail</h6>
                                    <h6 className="enrollDate">Starts Dec 16, 2019</h6>
                                </div> */}
                            </div>
                        </div>
                    {/* </div> */}
                    
                    <div className="offersDivOne">
                        <div className="offerOne">
                            <img src="assets/images/training/Black_Circle.png" alt="" />
                            <div className="offerDetails">
                                <h6 className="pDetails">Educational Kit Included</h6>
                                <h6 className="startDetails">Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </h6>
                            </div>
                        </div>
                        <div className="offerOne">
                            <img src="assets/images/training/Black_Circle.png" alt="" />
                            <div className="offerDetails">
                                <h6 className="pDetails">Educational Kit Included</h6>
                                <h6 className="startDetails">Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </h6>
                            </div>
                        </div>
                        <div className="offerOne">
                            <img src="assets/images/training/Black_Circle.png" alt="" />
                            <div className="offerDetails">
                                <h6 className="pDetails">Educational Kit Included</h6>
                                <h6 className="startDetails">Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </h6>
                            </div>
                        </div>
                        <div className="offerOne">
                            <img src="assets/images/training/Black_Circle.png" alt="" />
                            <div className="offerDetails">
                                <h6 className="pDetails">Educational Kit Included</h6>
                                <h6 className="startDetails">Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </h6>
                            </div>
                        </div>
                    </div>
                    <h6 className="end">Lorem ipsum dolor sit amet, consectetur sit amet, consectetur Lorem ipsum dolor sit amet, consectetur sit amet, consectetur </h6> 
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
}
