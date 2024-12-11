import Layout from "@/layout";
import { useRouter } from "next/router";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <Layout
      metaTitle="User Detail with ID"
      metaDescription="See the user's detail with id here!"
    >
      <p>User with id: {id}</p>
    </Layout>
  );
}
