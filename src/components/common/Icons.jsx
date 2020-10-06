import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTimes,
  faUser,
  faList,
  faComments,
  faPencilAlt,
  faPlay,
  faAngleUp,
  faAngleDown,
  faHeart,
  faArrowRight,
  faSignInAlt,
  faExternalLinkAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
    case "envelope":
      return faEnvelope;

    case "external-link":
      return faExternalLinkAlt;

    case "sign":
      return faSignInAlt;

    case "arrowRight":
      return faArrowRight;

    case "heart":
      return faHeart;

    case "angleUp":
      return faAngleUp;

    case "angleDown":
      return faAngleDown;

    case "play":
      return faPlay;

    case "star":
      return faStar;

    case "user":
      return faUser;

    case "list":
      return faList;

    case "comments":
      return faComments;

    case "pencil":
      return faPencilAlt;

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
