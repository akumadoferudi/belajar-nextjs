import Head from "next/head";
import Layout from "@/layout";
import Content from "@/components/content";

interface ContentElementProps {
  children?: any;
  metaTitle?: string;
  metaDescription?: any;
}

export default function Profile({
  children,
  metaTitle,
  metaDescription,
}: ContentElementProps) {
  return (
    <>
      <Layout metaTitle="Profile">
        <p>Profile</p>
        {/* <Content /> */}
      </Layout>
    </>
  );
}
