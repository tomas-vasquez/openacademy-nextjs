import Axios from "axios";

import Layout from "components/Layout";
import { apiLinks } from "../../site.config";
import AllCourses from "components/allCourses/Courses";
import Invitation from "components/common/Invitation";
import Header from "components/search/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Courses(props) {
  const { query } = useRouter();

  // useEffect(() => {
  //   alert("hola");
  // });

  return (
    <Layout title="All Courses">
      <Header query={query} />

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
