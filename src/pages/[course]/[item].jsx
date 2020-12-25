import Course from "components/course";
import Layout from "components/Layout";
import { getCourseData, getCoursesSlugs, getShortLink } from "utils/courses";

export default function Post(props) {
  const { items, currentItem, course } = props;

  return (
    <Layout items={items} currentItem={currentItem} course={course}>
      <Course {...props} />
    </Layout>
  );
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

  const itemIndex = courseData.items.findIndex((_item) => {
    return getShortLink(_item.item_title) === item;
  });

  console.log(itemIndex);
  return { props: { currentItem, itemIndex, ...courseData } };
}
