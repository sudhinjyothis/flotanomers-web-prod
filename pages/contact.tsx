import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import React from "react";
const Contact = () => {
  return (
    <Layout header={1} className="" footer={1} noHeader={undefined} SideBar={undefined}>
      <PageBanner titleHtml={`Conta<span>ct Us</span>`} titleText="Contact" />
      <section
        style={{
          position: "relative",
        }}
        className="contact-us-page-area py-130"
      >
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-7">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Contact Us</span>
                  <h2>
                    Let’s Start New Project or work Together! Contact With us
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lauda tiumes totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Michael C. Coleman"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+000 (123) 456 88"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="select_subject">
                          Select Requirments
                        </label>
                        <select name="select_subject" id="select_subject">
                          <option value="default" selected>
                            Website customize
                          </option>
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="SEO">SEO</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Write Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button type="submit" className="theme-btn w-100">
                          Send Message{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info wow fadeInLeft delay-0-2s">
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <span className="text">
                      55 Main Street, 2nd Floor, E-Block, New York
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">email address</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">
                        supportweb@gmail.com
                      </a>
                      <br />
                      <a href="mailto:websitebuilding.net">
                        websitebuilding.net
                      </a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <span className="title">Phone Number</span>
                    <span className="text">
                      Call <a href="calto:+000(123)45688">+000 (123) 456 88</a>
                      <br />
                      Whatsapp : +9632145789
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            bottom: "-2rem",
          }} className="follow-us">
           
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
                  <img src="assets/images/contact/2.jpg" alt="Location" />
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
