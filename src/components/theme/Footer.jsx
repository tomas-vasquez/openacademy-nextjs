import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";
import { socialIcons, footer, siteMetadata } from "../../../site.config";

export default function Footer({ litle }) {
  return (
    <>
      {!litle && (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <div className="logo">
                  <Link href="/">
                    <h3
                      className="m-0"
                      style={{
                        color: "#fff",
                      }}
                    >
                      <i
                        style={{
                          boderRadius: "50%",
                          color: "#fff",
                        }}
                      >
                        <Icons
                          icon="code"
                          className="mr-2 bg-primary p-1 rounded "
                        />
                      </i>
                      {siteMetadata.title}
                    </h3>
                  </Link>
                </div>

                <p className="mt-4">{footer.aboutText}</p>
                <ul className="list-unstyled  mb-0 mt-4">
                  {socialIcons.map((icon, index) => (
                    <li className="list-inline-item" key={index}>
                      <a href="" className="text-foot">
                        <Icons className="fa-1x mx-2" icon={icon.icon} />
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
                        <i
                          data-feather="mail"
                          className="fea icon-sm icons"
                        ></i>
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control rounded"
                          placeholder="Your email:"
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
      )}
      <footer className="footer footer-bar py-3">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="text-sm-center">
                <small className={litle ? "mb-0 text-center" : "mb-0"}>
                  ©{new Date().getFullYear()} tu-academia.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
