import React from 'react';
import styles from './projects.module.scss';

function Projects(){
    return (
        <>
            <section className={styles.projects} id="projects">

                <article className={styles.projectsContainer}>
                    <h2>Projects</h2>

                    <p>Here are some projects I've built to practice real world frontend programming. Each project focuses on showcasing my projects and achievements.</p>

                    <blockquote className={styles.projectsBlock}>
                        <article className={styles.projectCard}>
                            <div>
                                <h3>title</h3>
                                <p>short description</p>
                                <p>tech stack</p>
                            </div>
                            <div className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">live demo</a>
                            </div>
                        </article>

                        <article className={styles.projectCard}>
                            <div>
                                <h3>title</h3>
                                <p>short description</p>
                                <p>tech stack</p>
                            </div>
                            <div className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">live demo</a>
                            </div>
                        </article>

                        <article className={styles.projectCard}>
                            <div>
                                <h3>title</h3>
                                <p>short description</p>
                                <p>tech stack</p>
                            </div>
                            <div className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">live demo</a>
                            </div>
                        </article>

                        <article className={styles.projectCard}>
                            <div>
                                <h3>title</h3>
                                <p>short description</p>
                                <p>tech stack</p>
                            </div>
                            <div className={styles.projectLinks}>
                                <a href="#">github</a>
                                <br/>
                                <a href="#">live demo</a>
                            </div>
                        </article>
                    </blockquote>
                    <p className={styles.viewMore}><a href="#">view more</a></p>
                </article>
                
            </section>
        </>
    )
};

export default Projects