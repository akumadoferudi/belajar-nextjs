// import Head from "next/head";
import Layout from "@/layout";
// import Content from "@/components/content";
import { useEffect } from "react";

// interface ContentElementProps {
//   children?: any;
//   metaTitle?: string;
//   metaDescription?: any;
// }

export default function Main() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response => ", res))
      .catch((err) => console.log("error => ", err));
  }, []);

  return (
    <>
      <Layout metaTitle="Main Page" metaDescription="Ja, this is index page">
        <p>Home</p>
      </Layout>
    </>
  );
}
