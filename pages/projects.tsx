// import ProjectGridIsotope from "../src/components/Isotope/ProjectGridIsotope";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import React from "react";
import dynamic from "next/dynamic";

const ProjectGridIsotope = dynamic(
  () => import("../src/components/Isotope/ProjectGridIsotope"),
  {
    ssr: false,
  }
);

const Projects = () => {
  return (
    <Layout
    header={1} className="" footer={1} noHeader={undefined}
    SideBar={undefined}
    >
      <PageBanner
        titleHtml={`Project <span>Grid</span>`}
        titleText="Project Grid"
      />
      <section className="project-page-area pt-130 pb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotope />
        </div>
      </section>
      {/* Project Area end */}
    </Layout>
  );
};
export default Projects;
