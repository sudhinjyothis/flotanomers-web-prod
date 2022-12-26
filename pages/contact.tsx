import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import React from "react";
const Contact = () => {
  return (
    <Layout
    header={1} className="home-one" footer={1} noHeader={undefined}
    >
      <PageBanner titleHtml={`Conta<span>ct Us</span>`} titleText="Contact" />
      <section
        style={{
          position: "relative",
        }}
        className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
      >
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
                      <b className="text">582 Main address, 2nd floor, USA</b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <b className="text">
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
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
                        <a href="callto:+000(123)45699">+000 (123) 456 99</a>
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
        <div className="follow-us">
          <div className="social-style-two">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-behance" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Page Area end */}
      {/* Our Location Address Area start */}
      <section className="our-location-address-area rel z-1">
        <div className="container">
          <div className="row medium-gap justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="location-address-item wow fadeInUp delay-0-4s">
                <div className="top-part">
                  <img
                    src="assets/images/contact/2.jpg"
                    alt="Location"
                  />
                  <h5>India Capital</h5>
                </div>
                <div className="bottom-part">
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" />
                      <a
                        target={"_blank"}
                        href="https://goo.gl/maps/YTWeyDGA5j6ZP5uX6"
                      >
                        Adyar Mangaluru, Karnataka
                      </a>
                    </li>
                    <li>
                      <i className="far fa-envelope-open-text" />
                      <a href="mailto:info@flotanomers.com">
                        info@flotanomers.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href="tel:+919449845967">+91-94498 45967</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Location Address Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6458965998163!2d74.92280717501514!3d12.866132687439631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3591109de6849%3A0xf8282437641d9926!2sFlotanomers%20R%26D%20Private%20Limited!5e0!3m2!1sen!2sin!4v1672048377222!5m2!1sen!2sin"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
    </Layout>
  );
};
export default Contact;
