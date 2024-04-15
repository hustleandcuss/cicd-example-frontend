'use client';
import styles from "./menu.module.css";
import Link from 'next/link';
import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Menu() {
    const pathname = usePathname();
    const activeLink = pathname.split('/')[2];

    const [active, setActive] = useState(activeLink);

    return (
        <header className={styles.header}>
            <nav className={styles.icon}>
                <Link className={styles.link} href="/">
                    <Image
                        src={"/logo.png"}
                        width={100}
                        height={100}
                        alt="School icon from internetz"
                    />
                </Link>
            </nav>
            <nav className={styles.nav}>
                <Link className={styles.link} href="courses">
                    <button className={active === "courses" ? styles.active : styles.button}
                        onClick={() => setActive("courses")}
                    >
                        COURSES
                    </button>
                </Link>
            </nav>
            <nav className={styles.nav}>
                <Link className={styles.link} href="students">
                    <button className={active === "students" ? styles.active : styles.button}
                        onClick={() => setActive("students")}
                    >
                        STUDENTS
                    </button>
                </Link>
            </nav>
            <nav className={styles.nav}>
                <Link className={styles.link} href="help">
                    <button className={active === "help" ? styles.active : styles.button}
                        onClick={() => setActive("help")}
                    >
                        HELP
                    </button>
                </Link>
            </nav>
        </header>
    );
}
