import Course from "components/course";
import {
  getCourseData,
  getCoursesSlugs2,
  getItemDescription,
} from "utils/courses";

export default function Post(props) {
  return <Course {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: await getCoursesSlugs2(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { course } }) {
  const courseData = await getCourseData(course);
  const currentItem = courseData.items[0];
  const description = await getItemDescription(currentItem);

  return { props: { currentItem, ...courseData, description } };
}
