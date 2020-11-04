import Course from "components/course";
import {
  getCourseData,
  getCoursesSlugs,
  getItemDescription,
  getShortLink,
} from "utils/courses";

export default function Post(props) {
  return <Course {...props} />;
}
export async function getStaticPaths() {
  return {
    paths: await getCoursesSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { course, item } }) {
  const courseData = await getCourseData(course);
  const currentItem = courseData.items.find((_item) => {
    return getShortLink(_item.item_title) === item;
  });
  const description = await getItemDescription(currentItem);
  return { props: { currentItem, ...courseData, description } };
}
