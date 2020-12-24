import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React from "react";
import { allCourses } from "../../../site.config";

export default function Hero() {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box").value;
    router.push(`/${"search"}?word=${word}`);
  };

  return (
    <>
      <section className="section pt-5 pb-0 mt-4">
        <div className="container-fluid mt-md-1 px-0 px-md-3">
          <div
            className="rounded py-4 pb-4 px-3 px-sm-0 shadow-md"
            style={{
              backgroundColor: "#1a274e",
            }}
          >
            <div className="row">
              <div className="container">
                <div className="title-heading text-center py-0">
                  <h2 className="text-white title-dark mb-3">
                    {allCourses.title}
                  </h2>
                  <p className="para-desc mx-auto text-white-50 mb-4">
                    {allCourses.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="subcribe-form px-4" style={{ marginTop: -25 }}>
            <form style={{ maxWidth: "800px" }} onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  id="search-box"
                  name="name"
                  className="text-dark rounded-pill shadow-md bg-white"
                  placeholder={allCourses.searchPlaceholder}
                />
                <button type="submit" className="btn btn-pills btn-primary">
                  <Icons icon="search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
