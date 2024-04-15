'use client'
import styles from "./page.module.css";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Page() {
     const URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/courses');
     const [courses, setCourses] = useState([]);

     useEffect(() => {
        fetch(URL)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setCourses(data);
          });
     }, []);

    return (
        <main>
            <div className={styles.container}>
                <article className={styles.article}>
                <h1 className={styles.heading}>COURSES</h1>
                    <ol className={styles.list}>
                    { courses.map((course) => (
                        <li className={styles.item} key={course.id | 0}>
                            <h2>{course.title}</h2>
                            <h4>Course id: {course.id}</h4>
                        </li>
                    )) }
                    </ol>
                </article>
            </div>
        </main>
    );
}
