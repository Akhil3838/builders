import React from 'react'

function page() {
  return (
    <>
    <div className="page">
  {/* <!-- preloader start --> */}
        {/* <div id="preloader">
          <div id="status">&nbsp;</div>
        </div> */}
        {/* <!-- preloader end --> */}

        <header id="masthead" className="header cmt-header-style-01">
  <div className="cmt-header-wrap">
    <div id="cmt-stickable-header-w" className="cmt-stickable-header-w clearfix">
      <div id="site-header-menu" className="site-header-menu">
        <div className="site-header-menu-inner cmt-stickable-header visible-title">
          <div className="container">
            <div className="row">
              <div className="col">

                {/* Topbar */}
                <div className="cmt-topbar-wrapper cmt-bgcolor-darkgrey cmt-textcolor-white clearfix">
                  <div className="cmt-topbar-content">
                    <div className="topbar-right text-right">
                      <ul className="top-contact">
                        <li>
                          <span className="tel-no">
                            Your Trusted 24 Hours Service Provider!
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o"></i>
                          <a href="mailto:cherupuzhabuilders@gmail.com">cherupuzhabuilders@gmail.com</a>
                        </li>
                        <li>
                          <i className="fa fa-phone"></i>
                          090205 85868
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Branding */}
                <div className="site-branding">
                  <a className="home-link" href="/" title="Raxena" rel="home">
                    <img
                      id="logo-img"
                      className="img-center"
                      src="images/logo-img.png"
                      alt="logo-img"
                    />
                  </a>
                </div>

                {/* Navigation */}
                <div id="site-navigation" className="site-navigation cmt-textcolor-white">

                  {/* Social Links */}
                  <div className="cmt-social-links-wrapper list-inline">
                    <ul className="social-icons square">
                      <li><a href="#"><i className="ti ti-facebook"></i></a></li>
                      <li><a href="#"><i className="ti ti-twitter"></i></a></li>
                      <li><a href="#"><i className="ti ti-google"></i></a></li>
                      <li><a href="#"><i className="ti ti-linkedin"></i></a></li>
                    </ul>
                  </div>

                  {/* Header Icons */}
                  <div className="cmt-header-icons">
                    <div className="cmt-header-icon cmt-header-search-link">
                      <a href="#"><i className="fa fa-search"></i></a>
                      <div className="cmt-search-overlay">
                        <form method="get" className="cmt-site-searchform" action="#">
                          <div className="w-search-form-h">
                            <div className="w-search-form-row">
                              <div className="w-search-input">
                                <input
                                  type="search"
                                  className="field searchform-s"
                                  name="s"
                                  placeholder="Type Word Then Enter..."
                                />
                                <button type="submit">
                                  <i className="ti ti-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* Menu Toggle */}
                  <div className="cmt-menu-toggle">
                    <input type="checkbox" id="menu-toggle-form" />
                    <label htmlFor="menu-toggle-form" className="cmt-menu-toggle-block">
                      <span className="toggle-block toggle-blocks-1"></span>
                      <span className="toggle-block toggle-blocks-2"></span>
                      <span className="toggle-block toggle-blocks-3"></span>
                    </label>
                  </div>

                  {/* Nav */}
                  <nav id="menu" className="menu">
                    <ul className="dropdown">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about-us">About</a>
                      </li>
                      <li className="active">
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contacts</a>
                      </li>
                    </ul>
                  </nav>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{/* Page Title */}
<div className="cmt-page-title-row">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="title-box">
          <div className="page-title-heading">
            <h1 className="title">Services</h1>
          </div>

          <div className="breadcrumb-wrapper">
            <span>
              <a title="Homepage" href="index.html">
                <i className="ti ti-home"></i> Home
              </a>
            </span>

            <span className="cmt-bread-sep">
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </span>

            <span>
              <span>Services</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='site-main'>
    {/* Services Top Section */}
<section className="cmt-row services-top-section clearfix">
  <div className="container">
    <div className="row">
      {/* Section Title */}
      <div className="col-12 mb-4">
        <div className="section-title clearfix text-center">
          <div className="title-header">
            <h5>OUR SERVICES</h5>
            <h2 className="title">Our Services</h2>
          </div>
        </div>
      </div>

      {/* Service 1 - Plan */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/new/h4.jpeg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-house"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Plan</h5>
              </div>
              <div className="featured-desc">
                <p>
                  Comprehensive planning support for your project from start to finish.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Estimation */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/new/h5.jpeg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-sketch"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Estimation</h5>
              </div>
              <div className="featured-desc">
                <p>
                  Accurate cost and quantity estimation tailored to your construction needs.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Structural Design */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/new/h7.jpeg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-wrench"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Structural Design</h5>
              </div>
              <div className="featured-desc">
                <p>
                  Safe and efficient structural design complying with relevant codes and standards.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Chartered Engineering Service */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/new/h12.jpeg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-gear"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Chartered Engineering Service</h5>
              </div>
              <div className="featured-desc">
                <p>
                  Professional chartered engineering services for reports, approvals, and certifications.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 5 - Supervision */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/new/h25.jpeg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-idea"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Supervision</h5>
              </div>
              <div className="featured-desc">
                <p>
                  On-site supervision to ensure quality, safety, and timely execution of works.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 6 - Certi */}
      <div className="col-lg-4 col-md-6">
        <div className="featured-imagebox-services mb-30">
          <div className="featured-thumbnail box-shadow">
            <img
              className="img-fluid"
              src="images/services/06.jpg"
              alt=""
            />
            <div className="cmt-box-view-overlay"></div>
          </div>

          <div className="featured-content featured-content-services box-shadow">
            <div className="featured-icon-box">
              <div className="featured-icon">
                <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                  <i className="flaticon flaticon-helmet"></i>
                </div>
              </div>
            </div>

            <div className="bottom-content-services">
              <div className="featured-title">
                <h5>Certi</h5>
              </div>
              <div className="featured-desc">
                <p>
                  Certification-related support and documentation for your engineering projects.
                </p>
              </div>
            </div>

            <div className="services-icon-box">
              <span>
                <i className="ti ti-plus"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


</div>

{/* Footer */}
<footer className="footer widget-footer clearfix">

  {/* First Footer */}
  <div className="first-footer cmt-bgcolor-darkgrey">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-lg-3">
          <div className="footer-logo">
            <img
              id="footer-logo-img"
              className="img-center"
              src="images/footer-logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-9">
          <div className="cmt-footer-cta-wrapper cmt-bgcolor-skincolor box-shadow2">
            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 widget-area">
                <div className="featured-icon-box iconalign-before-heading cmt-icon_element-size-lg">
                  <div className="featured-content">

                    <div className="featured-icon">
                      <div className="cmt-icon cmt-icon_element-color-white cmt-icon_element-size-lg">
                        <i className="flaticon flaticon-email"></i>
                      </div>
                    </div>

                    <div className="featured-title">
                      <h5>Subscribe To Our Newsletter</h5>
                      <p>
                        Stay in touch with us to get latest news and discount coupons
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 widget-area">
                <form
                  id="subscribe-form"
                  className="newsletter-form"
                  method="post"
                  action="#"
                  data-mailchimp="true"
                >
                  <div
                    className="mailchimp-inputbox clearfix"
                    id="subscribe-content"
                  >
                    <p>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address.."
                        required
                      />
                    </p>
                    <p>
                      <button className="btn" type="submit">
                        <i className="fa fa-envelope"></i>
                      </button>
                    </p>
                  </div>

                  <div id="subscribe-msg"></div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Second Footer */}
  <div className="second-footer cmt-textcolor-white">
    <div className="container">
      <div className="row">

        {/* Widget 1 */}
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
          <div className="widget widget_contact clearfix">
            <h3 className="widget-title">Get In Touch</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                Cherupuzha Builders, Kannur, India, 670511
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                Email : <a href="mailto:cherupuzhabuilders@gmail.com">cherupuzhabuilders@gmail.com</a>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                Phone : 090205 85868
              </li>
            </ul>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
          <div className="widget widget_nav_menu clearfix">
            <h3 className="widget-title">Useful Links</h3>
            <ul id="menu-footer-services">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="contact-us">Contact Us</a>
              </li>
              {/* <li>
                <a href="#">Gallery</a>
              </li> */}
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Review</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
          <div className="widget widget_post clearfix">
            <h3 className="widget-title">Recent Posts</h3>
            <ul className="cmt-recent-post-list">
              <li>
                <a href="#">
                  <img src="images/blog/post-01.jpg" alt="post-01" />
                </a>
                <a href="single-blog.html">Our Biggest Summer Meetup</a>
                <span className="post-date clearfix">August 1, 2018</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/blog/post-02.jpg" alt="post-02" />
                </a>
                <a href="single-blog.html">Our Biggest Summer Meetup</a>
                <span className="post-date clearfix">Octomber 10, 2019</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Widget 4 */}
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
          <div className="widget widget_text clearfix">
            <h3 className="widget-title">Get Free Estimate</h3>
            <div>
              <h3 className="widget_text_title cmt-textcolor-skincolor">
                090205 85868
              </h3>
              <p>Our online scheduling and payment system is safe.</p>
              <a
                className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-border cmt-btn-color-skincolor mt-15 mb-20"
                href="#"
              >
                Request With Online Form
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="bottom-footer-text cmt-bgcolor-darkgrey cmt-textcolor-white">
    <div className="container">
      <div className="row copyright">

        <div className="col-md-8 cmt-footer2-left">
          <span>
            Copyright © 2019&nbsp;
            <a href="#">Construction</a>. All rights reserved.
          </span>
        </div>

        <div className="col-md-4 cmt-footer2-right">
          <div className="social-icons">
            <ul className="list-inline">
              <li><a href="#"><i className="ti ti-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="ti ti-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="ti ti-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="ti ti-google" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>

