/* eslint-disable */

import dynamic from "next/dynamic";
import {
  Grid,
  GridItem,
  Card,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

type NoteDatas = {
  id: string;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  success: boolean;
  message: string;
  data: NoteDatas;
};

export default function EditNotes() {
  const router = useRouter();
  const { id } = router?.query;
  const [notes, setNotes] = useState<any>();

  const HandleSubmit = async () => {
    try {
      const response = await fetch(
        `https://service.pace-unv.cloud/api/notes/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: notes.title,
            description: notes.description,
          }),
        }
      );
      const result = await response.json();
      if (result?.success) {
        router.push("/notes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`);
      const listNotes = await res.json();
      setNotes(listNotes?.data);
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Card.Root margin="5" padding="5">
          <Heading>Edit Notes</Heading>
          <Grid gap="5">
            <GridItem>
              <Text>Title</Text>
              <Input
                type="text"
                value={notes?.title || ""}
                onChange={(event) =>
                  setNotes({
                    ...notes,
                    title: event.target.value,
                  })
                }
              />
            </GridItem>
            <GridItem>
              <Text>Description</Text>
              <Textarea
                value={notes?.description || ""}
                onChange={(event) =>
                  setNotes({ ...notes, description: event.target.value })
                }
              />
            </GridItem>
            <GridItem>
              <Button onClick={() => HandleSubmit()} colorScheme="blue">
                Submit
              </Button>
            </GridItem>
          </Grid>
        </Card.Root>
      </LayoutComponent>
    </>
  );
}
