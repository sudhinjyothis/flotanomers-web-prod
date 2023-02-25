import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";

const RecentProjects = () => {
  return (
    <section className="project-area-three py-130 rel z-1" id="project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Recent Projects</span>
              <h2>Look at latest works gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...projectThreeActive} className="project-three-active">
      <div></div>
        <div className="project-item style-two wow fadeInUp delay-0-2s">
          <div className="project-iamge">
            <img src="assets/images/projects/1.webp" alt="Project" />
            <div className="project-over">
              <Link href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-content">
            <h4>
              <Link href="/project-details">Muncipal Survey Project</Link>
            </h4>
            <span className="category">Andhra Pradesh</span>
          </div>
        </div>
       
        <div></div>
      </Slider>
    </section>
  );
};
export default RecentProjects;
