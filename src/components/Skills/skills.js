import React from 'react';
import styles from './skills.module.scss';


function Skills(){
    const skills = ["HTML5", "CSS3", "Sass / SCSS", "JavaScript", "React", "CSS Modules", "Redux", "REST API\'s", "Fetch API", "JSON", "Jest", "Mocha", "Git", "GitHub", "NPM", "Accessibility (A11y)", "Netlify"]
    console.log(skills)
    return(
        <>
            <div className={styles.skills}>

               <article className={styles.skillsContainer}>
                    <h2>Skills</h2>
                    <article className={styles.languages}>
                        <section className={styles.languageSkills}>
                            <h3>Frontend Stack</h3>
                            <blockquote className={styles.skillBlock}>
                                <ul className={styles.skillList}>
                                    {skills.map(x => (
                                        <li className={styles.skill}>{x}</li>
                                    ))}
                                </ul>
                            </blockquote>
                        </section>
                    </article>
               </article>
            </div>
        </>
    )
};

export default Skills;