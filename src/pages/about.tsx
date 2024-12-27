import Head from "next/head";
import Layout from "@/layout";
import Content from "@/components/content";

interface ContentElementProps {
  children?: any;
  metaTitle?: string;
  metaDescription?: any;
}

export default function About() {
  return (
    <>
      <Layout metaTitle="About page" metaDescription="This page is ABOUT PAGE">
        <p>About</p>
        {/* <Content /> */}
      </Layout>
    </>
  );
}
