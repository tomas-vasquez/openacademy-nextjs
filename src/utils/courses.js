import Axios from "axios";
import { apiLinks } from "../../site.config";

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

export async function getItemDescription(item) {
  try {
    const response = await Axios({
      method: "get",
      url: apiLinks.courseItemsDescriptionsUrl + item._id,
    });
    return response.data;
  } catch (error) {
    return "sin description";
  }
}

export async function getCoursesSlugs() {
  let paths = [];

  const response = await Axios({
    method: "get",
    url: apiLinks.getAllCourses,
  });
  const courses = response.data.courses;

  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];

    const response = await Axios({
      method: "get",
      url: apiLinks.getItems + course.course_short_link,
    });
    const items = sortItems(response.data.items);

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      paths.push(
        `/${course.course_short_link}/${getShortLink(item.item_title)}`
      );
    }
  }
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

  const response2 = await Axios({
    method: "get",
    url: apiLinks.getItems + currentCourse.course_short_link,
  });
  const items = sortItems(response2.data.items);

  return {
    course: currentCourse,
    author: currentAuthor,
    items,
  };
}

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
