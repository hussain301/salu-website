import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { useEffect } from "react";
import { Open_Sans,Roboto ,Montserrat} from "next/font/google";

const fontOpenSans = Montserrat({
  weight: ["400",'500','600','700'],
  subsets:['latin']});


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <Layout className={fontOpenSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
