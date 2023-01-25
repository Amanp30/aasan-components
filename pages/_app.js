import "../styles/globals.css";
import Menu from "../components/menu/menu";
import Loader from "../components/loader/loader";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
