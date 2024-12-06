import styles from "./styles.module.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <div className={clsx(styles.header, "text-3xl fontr-bold underline")}>
      Footer
    </div>
  );
}
