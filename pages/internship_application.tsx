/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
export default function Application() {
  return (
    <Layout header={1} className="home-one" footer={1} noHeader={undefined} SideBar={undefined}> 
        <PageBanner titleHtml={`Internship Application`} titleText="Internship Application" />
        <div className="application_form">
            <div className="contact">
                <div className="application_title">Internship Application</div>
                <div className="contact_details">
                    <div>Contact Person: Sharun Joseph</div>
                    <div>Contact Number: 8242988967</div>
                    <div>If you have any queries, <a href="https://www.flotanomers.com/contact">contact us</a></div>
                </div>
            </div>
            <div className="intern_form">
                <form action="">
                    <div className="complete_form">
                        <div className="form1">
                            <label className="form_text">Name</label>
                            <input type="text" required/><br />

                            <label className="form_text">Address</label>
                            <input type="text" required/><br />

                            <label className="form_text">Date of Join</label>
                            <input type="date" required/><br />

                            <label className="form_text">Mobile Number</label>
                            <input type="tel" required/><br />
                            
                            <p>Choose your Field Of Interest</p>
                            
                            <input type="radio" name="interest" required/>
                            <label className="label_text">UAV Pilot</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">GIS Officer</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">WASP Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Training Manager</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Training Associates</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Technical Officer</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Technical Content Writer</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Social Media Manager</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">OutReach Officer</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Operations Officer</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Office Executive</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">MultiFlot Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">GIS Analyst</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Flotaron Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Customer Support</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Cruise Copter Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="form_text">Content Creator</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">AirDoe Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">AgroFlot Development</label><br />

                            <input type="radio" name="interest"/>
                            <label className="label_text">Inventory Manager</label><br />

                        </div>
                        <div className="form2">
                            <label>Email</label>
                            <input type="email" required/><br />

                            <label>Projects (For multiple projects separate it with commas)</label>
                            <input type="text" required/><br />

                            <label>Batch of year</label>
                            <input type="text" required/><br />

                            <label>LinkedIn URL</label>
                            <input type="url" required/><br />
                            
                            <label>Aadhar Card</label>
                            <input type="file" required/><br />

                            <label>PAN Card</label>
                            <input type="file" required/><br />

                            <label>Latest Resume</label>
                            <input type="file" required/><br />

                            <label>Professional Display Picture</label>
                            <input type="file" required/><br />
                        </div>
                        
                        
                    </div>
                </form>
            </div>
            <div className="submit_button">
                <button>Submit Application</button>
            </div>
        </div>
    </Layout>   
  );
}