import Head from "next/head";
import Layout from "@/layout";
import Content from "@/components/content";

interface ContentElementProps {
  children?: any;
  metaTitle?: string;
  metaDescription?: any;
}

export default function Main() {
  return (
    <>
      <Layout metaTitle="Main Page" metaDescription="Ja, this is index page">
        <p>Home</p>
      </Layout>
    </>
  );
}
