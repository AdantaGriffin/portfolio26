import React from 'react';
import styles from './projects.module.scss';

function Projects(){
    return (
        <>
            <div className={styles.projects} id="projects">

                <article className={styles.projectsContainer}>
                    <h2>Projects</h2>

                    <p>Here are some projects I've built to practice real world frontend programming. Each project focuses on showcasing my projects and achievements.</p>

                    <blockquote className={styles.projectsBlock}>
                        <article className={styles.projectCard}>
                            <h3>title</h3>
                            <p>short description</p>
                            <p>tech stack</p>
                            <section className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">live demo</a>
                            </section>
                        </article>

                        <article className={styles.projectCard}>
                            <h3>title</h3>
                            <p>short description</p>
                            <p>tech stack</p>
                            <section className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">view live</a>
                            </section>
                        </article>

                        <article className={styles.projectCard}>
                            <h3>title</h3>
                            <p>short description</p>
                            <p>tech stack</p>
                            <section className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">view live</a>
                            </section>
                        </article>

                        <article className={styles.projectCard}>
                            <h3>title</h3>
                            <p>short description</p>
                            <p>tech stack</p>
                            <section className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">view live</a>
                            </section>
                        </article>
                    </blockquote>

                </article>
                
            </div>
        </>
    )
};

export default Projects