</footer>

    {/* <!--back-to-top start--> */}
    <a id="totop" href="#top">
        <i className="fa fa-angle-up"></i>
    </a>
    {/* <!--back-to-top end--> */}
{/* Color Palate / Color Switcher */}
<div className="color-switcher">
  <div className="color-trigger">
    <i className="fa fa-gear"></i>
  </div>

  <div className="color-switcher-header">
    <h6>Switcher Colors</h6>
  </div>

  <div className="various-color clearfix">
    <div className="colors-list">
      <span
        className="theme-color default-color active"
        data-file="css/colors/default-color.css"
      ></span>
      <span
        className="theme-color theme-color1"
        data-file="css/colors/theme-color1.css"
      ></span>
      <span
        className="theme-color theme-color2"
        data-file="css/colors/theme-color2.css"
      ></span>
      <span
        className="theme-color theme-color3"
        data-file="css/colors/theme-color3.css"
      ></span>
      <span
        className="theme-color theme-color4"
        data-file="css/colors/theme-color4.css"
      ></span>
      <span
        className="theme-color theme-color5"
        data-file="css/colors/theme-color5.css"
      ></span>
    </div>
  </div>

  <h5>Layout Style</h5>

  <div className="layout-style">
    <a
      className="cmt-btn cmt-btn-size-sm cmt-btn-style-border cmt-btn-color-darkgrey mb-10 cmt-wide active"
      data-name="cmt-wide"
      href="#"
    >
      Wide
    </a>

    <a
      className="cmt-btn cmt-btn-size-sm cmt-btn-style-border cmt-btn-color-darkgrey mb-10 cmt-boxed"
      data-name="cmt-boxed"
      href="#"
    >
      Boxed
    </a>

    <a
      className="cmt-btn cmt-btn-size-sm cmt-btn-style-border cmt-btn-color-darkgrey layout-reset mb-25"
      data-name="cmt-reset"
      href="#"
    >
      Reset
    </a>
  </div>
</div>


    </div>
    </>
  )
}

export default page