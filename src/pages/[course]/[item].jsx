// import { getPostBySlug, getPostsSlugs } from "utils/posts";

import { getCourseData, getCoursesSlugs } from "utils/courses";

export default function Post(props) {
  return <>{JSON.stringify(props)}</>;
}

export async function getStaticPaths() {
  return {
    paths: await getCoursesSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { course, item } }) {
  const courseData = await getCourseData(course);
  return { props: { item, ...courseData } };
}
