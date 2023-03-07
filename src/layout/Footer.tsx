import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    case 3:
      return <Footer3 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const Footer1 = () => (
  <footer className="main-footer footer-two pt-80 bgc-lighter">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo-four.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremq dantium, totam rem aperiam eaqu quae ab illo
              inventore veritatis et quasi architecto beatae
            </p>
            <div className="social-style-two pt-5">
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
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/service-details">Wed Design (UI/UX)</Link>
              </li>
              <li>
                <Link href="/about">About company</Link>
              </li>
              <li>
                <Link href="/service-details">Web development</Link>
              </li>
              <li>
                <Link href="/team">Meet our teams</Link>
              </li>
              <li>
                <Link href="/service-details">SEO Optimization</Link>
              </li>
              <li>
                <Link href="/service-details">Case Stories</Link>
              </li>
              <li>
                <Link href="/service-details">Product Engineering</Link>
              </li>
              <li>
                <Link href="/blog">Latest News</Link>
              </li>
              <li>
                <Link href="/service-details">Technical Support</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/service-details">Landing Pages Design</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="copyright-text text-center">
          <p>© Copyright 2022 Oxence. All right reserved</p>
        </div>
      </div>
    </div>
  </footer>
);

const Footer2 = () => (
  <footer className="main-footer bgc-dark-blue text-white rel z-1">
    <div className="container">
      <div
        className="footer-top-newsletter bgc-primary p-80"
        style={{
          backgroundImage: "url(assets/images/footer/newsletter-bg.png)",
        }}
      >
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="footer-newsletter-content rmb-55 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Our Newsletter</span>
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
                <p>
                  Consectetur adipiscing eiusmod tempor incididunt labore et
                  dolores magna aliquae suspendisse ultrices gravid commodo
                  viverra
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="form-group rel mb-0 w-100">
                  <label htmlFor="email">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <button className="theme-btn style-two">
                  Subscribe <i className="fas fa-angle-double-right" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-newsletter-image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/footer/footer-newsletter.png"
                alt="Newsletter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row large-gap justify-content-center">
        <div className="col-xl-7 col-lg-8">
          <div className="footer-cta text-center my-100 wow fadeInUp delay-0-2s">
            <div className="section-title">
              <h2>Let’s Design Your New Website</h2>
              <p>
                Do you want to have a website that stands out and impresses your
                clients? Then we are ready to help! Click the button below to
                contact us and discuss your ideas.
              </p>
            </div>
            <Link href="/contact">
              <a className="theme-btn mt-15">
                Get a Quote <i className="fas fa-angle-double-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-area text-center pt-30 pb-15">
        <ul className="footer-menu pb-10">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">How We Work</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Why Choose Us</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <p>© Copyright 2022 Oxence. All right reserved</p>
      </div>
    </div>
    <div className="wave-shapes">
      <img
        className="shape one"
        src="assets/images/shapes/footer1.png"
        alt="Wave Shape"
      />
      <img
        className="shape two"
        src="assets/images/shapes/footer2.png"
        alt="Wave Shape"
      />
    </div>
  </footer>
);

const Footer3 = () => (
  <div className="footer-page">
    <div className="two-divs mt-28 ">
      <div className="footer-top bg-[#F46B5B] flex flex-col justify-center items-center pt-20 pb-16">
        <div className="newsletter font-[Inter] font-bold text-white text-4xl">
          Join our newsletter now !
        </div>
        <div className="register-info font-light text-base text-white mt-3">
          Register now and getour latest updates and promos.{" "}
        </div>
        <div className="flex justify-center items-center">
          <div className="searchBox relative mt-7">
            <input
              type="text"
              className=" box h-16 w-96 pl-4 rounded-lg z-0 bg-white"
              placeholder="Enter your email"
            />
            <div className="absolute top-2 right-3">
              <button className="bg-black py-3 px-7 text-white rounded-2xl">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex flex-col justify-center">
        <div className="footer-left">
          <div>RC Finity</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.{" "}
          </div>
          <div className="icons-social">
            <a href="#">
              <FaInstagram style={{ fill: "gray" }} />
            </a>
            <a href="#">
              <FaFacebookF style={{ fill: "gray" }} />
            </a>
            <a href="#">
              <FaTwitter style={{ fill: "gray" }} />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="company-info">
            <div>Company</div>
            <div>About</div>
            <div>Products</div>
            <div>Contact</div>
            <div>Blogs</div>
            <div>Careers</div>
          </div>

          <div className="information-info">
            <div>Information</div>
            <div>Help Center</div>
            <div>Payment Methods</div>
            <div>Return & Refund</div>
            <div>Return & Refund</div>
          </div>

          <div className="contact-info">
            <div>Information</div>
            <div>Help Center</div>
            <div>Payment Methods</div>
            <div>Return & Refund</div>
            <div>Return & Refund</div>
          </div>

          <div className="flex flex-col text-sm font-normal justify-center items-center space-x-3">
            <div className="phone-number flex flex-row space-x-2 justify-center items-center">
              <div>
                <BsTelephone style={{ fill: "orange" }} />
              </div>
              <div>+12 345 6789 0</div>
            </div>

            <div className="email flex flex-row space-x-2 justify-center items-center">
              <div>
                <TfiEmail style={{ fill: "orange" }} />
              </div>
              <div>info@rcfinity.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const DefaultFooter = () => (
  <footer className="main-footer pt-80">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo-three.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremq dantium, totam rem aperiam eaqu quae ab illo
              inventore veritatis et quasi architecto beatae
            </p>
            <div className="social-style-two pt-5">
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
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/service-details">Wed Design (UI/UX)</Link>
              </li>
              <li>
                <Link href="/about">About company</Link>
              </li>
              <li>
                <Link href="/service-details">Web development</Link>
              </li>
              <li>
                <Link href="/team">Meet our teams</Link>
              </li>
              <li>
                <Link href="/service-details">SEO Optimization</Link>
              </li>
              <li>
                <Link href="/service-details">Case Stories</Link>
              </li>
              <li>
                <Link href="/service-details">Product Engineering</Link>
              </li>
              <li>
                <Link href="/blog">Latest News</Link>
              </li>
              <li>
                <Link href="/service-details">Technical Support</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/service-details">Landing Pages Design</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text text-center text-lg-start">
              <p>© Copyright 2022 Oxence. All right reserved</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <ul>
                <li>
                  <a href="#">Setting &amp; Privacy</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>
);
