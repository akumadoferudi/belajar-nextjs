import Head from "next/head";
import Layout from "@/layout";
import Content from "@/components/content";

interface ContentElementProps {
  children?: any;
  metaTitle?: string;
  metaDescription?: any;
}

export default function Profile() {
  return (
    <>
      <Layout
        metaTitle="Profile page"
        metaDescription="This page contains all about your profile"
      >
        <p>Profile</p>
        {/* <Content /> */}
      </Layout>
    </>
  );
}
