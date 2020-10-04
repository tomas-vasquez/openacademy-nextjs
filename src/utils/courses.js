import Axios from "axios";
import { apiUrl } from "data/config";

export async function getCoursesSlugs() {
  let paths = [];

  const response = await Axios({
    method: "get",
    url: apiUrl + "/academy/courses",
  });
  const courses = response.data.courses;

  for (let index = 0; index < courses.length; index++) {
    const course = courses[index];

    const response = await Axios({
      method: "get",
      url: apiUrl + "/academy/items/" + course.course_short_link,
    });
    const items = response.data.items;

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      paths.push(
        `/${course.course_short_link}/${item.item_title.replace(/ /g, "_")}`
      );
    }
  }

  return paths;
}

export async function getCoursesSlugs2() {
  let paths = [];
  const response = await Axios({
    method: "get",
    url: apiUrl + "/academy/courses",
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
    url: apiUrl + "/academy/courses",
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
    url: apiUrl + "/academy/items/" + currentCourse.course_short_link,
  });
  const items = response2.data.items;

  return { course: currentCourse, author: currentAuthor, items };
}
