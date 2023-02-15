import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Counter from "../src/components/Counter";
import React from "react";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import Layout from "../src/layout/Layout";
import { TbDrone } from "react-icons/tb";
import { BiBuildings } from "react-icons/bi";
import { TfiMapAlt } from "react-icons/tfi";
const Index = () => {
  const [hover, setHover] = React.useState(-1);
  return (
    <Fragment>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="assets/images/favicon1.png"
          type="image/x-icon"
        />
      </Head>
      <Layout header={1} className="home-one" footer={1} noHeader={undefined}>
        {/*End Hidden Sidebar */}
        {/* Slider Section Start */}
        <Hero1 />
        {/* Slider Section End */}
        {/* Core Feature start */}
        <section className="feature-area-five bgc-lighter pt-100 pb-70">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">Core Features</span>
              <h2>Amazing Aerial features</h2>
            </div>
            <div
              style={{
                cursor: "pointer",
              }}
              className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center"
            >
              <div
                onMouseEnter={() => setHover(0)}
                onMouseLeave={() => setHover(-1)}
                className="col wow fadeInUp delay-0-2s"
              >
                <div className="feature-item-five">
                  <TbDrone
                    className={`hero-features-icon ${
                      hover === 0 ? "hover" : ""
                    }`}
                  />
                  <h5>
                    <Link href="/service-details">
                      <a>Aerial Mapping & Surveying</a>
                    </Link>
                  </h5>
                </div>
              </div>
              <div
                onMouseEnter={() => setHover(1)}
                onMouseLeave={() => setHover(-1)}
                className="col wow fadeInUp delay-0-3s"
              >
                <div className="feature-item-five">
                  <TfiMapAlt
                    className={`hero-features-icon ${
                      hover === 1 ? "hover" : ""
                    }`}
                  />
                  <h5>
                    <Link href="/service-details">
                      <a>Geographic Information System</a>
                    </Link>
                  </h5>
                </div>
              </div>
              <div
                onMouseEnter={() => setHover(2)}
                onMouseLeave={() => setHover(-1)}
                className="col wow fadeInUp delay-0-6s"
              >
                <div className="feature-item-five">
                  <BiBuildings
                    className={`hero-features-icon ${
                      hover === 2 ? "hover" : ""
                    }`}
                  />
                  <h5>
                    <Link href="/service-details">
                      <a>Infrastructure Inspection</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Core Feature end */}
        {/* About Us Area start */}
        <section className="about-area-one pt-130 pb-125 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                  <img src="assets/images/about/about-one.jpg" alt="About us" />
                  <img
                    className="image-left"
                    src="assets/images/shapes/image-left.png"
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="about-content-one wow fadeInUp delay-0-4s">
                  <div className="section-title mb-45">
                    <span className="sub-title mb-15">
                      About Flotanomers R & D pvt ltd.
                    </span>
                    <h2>Best Aerospace solutions agency to growth</h2>
                  </div>
                  <ul className="list-style-one">
                    <li>
                      <div className="content">
                        <h4>Company Vision</h4>
                        <p>
                          To become Bharath's leading and reliable ecosystem for
                          aerial and robotic solutions
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content mission">
                        <h4>Company Mission</h4>
                        <p>
                          To provide safe, feasible, and solution-centric
                          services by: <br />
                        </p>
                        <ul style={{ marginTop: "1rem" }}>
                          <li>
                            <p>
                              Providing employment by empowering the youth in
                              drone-based solutions
                            </p>
                          </li>
                          <li>
                            <p>
                              Digitalising conventional systems through
                              economical drone-based services
                            </p>
                          </li>
                          <li>
                            <p>
                              Indigenous development of UAV products to achieve
                              Atmanirbhar Bharath
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="content mission">
                        <h4>Our Values</h4>
                        <ul style={{ marginTop: "1rem" }}>
                          <li>
                            <p>
                              We encourage the team to grow boundlessly and
                              explore new dimensions in their professional and
                              personal lives.
                            </p>
                          </li>
                          <li>
                            <p>
                              We wholeheartedly believe in a “win-win” culture
                              between our customers and the company.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us Area end */}
        {/* Statistics Three Area start */}
        <section className="statistics-area-three bgs-cover pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                  <div className="row justify-content-center justify-content-xl-start">
                    <div className="col-xl-9">
                      <div className="section-title mb-60">
                        <span className="sub-title mb-15">
                          Company Statistics
                        </span>
                        <h2>We’ve some achievement from global partners</h2>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div
                        style={{ minHeight: "22rem" }}
                        className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s"
                      >
                        <i className="flaticon-startup" />
                        <Counter end={10000} decimals={undefined} />
                        <span className="counter-title">Sq Km Surveyed</span>
                        <p>Andhra Pradesh Municipal Corporation , SOI, NHAI</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div
                        style={{ minHeight: "22rem" }}
                        className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s"
                      >
                        <i className="flaticon-global" />
                        <Counter end={4000} decimals={undefined} />
                        <span className="counter-title">Students Trained</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div
                        style={{ minHeight: "22rem" }}
                        className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s"
                      >
                        <i className="flaticon-rating" />
                        <Counter end={5000} decimals={undefined} />
                        <span className="counter-title">Training Hours</span>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                      <div
                        style={{ minHeight: "22rem" }}
                        className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s"
                      >
                        <i className="flaticon-rating" />
                        <Counter end={200} decimals={undefined} />
                        <span className="counter-title">
                          Law And Enforcement Trained
                        </span>
                        <p>Cybersecurity, State Police, BSF, CRPF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                  <img
                    src="assets/images/about/statictics.jpg"
                    alt="Statictics"
                  />
                  <img
                    className="image-right"
                    src="assets/images/shapes/image-right.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Three Area end */}
        {/* Design Featured Start */}
        <section className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">R & D</span>
              <h2>Our Professional Products</h2>
            </div>
            <div className="row no-gap align-items-center">
              <div className="col-lg-3">
                <div className="feature-left">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Airdoe</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInRight delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-web-page" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Wazp</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-middle rmt-30">
                  <div className="image wow fadeInUp delay-0-2s">
                    <img
                      className="round"
                      src="assets/images/features/feature-middle.png"
                      alt="Feature Middle"
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="service-item style-three wow fadeInUp delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-online" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Skyper</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                        <div className="icon">
                          <i className="flaticon-web-programming" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Flotaron</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="feature-right">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                        <div className="icon">
                          <i className="flaticon-graphic-design" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>Cruise Copter</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <div className="service-item style-three wow fadeInLeft delay-0-3s">
                        <div className="icon">
                          <i className="flaticon-user-experience" />
                        </div>
                        <div className="content">
                          <h4>
                            <Link href="/service-details">
                              <a>MultiFlot</a>
                            </Link>
                          </h4>
                          <Link href="/service-details">
                            <a className="more-btn">
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="design-feature-shapes">
            <img
              className="shape dots"
              src="assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave-line"
              src="assets/images/shapes/feature-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Design Featured End */}
        {/* Project Area start */}
        <RecentProjects />
        {/* Project Area end */}
        {/* CTA Area start */}
        <section className="call-to-action-area rel z-2">
          <div className="container">
            <div
              className="cta-inner bgs-cover"
              style={{
                backgroundImage: "url(assets/images/background/cta-bg.jpg)",
              }}
            >
              <div className="row">
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInLeft delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>Have any Project On Minds ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="cta-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-target" />
                    </div>
                    <h4>Want to aerial survey any land ?</h4>
                    <Link href="/contact">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Area end */}
        {/* Pricing Two Area start */}
        <section className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Our Pricing Package</span>
                  <h2>Website Design Packages</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">Basic Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">248</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">Standard plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">352</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-2s">
                  <h4 className="title">golder Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">583</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="pricing-item-two wow fadeInUp delay-0-4s">
                  <h4 className="title">platinum Plan</h4>
                  <span className="badge">popular package</span>
                  <div className="pricing-inner">
                    <ul className="list-style-two">
                      <li>Landing page design (10 pages)</li>
                      <li>HTML+CSS design (12 pages)</li>
                      <li>Social Media Marketing</li>
                      <li>Domin hosting provider</li>
                      <li>Online support (24/7)</li>
                    </ul>
                    <div className="price-and-btn">
                      <div className="content">
                        <span className="price">834</span>
                        <span className="save">
                          Save<span> 25%</span>
                        </span>
                        <Link href="/pricing">
                          <a className="theme-btn style-three">
                            Choose Package{" "}
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-shapes">
            <img
              className="shape dots"
              src="assets/images/shapes/pricing-bg-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave"
              src="assets/images/shapes/pricing-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Pricing Two Area end */}
        {/* Testimonial Area Start */}
        <ClientsFeedback />
        {/* Testimonial Area End */}
        {/* Contact Area Start */}
        <section className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-55">
                    <h2>
                      Have any project on mind! feel free contact with us or{" "}
                      <span>say hello</span>
                    </h2>
                  </div>
                  <div className="contact-info-wrap">
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <span className="title">Location</span>
                        <b className="text">
                          <a
                            target={"_blank"}
                            href="https://goo.gl/maps/tgM1K29a7chXTE7D8"
                          >
                            #1-156/1, 4th Floor Sahyadri campus, Adyar
                            Mangaluru, Karnataka PIN-575007
                          </a>
                        </b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="content">
                        <span className="title">Email Address</span>
                        <b className="text">
                          <a href="mailto:info@flotanomers.com">
                            info@flotanomers.com
                          </a>
                        </b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="content">
                        <span className="title">Phone No</span>
                        <b className="text">
                          <a href="callto:+919449845967">+91 94498 45967</a>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contact-area-form"
                  className="contact-area-form text-center wow fadeInRight delay-0-2s"
                  name="contact-area-form"
                  action="#"
                  method="post"
                >
                  <h4>Send us Message</h4>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    id="blog-email"
                    name="blog-email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="text"
                    id="website"
                    name="website"
                    className="form-control"
                    defaultValue=""
                    placeholder="Website"
                    required
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={5}
                    placeholder="Write Message"
                    required
                    defaultValue={""}
                  />
                  <button type="submit" className="theme-btn">
                    Send messages <i className="fas fa-angle-double-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-shapes">
            <img
              className="shape circle"
              src="assets/images/shapes/slider-dots.png"
              alt="Shape"
            />
            <img
              className="shape dots"
              src="assets/images/shapes/contact-dots.png"
              alt="Shape"
            />
            <img
              className="shape wave-line"
              src="assets/images/shapes/contact-wave-line.png"
              alt="Shape"
            />
          </div>
        </section>
        {/* Contact Area End */}
        {/* Blog Area start */}
        <section className="news-blog-area pt-130 pb-75 rel z-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get Every Updates</span>
                  <h2>Read Latest News &amp; Blog</h2>
                </div>
              </div>
            </div>
            <div className="row large-gap">
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author1.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Douglas B. Dickens</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 27 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to create modern web site for your business?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author2.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Carson C. Rhodes</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>How to digital marketing work social networking?</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author3.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Robert T. Evans</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                  </div>
                  <div className="content">
                    <span className="date">
                      <i className="far fa-calendar-alt" /> 25 March 2022
                    </span>
                    <h4>
                      <Link href="/blog-details">
                        <a>Easy Ways to Incorporate Customer Feedback</a>
                      </Link>
                    </h4>
                    <div className="author">
                      <img src="assets/images/blog/author4.jpg" alt="Author" />
                      <div className="post-by">
                        <span>Post by</span>
                        <a href="#">Stanley J. Contreras</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};
export default Index;
