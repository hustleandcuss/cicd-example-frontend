'use client'
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

export default function Page() {
     const [students, setStudents] = useState([]);

     useEffect(() => {
        const URL = process.env.NEXT_PUBLIC_BACKEND_URL.concat('/students');
        
        fetch(URL)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setStudents(data);
          });
     }, []);

    return (
        <main>
            <div className={styles.container}>
                <article className={styles.article}>
                <h1 className={styles.heading}>STUDENTS</h1>
                <ol className={styles.list}>
                { students.map((student) => (
                    <li className={styles.item} key={student.id | 0}>
                        <h2>{student.name}</h2>
                        <h4>Student id: {student.id}</h4>
                    </li>
                )) }
                </ol>
                </article>
            </div>
        </main>
    );
}
