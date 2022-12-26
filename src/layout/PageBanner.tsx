import Link from "next/link";
const PageBanner = ({ titleHtml, titleText }) => {
  return (
    <section className="page-banner-area pt-200 rpt-150 pb-150 rpb-100 rel z-1 bgc-black-with-lighting text-center">
      <div className="container">
        <div className="banner-inner rpt-10">
          <h1
            style={{
              color: "white",
            }}
            className="page-title wow fadeInUp delay-0-2s"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          ></h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a
                    style={{
                      color: "white",
                    }}
                  >
                    home
                  </a>
                </Link>
              </li>
              <li
                style={{
                  color: "#fc653c",
                }}
                className="breadcrumb-item active"
              >
                {titleText}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="banner-shapes">
        <img
          className="shape-one"
          src="assets/images/shapes/hero-shape1.png"
          alt="Shape"
        />
        <img
          className="shape-two"
          src="assets/images/shapes/hero-shape2.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default PageBanner;
