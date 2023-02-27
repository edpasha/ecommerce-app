import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaInfo } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24049.27944193392!2d20.071363451163226!3d41.10919812458469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135043008278d315%3A0x4243327c8f696e0a!2sElbasan%2C%20Albania!5e0!3m2!1sen!2s!4v1676744147927!5m2!1sen!2s"
              width="600"
              height="450"
              className="border-none w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="form-control w-100"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    />
                  </div>
                  <div>
                    <button className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaHome className="fs-5" />
                    <address className="mb-0">
                      Str. 28 Nëntori, Quarter 11 Nëntori, Elbasan PinCode: 3005
                    </address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BsTelephoneFill className="fs-5" />
                    <a href="tel:+355 685560422">+355 685560422</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <HiMail className="fs-5" />
                    <a href="mailto:edipaceaishedi@gmail.com">
                      edipaceaishedi@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaInfo className="fs-5" />
                    <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
