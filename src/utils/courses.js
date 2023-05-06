// Firebase
import app from "myFirebase";
import { collection, getDocs, query, where } from "firebase/firestore";

/* =========================================================
 *
 * ========================================================= */
export const getAllCourses = async () => {
  let courses = [];
  const db = app.firestore();

  const querySnapshot = await getDocs(collection(db, "courses"));
  querySnapshot.forEach((doc) => {
    const course = doc.data();
    courses.push(course);
  });

  return courses;
};

/* =========================================================
 *
 * ========================================================= */
export const getAllAuthors = async (courses) => {
  const db = app.firestore();

  let profiles = [];
  let authorIds = [];

  authorIds = courses.map((course) => course.course_author_id);
  authorIds = [...new Set(authorIds)];

  const querySnapshot = await getDocs(collection(db, "profiles"));
  querySnapshot.forEach((doc) => {
    const profile = { ...doc.data(), id: doc.id };
    profiles.push(profile);
  });

  return profiles;
};
/* =========================================================
 *
 * ========================================================= */

export const getItems = async (course) => {
  let items = [];
  const db = app.firestore();

  const querySnapshot = await getDocs(
    query(
      collection(db, "course_items"),
      where("item_course_id", "==", course.id)
    )
  );
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    items.push(item);
  });

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
