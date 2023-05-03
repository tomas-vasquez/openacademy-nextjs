import Course from "components/course";
import Layout from "components/Layout";
import {
  getAllCourses,
  getAllAuthors,
  getItems,
  getShortLink,
} from "utils/courses";

export default function post(props) {
  const { items, currentItem, course } = props;

  return (
    <Layout items={items} currentItem={currentItem} course={course}>
      <Course {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const courses = await getAllCourses();
  const paths = [];

  for (const course of courses) {
    const items = await getItems(course);

    for (const item of items) {
      paths.push(
        `/${course.course_short_link}/${getShortLink(item.item_title)}`
      );
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { course: course_short_link, item },
}) {
  const courses = await getAllCourses();
  const authors = await getAllAuthors(courses);
  const course = courses.find(
    (course) => course.course_short_link === course_short_link
  );
  const items = await getItems(course);
  const currentItem = items.find(
    (_item) => getShortLink(_item.item_title) === item
  );
  console.log(courses);
  return { props: { courses, authors, course, items, currentItem } };
}
