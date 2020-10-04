import React from "react";
import { Link } from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-5 text-light bg-trasparent">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-4 text-center text-lg-left">
              <h5 className="text-uppercase mb-3">Links</h5>
              <p className=" mb-0">
                {/* <Link to="/" className="text-white">
                  Empleo
                </Link>
                {" - "}
                <Link to="/" className="text-white">
                  Condiciones
                </Link>
                {" - "}
                <Link to="/" className="text-white">
                  Política de Privacidad
                </Link>
                {" - "}
                <Link to="/" className="text-white">
                  Ayuda y asistencia
                </Link> */}
              </p>
            </div>
            <div className="col-12 col-md-6 col-xl-4 mt-5 mt-md-0 text-center">
              <h5 className="text-uppercase mb-4">Around the Web</h5>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fa fa-fw fa-github"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fa fa-fw fa-youtube-play"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fa fa-fw fa-linkedin"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fa fa-fw fa-twitter"></i>
              </a>
            </div>
            <div className="d-none d-xl-block col-xl-4">
              <h5 className="text-uppercase mb-3">About open-portfolio</h5>
              <p className="m-0">
                Project code is open source. Feel free to{" "}
                <a
                  rel="noopener"
                  href="https://github.com/tomasdetloging/open-portafolio"
                  aria-label="My GitHub"
                  style={{ textDecoration: "underline", color: "white" }}
                >
                  clone
                </a>{" "}
                and make your own version.
              </p>
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
