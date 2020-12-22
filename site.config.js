const apiUrl = process.env.API_URL || "http://localhost:3001";

const siteMetadata = {
  title: "Your Academy",
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
  // userPicUrl: apiUrl + "/storage/user_pics",
  // coursePicUrl: apiUrl + "/storage/course_pics",
  courseItemsDescriptionsUrl: apiUrl + "/academy/descriptions/",
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

const navbarLinks = [
  { title: "Inicio", url: "/" },
  {
    title: "Cursos",
    submenu: [
      { title: "Inicio", url: "/" },
      { title: "Courses", url: "/courses" },
    ],
  },
];

const hero = {
  mainTitle: "Inicia tu aprendizaje online con",
  subTitle: "bla bla bla bla bla",
  searchPlaceholder: "Buscar...",
};

const allCourses = {
  title: "Cursos",
  subTitle: "bla bla bla bla bla",
  searchPlaceholder: "Buscar...",
  bestCourses: {
    title: "Mejores cursos",
    subTitle: "bla bla bla bla bla",
  },
  courses: {
    title: "Todos los cursos",
    subTitle: "bla bla bla bla bla",
  },
};

const singleCourse = {
  buttonStartText: "Empezar",
  description: {
    descriptionTitleText: "Descripcion del curso",
    contentTitleText: "Contenido del curso",
    requiredTitleText: "Requisitos del curso",
    required: [],
  },
};

const popularCourses = {
  title: "Cursos mas populares",
  subTitle: "bla bla bla bla bla",
};

const footer = {
  aboutText:
    "Start working with cursos-online.com that can provide everything you need to generate awareness, drive traffic, connect.",
  LinksTitle: "Enlaces",
  links: [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Inicio",
      url: "/",
    },
  ],
  newsLetterTitle: "NewsLetter",
  newsLetterText: "Registrate y recive las ultimas novedades por tu correo.",
};

module.exports = {
  socialIcons,
  siteMetadata,
  apiUrl,
  apiLinks,
  navbarLinks,
  hero,
  singleCourse,
  allCourses,
  popularCourses,
  footer,
};
