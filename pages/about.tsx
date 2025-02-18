import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { feedbackActive, teamSliderActive } from "../src/sliderProps";
const About = () => {
  return (
    <Layout
      header={1}
      className=""
      footer={1}
      noHeader={undefined}
      SideBar={undefined}
    >
      <PageBanner titleHtml={`About<span> Us</span>`} titleText="About Us" />
      <section className="ww-do-two-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="ww-do-two-content rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title style-two mb-15">What We Do</span>
                  <h2>We are Professional Aerospace Team</h2>
                </div>
                <p>
                  Flotanomers R&D Pvt Ltd is a UAV-based startup in Mangalore,
                  Karnataka, out of sheer passion for innovation in the field of
                  aerials and robotics. They are committed to indigenously
                  developing “Make in India” relevant aerial and robotic
                  solutions by fostering a culture of innovation and creativity.
                </p>
                <div className="row pt-15">
                  <div className="col-sm-6">
                    <div className="feature-item-two border-right pe-sm-3">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Aerial Mapping & Surveying</h5>
                      <p>
                        Pick a template customize anything answer or question
                        website design just you.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-item-two color-two">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Geographic Information System</h5>
                      <p>
                        Start your own blog, add an online store and accept
                        bookings online always.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-item-two color-two">
                      <div className="icon">
                        <i className="fas fa-check" />
                      </div>
                      <h5>Infrastructure Inspection</h5>
                      <p>
                        Start your own blog, add an online store and accept
                        bookings online always.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ww-do-btns">
                  <Link href="/services">
                    <a className="theme-btn mt-15">
                      Services
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play-text mt-15"
                  >
                    <i className="fas fa-play" /> <span>Watch Videos</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ww-do-two-images rel">
                <div className="row">
                  <div className="col-sm-7 offset-1">
                    <img
                      className="image-one wow fadeInUp delay-0-4s"
                      src="assets/images/about/ww-do-two1.jpg"
                      alt="What We Do"
                    />
                  </div>
                  <div className="col-sm-4">
                    <img
                      className="image-two wow fadeInUp delay-0-6s"
                      src="assets/images/about/ww-do-two2.jpg"
                      alt="What We Do"
                    />
                    <img
                      className="image-three wow fadeInUp delay-0-8s"
                      src="assets/images/about/ww-do-two3.jpg"
                      alt="What We Do"
                    />
                  </div>
                </div>
                <div className="year-of-experience wow zoomIn delay-0-6s">
                  <span className="number">5</span>
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Two Area end */}
      {/* Statistics Four Area start */}
      <div className="statistics-area-four rel z-1">
        <div className="container">
          <div
            className="statistics-four-counters bgs-cover bgc-lighter"
            style={{
              backgroundImage: "url(assets/images/background/counter-bg.png)",
            }}
          >
            <div className="row medium-gap">
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-30 counter-text-wrap wow fadeInLeft delay-0-2s">
                  <i className="flaticon-startup" />
                  <Counter end={10000} decimals={undefined} />
                  <span className="counter-title">Sq Km Surveyed</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-4s">
                  <i className="flaticon-global" />
                  <Counter end={4000} decimals={undefined} />
                  <span className="counter-title">Students Trained</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item mt-20 counter-text-wrap wow fadeInLeft delay-0-6s">
                  <i className="flaticon-rating" />
                  <Counter end={5000} decimals={undefined} />
                  <span className="counter-title">Training Hours</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-8s">
                  <i className="flaticon-trophy" />
                  <Counter end={200} decimals={undefined} />
                  <span className="counter-title">
                    Law And Enforcement Trained
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Four Area end */}
      {/* Video Area start */}
      <section className="video-area bgc-black pt-250">
        <div className="container">
          <div className="row medium-gap align-items-end pt-80">
            <div className="col-lg-6">
              <div className="video-part rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/background/video-bg.jpg" alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-content text-white pb-95 rpb-115 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <h2>
                    5 years of experience in this world, being the first and
                    foremost aerospace company in Mangalore.
                  </h2>
                </div>
                <ul className="list-style-three">
                  <li>Certification Courses</li>
                  <li>Services</li>
                  <li>Research And Development</li>
                  <li>Drone Accessories</li>
                  <li>DGCA Approved RPTO Training</li>
                  <li>Hobby and Professional Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Area End */}
      {/* Team Area start */}
      <section className="team-slider-area pt-210 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title style-two mb-15">Amazing Team</span>
                <h2>We Have Well Experience Team Member</h2>
              </div>
            </div>
          </div>
          <Slider {...teamSliderActive} className="team-slider-active">
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="assets/images/team/member1.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Senior Manager</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="assets/images/team/member2.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Richard C. Harrison</Link>
                </h5>
                <span className="designation">Web Developer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="assets/images/team/member3.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Michael D. Jackson</Link>
                </h5>
                <span className="designation">Business Developer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-8s">
              <div className="image">
                <img src="assets/images/team/member4.jpg" alt="Member" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/team-profile">Damian S. Madison</Link>
                </h5>
                <span className="designation">Product Designer</span>
                <div className="social-style-one">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Team Area end */}
      {/* Feedback Area start */}
      <section className="feedback-area bgc-lighter  pb-130 rel z-1">
        <div className="container pt-130">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">
                  Clents Feedback
                </span>
                <h2>3,000+ Positive reviews by our satisfied clients</h2>
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo2.png" alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author2.jpg" alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span>Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-6s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo3.png" alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author3.jpg" alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span>Junior Manager</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo2.png" alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author2.jpg" alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span>Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo3.png" alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author3.jpg" alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span>Junior Manager</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="feedback-shape one">
          <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
        </div>
      </section>
      {/* Feedback Area end */}
    </Layout>
  );
};
export default About;
