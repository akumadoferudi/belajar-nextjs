// import Menu from "@/components/menu";
// import { withAuth } from "../with-auth";
import styles from "./styles.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { useMutation } from "@/hooks/useMutation";
import { useQueries } from "@/hooks/useQueries";

export default function Header() {
  const router = useRouter();
  // const { mutate } = useMutation();
  const dataProfile = useContext(UserContext);
  const profileUser = dataProfile;

  /** simpler version */
  const HandleLogout = () => {
    Cookies.remove("user_token", { path: "" });
    router.reload();
  };

  /** practice base */
  // const HandleLogout = async () => {
  //   const response = await mutate({
  //     url: `https://service.pace-unv.cloud/api/logout`,
  //     headers: {
  //       Authorization: `Bearer ${Cookies.get("user_token")}`,
  //     },
  //   });
  //   if (response?.success) {
  //     Cookies.remove("user_token", { path: "" });
  //     router.reload();
  //   }
  // };

  return (
    <div className={styles.header}>
      <ul className={"list-disc list-inside"}>
        <li>
          <Button
            variant="solid"
            onClick={() => HandleLogout()}
            className="bg-red-600 p-2 hover:bg-red-500"
          >
            LOGOUT
          </Button>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
      </ul>
      <div>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm" className="bg-black px-2 m-3">
              Open
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="new-txt-a">
              {profileUser?.name} <MenuItemCommand>Test</MenuItemCommand>
            </MenuItem>
            <MenuItem value="new-file-a">
              New File... <MenuItemCommand>⌘N</MenuItemCommand>
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </div>
    </div>
  );
}

/**
 * Higher order component practice
 */
// function Header() {
//   return (
//     <div>
//       <Menu />
//     </div>
//   );
// }

// export default withAuth(Header);
