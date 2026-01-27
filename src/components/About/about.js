import React from 'react';
import styles from './about.module.scss';

function About(){
    return(
        <>
            <section className={styles.about}>

                <article className={styles.aboutContainer}>
                    <h2>About</h2>

                    <blockquote className={styles.aboutBlock}>
                        <p>Im a frontend developer with a strong interest in building clean, accessible and interactive user interfaces.</p>
                        <p>I enjoy working with JavaScript and React. I like breaking down problems into simple reusable components. I'm always looking to improve my skills and learn best practices.</p>
                        <p>Im currently looking for a rolewhere I can grow as a developer and contribute to a team.</p>
                    </blockquote>
                </article>
            </section>
        </>
    )
};

export default About;