import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className={styles.container}>
                <article className={styles.article}>
                    <div className={styles.card}>
                        <Image width={"100"} height={"100"} src={"/logo.png"} alt={"School logo from intrenetz"}/>
                        <ul className={styles.contact_info}>
                            <li>Student Service Desk</li>
                            <li>+4611111111</li>
                            <li><Link href={"mailto:help@example.com"}>help@example.com</Link></li>
                        </ul>
                    </div>
                </article>
            </div>
        </main>
    );
}
