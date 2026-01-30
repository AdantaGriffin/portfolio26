import React from 'react';
import styles from './skills.module.scss';


function Skills(){
    const skills = ["HTML5", "CSS3", "Sass / SCSS", "JavaScript", "React", "CSS Modules", "Redux", "REST API\'s", "Fetch API", "JSON", "Jest", "Mocha", "Git", "GitHub", "NPM", "Accessibility (A11y)", "Netlify"]
    console.log(skills)
    return(
        <>
            <section id="skills" className={styles.skills}>
                    <h2>Skill Stack</h2>

               <article className={styles.skillsContainer}>
                            <blockquote className={styles.skillBlock}>
                                <ul className={styles.skillList}>
                                    {skills.map(x => (
                                        <li className={styles.skill}><p>{x}</p></li>
                                    ))}
                                </ul>
                            </blockquote>
                    </article>
            </section>
        </>
    )
};

export default Skills;