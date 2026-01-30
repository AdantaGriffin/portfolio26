import React from 'react';
import styles from './about.module.scss';

function About(){
    return(
        <>
            <section id="about" className={styles.about} arial-lable="About Section">

                <article className={styles.aboutContainer}>
                    <h2>About</h2>

                    <blockquote className={styles.aboutBlock}>
                        <div className={styles.one}>
                            <aside>Im a frontend developer with a strong interest in building clean, accessible and interactive user interfaces. I enjoy working with JavaScript and React. I like breaking down problems into simple reusable components. I'm always looking to improve my skills and learn best practices.</aside>
                            <img src="#" alt="image1"/>
                        </div>
                        <div className={styles.two}>
                            <aside>With my free time I like spending time in the gym with friends, reading a book, or out with friends.</aside>
                            <img alt="image2"/>
                        </div>
                        <div className={styles.three}>
                            <aside>Im currently looking for a rolewhere I can grow as a developer and contribute to a team.</aside>
                            <img alt="image3"/>
                        </div>
                    </blockquote>
                </article>
            </section>
        </>
    )
};

export default About;