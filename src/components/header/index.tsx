// import Menu from "@/components/menu";
// import { withAuth } from "../with-auth";
import styles from "./styles.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Header() {
  const router = useRouter();

  const HandleLogout = () => {
    Cookies.remove("user_token", { path: "" });
    router.push("/login");
  };

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
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
      </ul>
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
