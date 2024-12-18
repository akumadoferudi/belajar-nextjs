/* eslint-disable */

import dynamic from "next/dynamic";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/layout"));

type Notes = {
  id: string;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export const getStaticProps = (async (context) => {
  const res = await fetch("https://service.pace-unv.cloud/api/notes");
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}) satisfies GetStaticProps<{
  notes: Notes;
}>;

export default function Notes({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("notes => ", notes);
  return (
    <>
      <LayoutComponent
        metaTitle="Notes Page"
        metaDescription="See and maintain your notes"
      >
        {notes.data.map((item: Notes) => (
          <div>
            <Link href={`/notes/${item.id}`}>{item.title}</Link>
          </div>
        ))}
      </LayoutComponent>
    </>
  );
}
