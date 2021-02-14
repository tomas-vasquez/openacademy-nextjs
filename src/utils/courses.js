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

export const getItems = async (course) => {
  let items = [];

  const querySnapshot = await fireStore
    .collection("course_items")
    .where("item_course_id", "==", course.id)
    .get();
  for (const doc of querySnapshot.docs) {
    const item = doc.data();
    items.push(item);
  }

  return items;
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
