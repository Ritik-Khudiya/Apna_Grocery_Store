import React from "react";
import "./Footer1.css";
import Icon1 from "../../assests/images/icon-1.svg";
import Icon2 from "../../assests/images/icon-2.svg";

import Icon3 from "../../assests/images/icon-3.svg";
import Icon4 from "../../assests/images/icon-4.svg";
import Icon5 from "../../assests/images/icon-5.svg";

import logo1 from "../../assests/images/logo1.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GooglePlay from "../../assests/images/google-play.jpg";
import Appstore from "../../assests/images/app-store.jpg";
import Payment from "../../assests/images/payment-method.png";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { Link } from "react-router-dom";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import NewsLetter from '../../Components/newsLetter'
import NewsLetter1 from '../../assests/images/newsletter.png'
const Footer = () => {
  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h3> Stay home & get your daily needs from our shop</h3>
              <p>Start You'r Daily Shopping with Apna Grocery Store</p>
              <br />
              <br className="res-hide" />
              <NewsLetter />
            </div>
            <div className="img">
              <img src={NewsLetter1} className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <div className="footerWrapper">
        <div className="footerBox">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} />
                  </span>
                  <div className="info">
                    <h5>Best Offers</h5>
                    <p>Order $30 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} />
                  </span>
                  <div className="info">
                    <h5>Free delivery</h5>
                    <p>24/7 hours services</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} />
                  </span>
                  <div className="info">
                    <h5>Great daily deal</h5>
                    <p>First time sign up</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} />
                  </span>
                  <div className="info">
                    <h5>Wide assortment</h5>
                    <p>Big discounts</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} />
                  </span>
                  <div className="info">
                    <h5>Easy returns</h5>
                    <p>Within 10 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={logo1} />
                </Link>
                <br />
                <p>Apna Grocery Store</p>
                <p>
                  <LocationOnOutlinedIcon />
                  <strong>Address</strong>: Apna grocery store 113 ,near railway
                  station Hissar 125001
                </p>
                <p>
                  <MailOutlineOutlinedIcon />
                  <strong>Email</strong>:ritikkumar5960@gmail.com
                </p>
                <p>
                  <PermPhoneMsgOutlinedIcon />
                  <strong>Phone</strong>:93500-11502
                </p>
                <p>
                  <AccessTimeOutlinedIcon />
                  <strong>Time</strong>: 9:00-7:00, Mon-Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h5>Company</h5>
                    <ul className='"footer-list mb-sm-5 mb-md-0'>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>Corporate</h5>
                    <ul className='"footer-list mb-sm-5 mb-md-0'>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>Account</h5>
                    <ul className='"footer-list mb-sm-5 mb-md-0'>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5>Popular</h5>
                    <ul className='"footer-list mb-sm-5 mb-md-0'>
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br  className="res-hide"/>
                <p>From App Store or Google Play</p>
                <div className="d-flex">
                  <Link to={""}>
                    <img src={Appstore} width={150} />
                  </Link>
                  <Link to={""}>
                    <img src={GooglePlay} className="mx-2" width={150} />
                  </Link>
                </div>
                <br />
                <p>Secured Payment Gateways</p>
                <img src={Payment} />
              </div>
            </div>

            <hr />
            <div className="row lastStrip">
              <div className="col-md-3 part1 part_1">
                <p>
                  © 2024,Apna Grocery Store - HTML Ecommerce Template All rights
                  reserved
                </p>
              </div>
              <div className="col-md-6 d-flex part2 part_2">
                <div className="m-auto d-flex align-items-center phWrap">
                  <div className="phNo d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">9500-11502</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                  <div className="phNo d-flex align-items-center mx-5">
                    <span>
                      <HeadphonesOutlinedIcon />
                    </span>
                    <div className="info ml-3">
                      <h3 className="text-g mb-0">93500-11502</h3>
                      <p className="mb-0">24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 part3 part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={"https://telegram.me/ritikkumar30"} target="_blank">
                        <TelegramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"https://www.linkedin.com/in/ritik-kumar-373075275/"} target="_blank">
                        <LinkedInIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>

                    <li className="list-inline-item">
                      <Link to={"https://www.fb.com/l/6lp1kJRRR"} target="_blank">
                        <FacebookIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
