// import { getPostBySlug, getPostsSlugs } from "utils/posts";
import Course from "components/course";
import { getCourseData, getCoursesSlugs2 } from "utils/courses";

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
  const firstItem = courseData.items[0].item_title.replace(/ /g, "_");
  return { props: { item: firstItem, ...courseData } };
}
