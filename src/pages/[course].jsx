import SingleCourse from "components/SingleCourse";
import Layout from "components/Layout";
import { getCourseData, getCoursesSlugs2 } from "utils/courses";
import Axios from "axios";
import { apiLinks } from "../../site.config";

export default function Post(props) {
  const { items, currentItem, course } = props;

  return (
    <Layout items={items} currentItem={currentItem} course={course}>
      <SingleCourse {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: await getCoursesSlugs2(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { course } }) {
  const response = await Axios({
    method: "get",
    url: apiLinks.getAllCourses,
  });

  const { courses, authors } = response.data;
  const courseData = await getCourseData(course);
  const currentItem = courseData.items[0];

  return { props: { courses, authors, currentItem, ...courseData } };
}
