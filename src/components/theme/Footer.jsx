import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";
import { socialIcons } from "../../../site.config";

export default function Footer() {
  return (
    <>
      <footer className="mt-0 py-4 text-center bg-transparent text-white">
        <div className="container">
          <div className="row d-flex">
            <div className="col-11 col-md-5 ml-auto">
              <h5 className="text-uppercase mb-3">Links</h5>
              <p className=" mb-0">
                <Link href="/">
                  <span>Empleo</span>
                </Link>
                {" - "}
                <Link href="/">
                  <span>Condiciones</span>
                </Link>
                {" - "}
                <Link href="/">
                  <span>Política de Privacidad</span>
                </Link>
                {" - "}
                <Link href="/">
                  <span>Ayuda y asistencia</span>
                </Link>
              </p>
            </div>
            <div className="col-12 col-md-6  mt-5 mt-md-0 mr-auto">
              <h5 className="text-uppercase mb-4">Around the Web</h5>
              {socialIcons.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.icon}`}
                  className="btn btn-outline-light btn-social mx-1"
                >
                  <Icons icon={icon.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-2 text-center text-white">
        <div className="container">
          made with <i className="fa fa-heart" /> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://github.com/tomasdetloging"
            aria-label="My GitHub"
          >
            Tomi
          </a>{" "}
          using <i className="fab fa-react" />
        </div>
      </div>
    </>
  );
}
