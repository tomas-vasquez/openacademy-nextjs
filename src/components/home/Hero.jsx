import Icons from "components/common/Icons";
import React from "react";
import { hero } from "../../../site.config";

export default function Hero() {
  return (
    <section className="section pt-5 pb-0 mt-4">
      <div className="container-fluid mt-md-1 px-0 px-md-3">
        <div className="rounded bg-light py-5 px-3 px-sm-0 shadow-md">
          <div className="row">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-12">
                  <div className="title-heading mr-lg-4">
                    <h1 className="heading mb-3">
                      {hero.mainTitle}
                      <span className="text-primary">: YourAcademy</span>
                    </h1>
                    <p className="para-desc text-muted">{hero.subTitle}</p>
                    <div className="subcribe-form mt-4 pt-2">
                      <form className="m-0">
                        <div className="form-group">
                          <input
                            type="text"
                            id="course"
                            name="name"
                            className="rounded shadow-md"
                            placeholder={hero.searchPlaceholder}
                          />
                          <button type="submit" className="btn btn-primary">
                            <Icons
                              icon="search"
                              className="fa-x1"
                              style={{
                                fontSize: "16px",
                              }}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="position-relative shadow-md">
                    <img
                      src={require("../../assets/images/course/online/hero2.jpg")}
                      className="rounded img-fluid mx-auto d-block"
                      alt=""
                    />
                    <div className="play-icon">
                      <a
                        href="#"
                        className="btn btn-danger m-0 p-3 text-lg shadow-md"
                        style={{ borderRight: "25px" }}
                      >
                        <Icons icon="play" className="fa-2x" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
