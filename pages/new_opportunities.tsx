import React from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
export default function Training() {
  return (
    <Layout  header={1} className="home-one" footer={1} noHeader={undefined}>
      <PageBanner titleHtml={`New Opportunities`} titleText="New opportunities" />

        <section className="new_opportunities">
            <div className="left_side_find">
                <div className="filter">
                    <div className="filter_heading">Filter</div>
                    <a href="#" className="clear-all">Clear all</a>
                </div>
                <div className="spacing">
                    <div className="location">
                       <label className="labels">Location</label>
                        <select name="places" id="places">
                            <option value="mangalore">Mangalore</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </div>

                    <div className="base_headingOne">
                        <h5>Employment</h5>
                    </div>

                    <div className="employment">
                            <input type="checkbox" id="type1" name="type1" value="Full Time"/>
                            <label> Full Time</label><br/>
                            <input type="checkbox" id="type2" name="type2" value="Intern"/>
                            <label>Intern</label>
                    </div>

                    <div className="base_headingTwo">
                        <h5>Specialities</h5>
                    </div>

                    <div className="employment">
                            <input type="checkbox" id="type3" name="type3" value="GIS"/>
                            <label> GIS</label><br/>
                            <input type="checkbox" id="type4" name="type4" value="Product Development"/>
                            <label>Product Development</label><br></br>
                            <input type="checkbox" id="type5" name="type5" value="Software Development"/>
                            <label> Software Development</label><br/>
                            <input type="checkbox" id="type6" name="type6" value="Administration"/>
                            <label>Administration</label><br></br>
                        
                    </div>
                </div>
            </div>
            
            <div className="right_side_find">
                <div className="findDiv">
                    <div className="innerDiv">
                        <input type="text" placeholder="Share or Ask something to everyone!"/>
                        <button className="findBtn">Find</button>
                    </div>
                </div>

                <div className="job_roles">
                    <div className="job_role_One">
                        <div className="job_info">
                            <div className="det_info">
                                <img src="assets/images/new-opportunities/grey-color.png" alt="" />
                                <div className="role">
                                    <h6>Gis Analyst</h6>
                                    <div className="info_det">
                                        <h6>Salary: ₹ 15000</h6>
                                        <h6>Work from office</h6>
                                        <h6>Time : 1 to 4 months</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus purus, egestas ut nibh ut, sodales bibendum tellus. Maecenas interdum elementum condimentum. Fusce hendrerit nec ex sed vulputate.</p>
                            </div>

                            <div className="known_skills">
                                <div className="skills">Gis Processing</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                            </div>
                        </div>
                    </div>

                    <div className="job_role_One">
                        <div className="job_info">
                            <div className="det_info">
                                <img src="assets/images/new-opportunities/grey-color.png" alt="" />
                                <div className="role">
                                    <h6>Gis Analyst</h6>
                                    <div className="info_det">
                                        <h6>Salary: ₹ 15000</h6>
                                        <h6>Work from office</h6>
                                        <h6>Time : 1 to 4 months</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus purus, egestas ut nibh ut, sodales bibendum tellus. Maecenas interdum elementum condimentum. Fusce hendrerit nec ex sed vulputate.</p>
                            </div>

                            <div className="known_skills">
                                <div className="skills">Gis Processing</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                            </div>
                        </div>
                    </div>

                    <div className="job_role_One">
                        <div className="job_info">
                            <div className="det_info">
                                <img src="assets/images/new-opportunities/grey-color.png" alt="" />
                                <div className="role">
                                    <h6>Gis Analyst</h6>
                                    <div className="info_det">
                                        <h6>Salary: ₹ 15000</h6>
                                        <h6>Work from office</h6>
                                        <h6>Time : 1 to 4 months</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="para">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus purus, egestas ut nibh ut, sodales bibendum tellus. Maecenas interdum elementum condimentum. Fusce hendrerit nec ex sed vulputate.</p>
                            </div>

                            <div className="known_skills">
                                <div className="skills">Gis Processing</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                                <div className="skills">Digitisation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </Layout>
  );
}