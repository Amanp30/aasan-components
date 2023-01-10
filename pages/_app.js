import "../styles/globals.css";
import Menu from "../components/menu/menu";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
