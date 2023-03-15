import dynamic from "next/dynamic";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import React from "react";
const TeamIsotope = dynamic(
  () => import("../src/components/Isotope/TeamIsotope"),
  {
    ssr: false,
  }
);

const Team = () => {
  return (
    <Layout
      header={1}
      className=""
      footer={1}
      noHeader={undefined}
      SideBar={undefined}
    >
      <PageBanner
        titleHtml={`Expert <span>Team</span>`}
        titleText="Expert Team"
      />
      <section className="support-marketing-area py-130 rel z-1">
        <div className="container">
          <div className="row large-gap justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="support-marketing-progress rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title style-two mb-15">Epic Team</span>
                  <h2>We Are Very Much Experienced In Drone Technology</h2>
                </div>
                <p>
                  Our team comprises of professionals from various backgrounds
                  who work together and ensure to deliver the best quality of
                  products, services as well as training. Our 7 primary teams
                  are as follows:
                </p>
                <div className="circle-counter">
                  <div className="circle-progress-item">
                    <h5
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Product Development Team
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Our Product Development team focuses on exploring new
                      technologies and innovations in order to manufacture the
                      best quality of drones, and consists of engineers from various
                      departments, for instance, mechanical, electrical,
                      electronics & telecommunication and computer science.
                    </p>
                  </div>
                  <div className="circle-progress-item">
                    <h5
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Machine Intelligence Team
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                      }}
                    >
                      We have GIS Analysts from backgrounds such as geology,
                      information system, computer science and many others who
                      have been trained impeccably to carry out the digitisation
                      & processing tasks of aerial mapping and survey
                      conducted by our expert pilots along with the field team in various
                      parts of the country. Besides this, we have also trained
                      mechanical engineers to perform GIS tasks.
                    </p>
                  </div>
                  <div className="circle-progress-item">
                    <h5
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Operations Team
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Our Operations team is responsible for the smooth running
                      of everyday facilities and to affirm that the company
                      activities are carried out on time. We have a set of
                      finance team members who are in charge of the company
                      budget calculation.
                    </p>
                  </div>
                  <div className="circle-progress-item">
                    <h5
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Marketing Team
                    </h5>
                    <p
                      style={{
                        textAlign: "left",
                      }}
                    >
                      Our Marketing team develops and implements strategies to
                      promote and sell products & services. They perform market
                      research & analyse results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="best-skills-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/best-skills.jpg"
                  alt="Best Skills"
                />
              </div>
              <div className="circle-progress-item">
                <h5
                  style={{
                    textAlign: "left",
                  }}
                >
                  Human Resources Team
                </h5>
                <p
                  style={{
                    textAlign: "left",
                  }}
                >
                  Human Resources team deals with the talent acquisition, employee
                  management, payroll, compensation & benefits and
                  administration.
                </p>
              </div>
              <div className="circle-progress-item">
                <h5
                  style={{
                    textAlign: "left",
                  }}
                >
                  Training Team
                </h5>
                <p
                  style={{
                    textAlign: "left",
                  }}
                >
                  Training team takes charge of providing training to the Remote
                  pilot aspirants as well as the students who are interested in
                  flying and learning drone technology.
                </p>
              </div>
              <div className="circle-progress-item">
                <h5
                  style={{
                    textAlign: "left",
                  }}
                >
                  IT Team
                </h5>
                <p
                  style={{
                    textAlign: "left",
                  }}
                >
                  IT team deals with GCS development, App development for hobby
                  drones, website development and maintenance as well as
                  technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Support & Marketing Area start */}
      {/* Team Area start */}
      <section className="team-page-area pb-65 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-15">Amazing Team</span>
                <h2>We Have Well Experienced Team Member</h2>
              </div>
            </div>
          </div>
          <TeamIsotope />
        </div>
      </section>
      {/* Team Area end */}
    </Layout>
  );
};
export default Team;
