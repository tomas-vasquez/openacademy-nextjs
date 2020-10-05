import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Login from "components/auth/login";

export default function Home(props) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Login />
    </Layout>
  );
}
