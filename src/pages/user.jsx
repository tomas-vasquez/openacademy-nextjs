import Layout from "components/Layout";
import Invitation from "components/common/Invitation";
import UserProfile from "components/userProfile";

export default function Home(props) {
  return (
    <Layout>
      <UserProfile />
      <Invitation />
    </Layout>
  );
}
