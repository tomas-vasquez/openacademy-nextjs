import Course from "components/course";
import {
  getCourseData,
  getCoursesSlugs,
  getItemDescription,
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
  const courseData = await getCourseData(course, item);
  const currentItem = courseData.items.find((_item) => {
    return _item.item_title.replace(/ /g, "_") === item;
  });
  const description = await getItemDescription(currentItem);
  return { props: { currentItem, ...courseData, description } };
}
