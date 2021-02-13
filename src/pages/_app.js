import "nprogress/nprogress.css"; //styles of nprogress
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

//firebase
import firebaseConfig from "firebase.config";
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//nprogress module
import Router from "next/router";
import NProgress from "nprogress";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}
