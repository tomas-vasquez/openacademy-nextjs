import SingleCourse from "components/SingleCourse";
import Layout from "components/Layout";
import { getAllAuthors, getAllCourses, getItems } from "utils/courses";

export default function Post(props) {
  return (
    <Layout>
      <SingleCourse {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const courses = await getAllCourses();
  const paths = [];

  courses.forEach((course) => {
    paths.push(`/${course.course_short_link}`);
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { course: course_short_link },
}) {
  const courses = await getAllCourses();
  const authors = await getAllAuthors(courses);

  const course = courses.find(
    (course) => course.course_short_link === course_short_link
  );

  const items = await getItems(course);

  return { props: { courses, authors, course, items } };
}
