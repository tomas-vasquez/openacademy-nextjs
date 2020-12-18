import Axios from "axios";

import Layout from "components/Layout";
import SEO from "components/common/Seo";
import { apiLinks } from "../../site.config";
import AllCourses from "components/allCourses/Courses";

export default function Courses(props) {
  return (
    <Layout title="All Courses">
      <SEO title="All posts" />
      <AllCourses
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
