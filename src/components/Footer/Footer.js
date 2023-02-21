import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href='' >C</a></li>
              <li><a href=''>UI Design</a></li>
              <li><a href='' >PHP</a></li>
              <li><a href='' >Java</a></li>
              <li><a href='' >Android</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href='' >About Us</a></li>
              <li><a href='' >Contact Us</a></li>
              <li><a href=''>Contribute</a></li>
              <li><a href='' >Privacy Policy</a></li>
              <li><a href=''>Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by Linh Vũ
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a><i className="ri-facebook-circle-fill"></i></a></li>
              <li><a><i className="ri-youtube-fill"></i></a></li>
              <li><a><i className="ri-instagram-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer