/* eslint-disable */

import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

const LayoutComponent = dynamic(() => import("@/layout"));

type Notes = {
  id: string;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export const getStaticPaths = (async () => {
  const res = await fetch("https://service.pace-unv.cloud/api/notes");
  const notes = await res.json();

  const dataPaths = notes.data.map((item: any) => ({
    params: {
      id: item.id,
    },
  }));

  return {
    paths: dataPaths,
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`);
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}) satisfies GetStaticProps<{
  notes: Notes;
}>;

export default function DetailNotes({
  notes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //   const router = useRouter();
  //   const { id } = router?.query;

  //   console.log("data notes => ", notes);

  return (
    <LayoutComponent
      metaTitle="Notes Detail with ID"
      metaDescription="See the detail notes with id here!"
    >
      <div>
        <p>title: {notes.data.title}</p>
        <p>desc: {notes.data.description}</p>
        <p>updated at: {notes.data.updated_at}</p>
      </div>
    </LayoutComponent>
  );
}
