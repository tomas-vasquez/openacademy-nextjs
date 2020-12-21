import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Register from "components/auth/register";

export default function Home(props) {
  return (
    <Layout>
      <SEO title="Signup" />
      <Register />
    </Layout>
  );
}
