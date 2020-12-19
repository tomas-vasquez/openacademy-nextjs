import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";
import { socialIcons, footer } from "../../../site.config";

export default function Footer() {
  return (
    <>
      {/* <div className="position-relative">
        <div className="shape overflow-hidden text-footer">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 125L2160 0H2880V250H0V125H720Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <a href="#" className="logo-footer">
                <img
                  src={require("../../assets/images/logo-light.png")}
                  height="24"
                  alt=""
                />
              </a>
              <p className="mt-4">{footer.aboutText}</p>
              <ul className="list-unstyled  mb-0 mt-4">
                {socialIcons.map((icon, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href="" className="">
                      <Icons
                        className="fa-1x text-white mx-2"
                        icon={icon.icon}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">{footer.LinksTitle}</h4>
              <ul className="list-unstyled footer-list mt-4">
                {footer.links.map((link, index) => {
                  return (
                    <li key={index}>
                      <a href={link.url} className="text-foot">
                        <Icons icon="dot" className="mr-1" />
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-sm-0">
              <h4 className="text-light footer-head">
                {footer.newsLetterTitle}
              </h4>
              <p className="mt-4">{footer.newsLetterText}</p>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="foot-subscribe form-group position-relative">
                      <i data-feather="mail" className="fea icon-sm icons"></i>
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        className="form-control pl-5 rounded"
                        placeholder="Your email : "
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      className="btn btn-soft-primary btn-block"
                      value="Subscribe"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-left">
                <p className="mb-0">
                  © 2019-{new Date().getFullYear()} YourAcademy. Made with{" "}
                  <Icons icon="heart" /> by{" "}
                  <a
                    className="badge badge-dark"
                    rel="noopener"
                    href="https://tomas-dev.vercel.app/"
                    aria-label="My GitHub"
                  >
                    Tomi
                  </a>{" "}
                  using <Icons icon="react" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
