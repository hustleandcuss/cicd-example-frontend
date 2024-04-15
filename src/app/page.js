import styles from "./page.module.css";
import Link from 'next/link';
import Image from "next/image";

export default function Page() {
  return (
      <main>
        <div className={styles.container}>
          <div className={styles.icon}>
            <h1>Student Portal!</h1>
          </div>
          <div className={styles.courses}>
            <Link href="pages/courses">
              <button className={styles.button}>COURSES</button>
            </Link>
          </div>
          <div className={styles.students}>
            <Link href="pages/students">
              <button className={styles.button}>STUDENTS</button>
            </Link>
          </div>
          <div className={styles.help}>
            <Link href="pages/help">
              <button className={styles.button}>HELP</button>
            </Link>
          </div>
        </div>
      </main>
  );
}
