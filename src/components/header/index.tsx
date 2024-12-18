// import Menu from "@/components/menu";
// import { withAuth } from "../with-auth";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={"list-disc list-inside"}>
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
