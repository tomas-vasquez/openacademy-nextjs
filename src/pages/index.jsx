import Axios from "axios";

import Layout from "components/Layout";
import SEO from "components/common/Seo";
import { apiLinks } from "../../site.config";
import Courses from "components/allCourses/Courses";

export default function Home(props) {
  return (
    <Layout title="All Courses">
      <SEO title="All posts" />
      <Courses
        courses={props.courses.courses}
        authors={props.courses.authors}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await Axios({
    method: "get",
    url: apiLinks.getAllCourses,
  });
  const courses = response.data;
  return {
    props: { courses },
  };
}
