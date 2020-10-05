const apiUrl = "http://localhost:3001";

const siteMetadata = {
  title: "Open Academy",
  author: {
    name: "Tomas Vasquez",
    summary: "who works building clean user interfaces with React.",
  },
  description: "A blog created with Next.js and Tailwind.css",
  siteUrl: "https://nextjs-starter-blog-demo.netlify.app/",
  language: "es-ES",
  social: {
    twitter: "tomasdetloging",
  },
};

const apiLinks = {
  apiLoginUrl: apiUrl + "/login",
  apiSignupUrl: apiUrl + "/signup",
  userPicUrl: apiUrl + "/storage/user_pics",
  coursePicUrl: apiUrl + "/storage/course_pics",
  courseItemsDescriptionsUrl: apiUrl + "/storage/descriptions/",
  flagsUrl: apiUrl + "/storage/flags",
  testsUrl: apiUrl + "/academy/tests",
  getAllCourses: apiUrl + "/academy/courses",
  getItems: apiUrl + "/academy/items/",
};

const socialIcons = [
  {
    id: 0,
    icon: "github",
    url: "https://github.com/tomasdetloging",
  },
  {
    id: 356,
    icon: "youtube",
    url: "https://www.facebook.com/tomasdetloging",
  },
  {
    id: 3,
    icon: "linkedin",
    url: "https://www.linkedin.com/in/tomasdetloging/",
  },
  {
    id: 2,
    icon: "instagram",
    url: "https://www.instagram.com/tomasdetloging/",
  },
  {
    id: 4,
    icon: "twitter",
    url: "https://www.twitter.com/tomasdetloging/",
  },
];

module.exports = { socialIcons, siteMetadata, apiUrl, apiLinks };
