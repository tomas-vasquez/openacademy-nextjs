import Layout from "components/Layout";
import SEO from "components/common/Seo";
import Login from "components/auth/login";
import Invitation from "components/common/Invitation";

export default function Home(props) {
  return (
    <Layout>
      <SEO title="Singin" />
      <Login />
      <Invitation />
    </Layout>
  );
}
