/* eslint-disable */

/**
 * Usage of "useQuery": custom hook to call an API with default method [GET]
 */

import dynamic from "next/dynamic";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueries } from "@/hooks/useQueries";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

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
  data: NoteDatas[];
};

export default function Notes() {
  const router = useRouter();
  // const { data: listNotes, isLoading } = useQueries({
  //   prefixUrl: "https://service.pace-unv.cloud/api/notes",
  // });

  const { data, error, isLoading } = useSWR(
    "https://service.pace-unv.cloud/api/notes",
    fetcher,
    { revalidateOnFocus: true }
  );

  const [notes, setNotes] = useState<Notes>({
    success: false,
    message: "",
    data: [],
  });

  const HandleDelete = async (id: any) => {
    try {
      const response = await fetch(
        `https://service.pace-unv.cloud/api/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result?.success) {
        router.reload();
      }
    } catch (error) {}
  };

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("https://service.pace-unv.cloud/api/notes");
      const listNotes = await res.json();
      setNotes(listNotes);
    }
    fetchingData();
  }, []);

  return (
    <>
      <LayoutComponent metaTitle="Notes">
        <Box padding="5">
          <Flex justifyContent="end">
            <Button
              colorScheme="blue"
              onClick={() => router.push("/notes/add")}
              className="bg-green-700 p-3"
            >
              Add Notes
            </Button>
          </Flex>
          <Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
              {notes?.data?.map((item: NoteDatas) => (
                <GridItem key={item.id}>
                  <Card.Root key={item.id}>
                    <Card.Header>
                      <Heading>{item?.title}</Heading>
                    </Card.Header>
                    <Card.Body>
                      <Text>{item?.description}</Text>
                    </Card.Body>
                    <Card.Footer justifyContent="space-between" flexWrap="wrap">
                      <Button
                        onClick={() => router.push(`/notes/edit/${item?.id}`)}
                        flex="1"
                        variant="surface"
                        className="bg-blue-700"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => HandleDelete(item?.id)}
                        flex="1"
                        colorScheme="red"
                        className="bg-red-700"
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Box>
      </LayoutComponent>
    </>
  );
}
