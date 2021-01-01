import Axios from "axios";

import Layout from "components/Layout";
import SEO from "components/common/Seo";
import { apiLinks } from "../../site.config";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import PopularCourses from "components/home/PopularCourses";
import Invitation from "components/common/Invitation";

export default function Index(props) {
  return (
    <Layout title="Inicio">
      <SEO title="Inicio" />
      <Hero />
      <Partners />
      <section className="mb-5">
        <PopularCourses
          courses={props.courses.courses}
          authors={props.courses.authors}
        />
      </section>
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
