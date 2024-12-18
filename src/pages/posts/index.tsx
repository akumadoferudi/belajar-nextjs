/* eslint-disable */

import dynamic from "next/dynamic";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

const LayoutComponent = dynamic(() => import("@/layout"));

type Post = {
  userId: number;
  id: number;
  title: string | null;
  body: string | null;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // Pass data to the page via props
  return { props: { posts } };
}) satisfies GetServerSideProps<{ posts: Post }>;

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  //   console.log("data posts => ", posts);

  return (
    <>
      <LayoutComponent
        metaTitle="Posts Page"
        metaDescription="See and maintain your posts"
      >
        {posts.map((item: Post) => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>
                <b>{item.title}</b>
              </p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </LayoutComponent>
    </>
  );
}
