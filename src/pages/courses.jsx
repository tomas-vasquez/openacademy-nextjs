import Axios from "axios";

import Layout from "components/Layout";
import SEO from "components/common/Seo";
import { apiLinks } from "../../site.config";
import AllCourses from "components/allCourses/Courses";
import Invitation from "components/common/Invitation";
import Header from "components/allCourses/Header";
import BestCourses from "components/allCourses/BestCourses";

export default function Courses(props) {
  return (
    <Layout title="All Courses">
      <SEO title="All posts" />
      <Header />
      <BestCourses
        courses={props.courses.courses}
        authors={props.courses.authors}
      />
      <AllCourses
        courses={props.courses.courses}
        authors={props.courses.authors}
      />
      <Invitation />
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
