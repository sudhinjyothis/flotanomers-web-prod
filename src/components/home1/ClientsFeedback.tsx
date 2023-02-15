import { Component, Fragment } from "react";
import Slider from "react-slick";
import React from "react";
export default class ClientsFeedback extends Component {
  [x: string]: any;
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 400,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const data = [
      {
        image: "assets/images/feedback/testimonial1.jpg",
        name: "John Doe",
        designation: "CEO, Company",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      },
      {
        image: "assets/images/feedback/testimonial2.jpg",
        name: "John Doe",
        designation: "CEO, Company",
        feedback:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
      },
    ];
    return (
      <Fragment>
        <section className="testimonial-area-two rel z-1 mt-130 mb-120">
          <div className="container for-middle-border">
            <div className="row justify-content-between align-items-center pb-90 rpb-35 wow fadeInUp delay-0-2s">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>Clients feedback</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="slider-arrow-btns text-lg-end">
                  <button
                    className="work-prev slick-arrow"
                    onClick={this.previous}
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button className="work-next slick-arrow" onClick={this.next}>
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <Slider
              className="testimonial-two-active"
              {...settings}
              ref={(c) => (this.slider = c)}
            >
              {data.map((item, i) => {
                return (
                  <div className="testimonial-item-two wow fadeInUp delay-0-2s">
                    <div className="testimonial-author">
                      <img src={item.image} alt="Author" />
                    </div>
                    <div className="testimonial-content">
                      <p>{item.feedback}</p>
                      <div className="author-description">
                        <span className="h5">{item.name}</span>
                        <span className="designation">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
