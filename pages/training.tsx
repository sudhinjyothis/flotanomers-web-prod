import Link from "next/link";
import React from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
export default function Training() {
  return (
    <Layout
      header={1}
      className="home-one"
      footer={1}
      noHeader={undefined}
      SideBar={undefined}
    >
      <PageBanner titleHtml={`Training`} titleText="About" />
      <section className="statistics-area-five py-130">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className=" mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Training</span>
                  <h2>
                    Discover various courses and training programs to help you.
                  </h2>
                </div>
                <p>
                  The Drone Training Academy (Remote Pilot Training
                  Organization) is a joint venture launched together by CSC
                  Academy, an educational vertical under the CSC e-Governance
                  Services India Limited, an entity working on Digital India
                  Mission Projects, under the Ministry of Electronics and
                  Information Technology, Government of India. CSC Academy is a
                  publicly invested learning institution that provides access to
                  professional learning for learners of diverse backgrounds and
                  educational needs. To keep itself going and in tune with the
                  changed requirements of the society, CSC Academy has been
                  offering courses on Multirotor Drones. CSC Academy has applied
                  for the license to DGCA to start a Drone Training Academy
                  named “CSC UDAAN Academy” in collaboration with VLEs. Thus,
                  this new joint venture has now been started in private public
                  partnership; the CSC e-Governance Services India Limited and
                  Flotanomers R&D Pvt Ltd., in Mangalore. Flotanomers R&D Pvt
                  Ltd is a UAV-based startup in Mangalore, Karnataka, out of
                  sheer passion for innovation in the field of aerials and
                  robotics. They are committed to indigenously developing “Make
                  in India” relevant aerial and robotic solutions by fostering a
                  culture of innovation and creativity. They also offer a wide
                  range of UAV services and training ranging from aerial land
                  surveys and mapping, disaster management, agricultural
                  surveys, to cinematography and customization services. And as
                  the world keeps disrupting with more advancements, their
                  mission is to provide only the best, safe, feasible, and
                  solution centric products and services. Together, the Vision,
                  Mission and Values of the Drone Training Academy is to become
                  Bharath’s leading and reliable eco-system for aerial and
                  robotic solutions along with providing employment
                  opportunities by training and empowering the government
                  authorities and departments along with the aspirant youth in
                  drone –based solutions, digitalizing conventional systems
                  through economical drone-based services and also indigenous
                  development of UAV products to achieve Athmanirbhar Bharath.
                  Together we aim to help build our Bharath in Digital literacy
                  and Digital services and tools by our possible ways, thus
                  contributing to the good dreams of our great nation builders,
                  towards better tomorrow and prosperity. We wholeheartedly
                  believe in a “win-win” culture between our candidates and the
                  academy.
                </p>
                <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-12">
            <div className=" mb-30 rmb-65 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">Courses</span>
                <h2>Discover various flotanomers certified courses</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main_container">
        <div className="mainBox">
          <div className="innerBox">
            <div className="boxOne">
              <div className="sideBarDet">
                <div className="sideName">
                  <h3>Courses</h3>
                </div>

                <div className="detTwo">
                  <ul>
                    <li>
                      <a href="#">AeroFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
                    <li>
                      <a href="#">MultiFloat</a>
                    </li>
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
                <h6 className="makeText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
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
                    <h6 className="startDetails">
                      Lorem ipsum dolor sit amet, consectetur sit amet,
                      consectetur{" "}
                    </h6>
                  </div>
                </div>
                <div className="offerOne">
                  <img src="assets/images/training/Black_Circle.png" alt="" />
                  <div className="offerDetails">
                    <h6 className="pDetails">Educational Kit Included</h6>
                    <h6 className="startDetails">
                      Lorem ipsum dolor sit amet, consectetur sit amet,
                      consectetur{" "}
                    </h6>
                  </div>
                </div>
                <div className="offerOne">
                  <img src="assets/images/training/Black_Circle.png" alt="" />
                  <div className="offerDetails">
                    <h6 className="pDetails">Educational Kit Included</h6>
                    <h6 className="startDetails">
                      Lorem ipsum dolor sit amet, consectetur sit amet,
                      consectetur{" "}
                    </h6>
                  </div>
                </div>
                <div className="offerOne">
                  <img src="assets/images/training/Black_Circle.png" alt="" />
                  <div className="offerDetails">
                    <h6 className="pDetails">Educational Kit Included</h6>
                    <h6 className="startDetails">
                      Lorem ipsum dolor sit amet, consectetur sit amet,
                      consectetur{" "}
                    </h6>
                  </div>
                </div>
              </div>
              <h6 className="end">
                Lorem ipsum dolor sit amet, consectetur sit amet, consectetur
                Lorem ipsum dolor sit amet, consectetur sit amet, consectetur{" "}
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-12">
            <div className=" mb-30 rmb-65 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">RPTO Courses</span>
                <h2>Discover various DGCA certified courses</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="pricing-plan-three">
              <span className="badge">popular</span>
              <h4>Multirotor VLOS</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>HTML+CSS design (12 pages)</li>
                <li>Social Media Marketing</li>
                <li>Domin hosting provider</li>
                <li>Online support (24/7)</li>
                <li>WordPres development</li>
              </ul>
              <div className="price-and-btn">
                <div className="content">
                  <span className="price">70000</span>
                  <span className="save">
                    Save<span> 25%</span>
                  </span>
                  <Link href="/pricing">
                    <a className="theme-btn style-one">
                      Choose Package <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
