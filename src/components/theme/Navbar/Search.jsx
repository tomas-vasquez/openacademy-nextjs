import Icons from "components/common/Icons";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Modal } from "reactstrap";
import { search as searchConfig } from "../../../../site.config";

export default function Search() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const word = document.getElementById("search-box-2").value;
    router.replace(`/${"search"}?word=${word}`);
    setOpen(false);
  };

  return (
    <>
      <div className="menu-extras mx-2 my-auto">
        <div className="menu-item pt-2">
          <a
            className="text-muted pt-1"
            href="#!"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Icons
              icon="search"
              style={{
                fontSize: "20px",
              }}
            />
          </a>
        </div>
      </div>

      <Modal
        isOpen={open}
        toggle={() => {
          setOpen(!open);
        }}
        contentClassName="bg-transparent border-0"
      >
        <div className="pt-5 subcribe-form px-3" style={{ marginTop: -25 }}>
          <form style={{ maxWidth: "400px" }} onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                id="search-box-2"
                className="text-dark rounded-pill shadow-md bg-light"
                placeholder={searchConfig.searchPlaceholder}
              />
              <button type="submit" className="btn btn-pills btn-primary">
                <Icons icon="search" />
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
