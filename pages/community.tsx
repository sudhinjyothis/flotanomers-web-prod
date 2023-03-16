import React from "react";
//import { Tab } from "react-bootstrap";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

export default function Community() {
  return (
    <Layout header={1} className="" footer={1} noHeader={undefined} SideBar={undefined}>
      <PageBanner titleHtml={`Community`} titleText="Community" />

      <div className="navbar-main">
        <div className="navbar-content"> 
          <div className="title">
            <h1 id="nav-first">Community</h1>
          </div>
          <div className="center-link">
            <h2 id="nav-middle">
              <a href="#" >Explore</a>
            </h2>
            <h2 id="nav-middle">
              <a href="#" >Events</a>
            </h2>
            <h2 id="nav-middle">
              <a href="#" >Settings</a>
            </h2>
          </div>
          <div className="right-link">
            <h3>UserName</h3>
          </div>
          <div className="box-img-nav"></div>
        </div>
      </div>

      <div className="portal">
        <div className="side-nav">
          <div className="box twisted-border">
            <div className="box-title">
              <h2>
                <b>My Events</b>
              </h2>
            </div>
            <div className="box-items">
              <div className="box-item">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
              <div className="box-item" text-align="left">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
              <div className="box-item" text-align="left">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="box twisted-border">
            <div className="box-title">
              <h2>
                <b>Other Events</b>
              </h2>
            </div>
            <div className="box-items">
              <div className="box-item">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
              <div className="box-item" text-align="left">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
              <div className="box-item" text-align="left">
                <div className="box-img"></div>
                <div className="box-info">
                  <p>date</p>
                  <h4>
                    <b>Drone Events</b>
                  </h4>
                </div>
              </div>
            </div>
            {/* <div className="box-items">
            </div> */}
          </div>
        </div>
        <div className="center-nav">
          <div className="box-input">
            <div className="box-input-content">
              <div className="box-img"></div>
              <div className="box-form">
                <form>
                  <input type="text" />
                </form>
                <div className="form-btn">
                  <div className = "upload-img-box"></div>
                  <p id="upload-img">Upload photo</p>
                  <button id="share-btn">SHARE</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bigbox">
            <div className="bigbox-content">
              <div className="bigbox-profile">
                <div className="bigbox-pfp"></div>
                <div className="profile-text">
                  <h3>
                    <b>Title</b>
                  </h3>
                </div>
              </div>
              <div className="profile-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bigbox-img"></div>
            </div>
          </div>
          <div className="bigbox">
            <div className="bigbox-content">
              <div className="bigbox-profile">
                <div className="bigbox-pfp"></div>
                <div className="profile-text">
                  <h3>
                    <b>Title</b>
                  </h3>
                </div>
              </div>
              <div className="profile-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="bigbox-img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div classNameName="main-box">

            <header id="header">Community</header>
            <div className="header-text">
             <a href="#">Explore</a>
             <a href="#">Event</a>
             <a href="#">Settings</a>
            </div>
              
             <div id="profile"><img id="" src=""/>Username </div>
        </div>
             <br/><br/><br/><br/>
         <div className="main-container">
             <div className="flex-container">
            
             <div className="flex-item flex-item-1"> my event  </div>
             <div className="flex-item flex-item-2"> other events </div>
             </div>


             <div className="flexbox-container">
            
            <div className="flexbox-item flexbox-item-1"> share </div>
            <div className="flexbox-item flexbox-item-2"> title-1 </div>
            <div className="flexbox-item flexbox-item-2"> title-2 </div>
            
            </div>
         </div>      */}
    </Layout>
  );
}
// 
//   
//   

