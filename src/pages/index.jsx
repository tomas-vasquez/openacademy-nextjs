import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Hero from "components/home/Hero";
import Partners from "components/home/Partners";
import PopularCourses from "components/home/PopularCourses";
import Invitation from "components/common/Invitation";

import { getAllAuthors, getAllCourses } from "utils/courses";

export default function Index({ courses, authors }) {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Hero />
      <Partners />
      <section className="mb-5">
        <PopularCourses courses={courses} authors={authors} />
      </section>
      <Invitation />
    </Layout>
  );
}

export async function getStaticProps() {
  const courses = await getAllCourses();
  const authors = await getAllAuthors(courses);

  return {
    props: {
      courses,
      authors,
    },
  };
}
