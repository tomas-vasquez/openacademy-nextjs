import "nprogress/nprogress.css"; //styles of nprogress
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

//nprogress module
import Router from "next/router";
import NProgress from "nprogress";
//redux
import { Provider } from "react-redux";
import store from "store";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
