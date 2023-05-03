import "nprogress/nprogress.css"; //styles of nprogress
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

//firebase
import FirebaseContext from "../context/FirebaseContext";
import myFirebase from "../myFirebase";

//nprogress module
import Router from "next/router";
import NProgress from "nprogress";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={myFirebase}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}
