import Link from "next/link";
import React from "react";
import { navbarLinks } from "../../../../site.config";

export default function Navigation({ isDark }) {
  return (
    <ul className={isDark ? "navigation-menu" : "navigation-menu nav-light"}>
      {navbarLinks.map((value, index) => {
        return (
          <li key={index} className={value.submenu ? "has-submenu" : ""}>
            {value.url ? (
              <Link href={value.url}>{value.title}</Link>
            ) : (
              <a href="#!">{value.title}</a>
            )}
            {value.submenu ? (
              <>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  {value.submenu.map((sub, index) => {
                    return (
                      <li key={index} className="has-submenu">
                        <Link href={sub.url}>{sub.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
