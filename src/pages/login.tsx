import { useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Fieldset,
  Input,
  Button,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { toaster } from "@/components/ui/toaster";
import { useMutation } from "@/hooks/useMutation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const { mutate } = useMutation();
  const router = useRouter();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = async () => {
    // console.log(`Hello, ${payload.email} and ${payload.password}`);

    const response = await mutate({
      url: "https://service.pace-unv.cloud/api/login",
      payload,
    });
    console.log("response => ", response);

    if (!response?.success) {
      toaster.create({
        title: "Login Gagal",
        description: "email atau password tidak valid.",
        type: "error",
        duration: 3000,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    } else {
      Cookies.set("user_token", response?.data?.token, {
        expires: new Date(response?.data?.expires_at),
        path: "/",
      });
      router.push("/");

      toaster.create({
        title: "Berhasil Login",
        type: "success",
        duration: 3000,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <Stack direction={"column"}>
        <Fieldset.Root size="lg" maxW="md">
          <Stack>
            <Fieldset.Legend>LOGIN</Fieldset.Legend>
            <Fieldset.HelperText>Login page for the apps.</Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field label="Email address">
              <Input
                value={payload.email}
                onChange={(event) =>
                  setPayload({ ...payload, email: event.target.value })
                }
                name="email"
                type="email"
                className="border-2 border-solid border-slate-300"
              />
            </Field>

            <Field label="Password">
              <Input
                value={payload.password}
                onChange={(event) =>
                  setPayload({ ...payload, password: event.target.value })
                }
                name="password"
                type="password"
                className="border-2 border-solid border-slate-300"
              />
            </Field>
          </Fieldset.Content>

          <Button
            type="submit"
            onClick={() => HandleSubmit()}
            alignSelf="flex-start"
            className="bg-blue-500 px-2 my-3"
          >
            Submit
          </Button>
        </Fieldset.Root>
      </Stack>
    </Flex>
  );
}
