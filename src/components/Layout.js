import Link from "next/link";
import { useRouter } from "next/router";
import Particles from "./common/Particles";
import Footer from "./theme/Footer";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  return (
    <div className="max-w-screen-sm antialiased font-body">
      <Particles />
      {/* <header>{header}</header> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
