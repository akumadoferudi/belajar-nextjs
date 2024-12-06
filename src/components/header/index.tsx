// import Menu from "@/components/menu";
// import { withAuth } from "../with-auth";
import styles from "./styles.module.css";

export default function Header() {
  return <div className={styles.header}>Header</div>;
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
