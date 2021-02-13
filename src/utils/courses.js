// import Axios from "axios";
import { apiLinks } from "../../site.config";

// Firebase
import firebase from "firebase/app";
import firebaseConfig from "firebase.config";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

var fireStore = firebase.firestore();

export const getAllCourses = async () => {
  let courses = [];
  const querySnapshot = await fireStore.collection("courses").get();
  for (const doc of querySnapshot.docs) {
    const course = doc.data();
    courses.push(course);
  }
  return courses;
};

export const getAllAuthors = async (courses) => {
  let profiles = [];
  let authorIds = [];
  let profileRefs = [];

  authorIds = courses.map((course) => course.course_author_id);
  authorIds = [...new Set(authorIds)];

  profileRefs = authorIds.map((authorId) =>
    fireStore.collection("profiles").doc(`${authorId}`)
  );

  const querySnapshot = await fireStore.collection("profiles").get();

  for (const doc of querySnapshot.docs) {
    const profile = { ...doc.data(), id: doc.id };
    profiles.push(profile);
  }

  return profiles;
};

const sortItems = (array) => {
  var aux = array;

  for (let y = 0; y <= array.length - 2; y++) {
    for (let i = 0; i <= array.length - 2; i++) {
      if (array[i].item_sort > array[i + 1].item_sort) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  return array;
};

export async function getCoursesSlugs() {
  let paths = [];

  // const response = await Axios({
  //   method: "get",
  //   url: apiLinks.getAllCourses,
  // });
  // const courses = response.data.courses;

  // for (let index = 0; index < courses.length; index++) {
  //   const course = courses[index];

  //   const response = await Axios({
  //     method: "get",
  //     url: apiLinks.getItems + course.course_short_link,
  //   });
  //   const items = sortItems(response.data.items);
  //   for (let index = 0; index < items.length; index++) {
  //     const item = items[index];
  //     paths.push(
  //       `/${course.course_short_link}/${getShortLink(item.item_title)}`
  //     );
  //   }
  // }
  return paths;
}

export async function getCoursesSlugs2() {
  let paths = [];
  const response = await Axios({
    method: "get",
    url: apiLinks.getAllCourses,
  });
  const courses = response.data.courses;
  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    paths.push(`/${course.course_short_link}`);
  }
  return paths;
}

export async function getCourseData(course) {
  const response = await Axios({
    method: "get",
    url: apiLinks.getAllCourses,
  });
  const courses = response.data.courses;
  const authors = response.data.authors;

  const currentCourse = courses.find((_course) => {
    return _course.course_short_link === course;
  });

  const currentAuthor = authors.find((_author) => {
    return currentCourse.course_author_id === _author._id;
  });

  const items = await getItems(currentCourse);

  return {
    course: currentCourse,
    author: currentAuthor,
    items: items,
  };
}

/* =========================================================
 *
 * ========================================================= */

export const getItems = async (course) => {
  const response2 = await Axios({
    method: "get",
    url: apiLinks.getItems + course.course_short_link,
  });
  return sortItems(response2.data.items);
};
/* =========================================================
 *
 * ========================================================= */

export const getShortLink = (link) => {
  let newString = link;
  newString = newString.toLowerCase();
  newString = newString.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newString = newString.replace(/ /g, "_");
  newString = newString.replace(/\?/g, "");
  newString = newString.replace(/¿/g, "");
  return newString;
};
