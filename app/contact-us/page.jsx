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
                  <a className="home-link" href="/" title="Cherupuzha Builders" rel="home">
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
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li className="active">
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
            <h1 className="title">Contact us</h1>
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
              <span>Contact us</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='site-main'>

{/* Contact Box Section */}
<section className="cmt-row contact-box-section clearfix">
  <div className="container">
    <div className="row">

      {/* Box 1 */}
      <div className="col-md-4">
        <div className="contact-box text-center">
          <h5>Visit Our Place</h5>
          <span>14 Branches Over The World</span>

          <div className="contact-detail-box">
            <div className="featured-icon">
              <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                <i className="fa fa-life-ring"></i>
              </div>
            </div>

            <span>Phone: 090205 85868</span>
            <span>
              Email:{" "}
              <a href="mailto:cherupuzhabuilders@gmail.com">cherupuzhabuilders@gmail.com</a>
            </span>
            <h6><a href="#">Locate us on map</a></h6>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="col-md-4">
        <div className="contact-box text-center">
          <h5>Quick Contact</h5>
          <span>Get Quick Touch With Us</span>

          <div className="contact-detail-box">
            <div className="featured-icon">
              <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                <i className="flaticon flaticon-phone-call"></i>
              </div>
            </div>

            <span>
              Cherupuzha Builders, Kannur, India, 670511
            </span>
            <h6><a href="#">Get call back</a></h6>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="col-md-4">
        <div className="contact-box text-center">
          <h5>Visit Bitween</h5>
          <span>Business Hours For Only Office</span>

          <div className="contact-detail-box">
            <div className="featured-icon">
              <div className="cmt-icon cmt-icon_element-color-skincolor cmt-icon_element-size-md">
                <i className="flaticon flaticon-clock"></i>
              </div>
            </div>

            <span>
              Mon - Satday: 9.00am to 6.00pm Sunday: Holiday
            </span>
            <h6><a href="#">Make an appointment</a></h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Map Section */}
<div className="cmt-row map-section cmt-bgcolor-white">
  <div className="container">
    <div className="row">

      {/* Map Column */}
      <div className="col-lg-6">
       <div className="map-wrapper">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31410.52654974632!2d77.4777206482626!3d10.236092452412992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0766637f0a0387%3A0x9ffae9373758c13c!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1769146442739!5m2!1sen!2sin"
    width="600"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>

      </div>

      {/* Form Column */}
      <div className="col-lg-6">
        <div className="spacing-12 box-shadow cmt-bgcolor-white">

          {/* Section Title */}
          <div className="section-title clearfix">
            <div className="title-header">
              <h4 className="title">Call us or fill the Form</h4>
            </div>
          </div>

          {/* Form */}
          <form
            id="cmt-quote-form"
            className="cmt-quote-form clearfix"
            method="post"
            action="#"
          >
            <div className="row">

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message"
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group text-left">
                  <button
                    type="submit"
                    id="submit"
                    className="cmt-btn cmt-btn-size-md cmt-btn-bgcolor-skincolor w-100"
                  >
                    Submit quote
                  </button>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>

    </div>
  </div>
</div>

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
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Map</a></li>
              <li><a href="#">Review</a></li>
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
            <a href="#">Cherupuzha Builders</a>. All rights reserved.
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