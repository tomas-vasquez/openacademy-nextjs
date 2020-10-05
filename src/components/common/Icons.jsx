import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faReact,
  faAngular,
  faVuejs,
  faBootstrap,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const getIcon = (icon) => {
  switch (icon) {
    case "star":
      return faStar;

    case "github":
      return faGithub;

    case "facebook":
      return faFacebook;

    case "twitter":
      return faTwitter;

    case "instagram":
      return faInstagram;

    case "youtube":
      return faYoutube;

    case "linkedin":
      return faLinkedin;

    case "node":
      return faNodeJs;

    case "js":
      return faJsSquare;

    case "react":
      return faReact;

    case "angular":
      return faAngular;

    case "vuejs":
      return faVuejs;

    case "bootstrap":
      return faBootstrap;

    default:
      return faTimes;
  }
};

export default function Icons(props) {
  return <FontAwesomeIcon {...props} icon={getIcon(props.icon)} />;
}
