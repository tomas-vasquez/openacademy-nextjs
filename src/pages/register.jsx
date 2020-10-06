import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Register from "components/auth/register";
import Invitation from "components/common/Invitation";

export default function Home(props) {
  return (
    <Layout>
      <SEO title="Signup" />
      <Register />
      <Invitation />
    </Layout>
  );
}
