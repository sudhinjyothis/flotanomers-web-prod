import Link from "next/link";
import { DEFAULT_MAX_VERSION } from "tls";
import { sideBarToggle } from "../utils";
import MobileMenu from "./MobileMenu";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import {FaThLarge} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import {TfiEmail} from "react-icons/tfi";
import {BsTelephone} from "react-icons/bs";
const Header = ({ header }) => {  
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;
    default:
      return <DefaultHeader />;
  }
};
export default Header;

const Header1 = () => {
  return (
    <header className="main-header header-two">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/flot-logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu logo={"assets/images/logos/flot-logo.png"} />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/flot-logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact">
                <a style={{ color: "#FFF" }} className="theme-btn style-three">
                  Get a Quote <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              {/* <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header2 = () => {
  return (
    <header className="main-header">
      <div className="header-top-wrap bgc-secondary text-white py-5">
        <div className="container">
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="top-left text-center text-lg-start">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="top-right text-center text-lg-end">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                    </li>
                    <li>
                      <select className="select" name="language" id="language">
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Arabic</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      className="logo dark-logo"
                    />
                    <img
                      className="light-logo logo"
                      src="assets/images/logos/logo-white.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu logo={undefined} />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact">
                <a className="theme-btn">
                  Download Now <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header3 = () => {
  return (
    <div className="navbarOne flex flex-col px-10 py-3">
      {/* <div>
        <div className="hamburger inline-block p-4 cursor-pointer">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
      </div> */}
      <div className="navbar-sub flex flex-row items-center justify-between">
        <div className="social-icons flex space-x-5">
          <a href="#">
            <FaInstagram style={{ fill: 'gray' }}/>
          </a>
          <a href="#">
            <FaFacebookF style={{ fill: 'gray' }}/>
          </a>
          <a href="#">
            <FaTwitter style={{ fill: 'gray' }}/>
          </a>
          <a href="#">
            <FaLinkedinIn style={{ fill: 'gray' }}/>
          </a>
        </div>
        <div className="flex text-sm font-normal justify-around items-center space-x-3">
          <div className="phone-number flex flex-row space-x-2 justify-center items-center">
            <div><BsTelephone style={{ fill: 'orange' }}/></div>
            <div>+12 345 6789 0</div>
          </div>

          <div className="email flex flex-row space-x-2 justify-center items-center">
            <div><TfiEmail style={{ fill: 'orange' }}/></div>
            <div>info@rcfinity.com</div>
          </div>
        </div>
      </div>
      <hr className="mt-3" />

      <div className="forToggle">
        <div className="navbarTwo mt-4 flex flex-row space-x-1 items-center justify-around">
          <div className="logoName text-2xl font-semibold font-[Poppins] text-orange-500 ">RCFinity</div>
          <div className="allIcons flex justify-between items-center space-x-6  ">
          <div>
            <a href="">
            <FaThLarge style={{ fill: 'gray' }}/>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="searchBox relative">
              <input
                type="text"
                className=" box h-14 w-96 pl-4 rounded-lg z-0 bg-gray-200 border border-1 border-gray-100"
                placeholder="Search here"
              />
              <div className="absolute top-4 right-3">
                <FaSearch style={{ fill: 'gray' }}/>
              </div>
            </div>
          </div>
          </div>
          <div className="relative">
          <FaShoppingBag style={{ fill: 'gray' }}/>
            <div className="absolute bottom-3 left-3 text-xs bg-orange-500 p-1 rounded-full text-white">99</div>
          </div>
          <div>
            <FaRegEnvelope style={{ fill: 'gray' }}/>
          </div>
          <div className="text text-base underline text-orange-500 font-[Nunito Sans]">Sign In</div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>

        <div className="mt-6">
          <ul className="flex space-x-10 justify-center items-center">
            <li>
              <a href="#"  className="font-[Poppins] hover:text-orange-500">Home</a>
            </li>
            <li>
              <a href="#" className="font-[Poppins] hover:text-orange-500">About</a>
            </li>
            <li>
              <a href="#" className="font-[Poppins] hover:text-orange-500">Products</a>
            </li>
            <li>
              <a href="#" className="font-[Poppins] hover:text-orange-500">Blogs</a>
            </li>
            <li>
              <a href="#" className="font-[Poppins] hover:text-orange-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const DefaultHeader = () => {
  return (
    <header className="main-header header-three menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu logo={undefined} />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact">
                <a className="login">Log in</a>
              </Link>
              <Link href="/contact">
                <a className="theme-btn">
                  Sign up Free <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Menu = () => {
  return (
    <ul className="navigation clearfix">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li className="dropdown">
        <a href="#">services</a>
        <ul>
          <li>
            <Link href="/services">Popular Services</Link>
          </li>
          <li>
            <Link href="/service-details">service details</Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">Project</a>
        <ul>
          <li>
            <Link href="/projects">Project Grid</Link>
          </li>
          <li>
            <Link href="/project-creative">Project Creative</Link>
          </li>
          <li>
            <Link href="/project-carousel">Project Carousel</Link>
          </li>
          <li>
            <Link href="/project-details">Project Details</Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li className="dropdown">
            <a href="#">Team</a>
            <ul>
              <li>
                <Link href="/team">Expert Team</Link>
              </li>
              <li>
                <Link href="/team-profile">Team Profile</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li>
            <Link href="/pricing">pricing plan</Link>
          </li>
          <li>
            <Link href="/faqs">faqs &amp; helf</Link>
          </li>
          <li>
            <Link href="/404">404 error</Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">shop</a>
        <ul>
          <li>
            <Link href="/shop">shop Grid</Link>
          </li>
          <li>
            <Link href="/product-details">Product details</Link>
          </li>
          <li>
            <Link href="/cart">cart page</Link>
          </li>
          <li>
            <Link href="/checkout">checkout</Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <li>
            <Link href="/blog">blog Grid</Link>
          </li>
          <li>
            <Link href="/blog-list">blog list</Link>
          </li>
          <li>
            <Link href="/blog-details">blog details</Link>
          </li>
        </ul>
        <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
