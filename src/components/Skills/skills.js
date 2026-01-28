import React from 'react';
import styles from './skills.module.scss';


function Skills(){
    const skills = ["HTML5", "CSS3", "Sass / SCSS", "JavaScript", "React", "CSS Modules", "Redux", "REST API\'s", "Fetch API", "JSON", "Jest", "Mocha", "Git", "GitHub", "NPM", "Accessibility (A11y)", "Netlify"]
    console.log(skills)
    return(
        <>
            <section id="skills" className={styles.skills}>
                    <h2>Skills</h2>

               <article className={styles.skillsContainer}>
                    <article className={styles.languages}>
                        <div className={styles.languageSkills}>
                            <h3>Frontend Stack</h3>
                            <blockquote className={styles.skillBlock}>
                                <ul className={styles.skillList}>
                                    {skills.map(x => (
                                        <li className={styles.skill}>{x}</li>
                                    ))}
                                </ul>
                            </blockquote>
                        </div>
                    </article>
               </article>
            </section>
        </>
    )
};

export default Skills;