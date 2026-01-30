import React from 'react';
import styles from './contact.module.scss';

function Contact(){
    return(
        <>
            <section className={styles.contact} id="contact" aria-label="Contact Information">
                    <h2>Contact</h2>

                <article className={styles.contactContainer}>

                    <form className={styles.contactForm}>
                        <h3>
                            I'm currently open to frontend opportunities.If you'd like to connect, feel free to reach out.
                        </h3>
                        
                        <section className={styles.userInput}>
                            <div>
                                <label for="name">Name: </label>
                                <input 
                                    type="text" id="name" placeholder="First Last" aria-label="Your Name"></input>
                            </div>
                            <div>
                                <label for="email">Email: </label>
                                <input 
                                    type="email" id="email" placeholder="email@example.com" aria-label="Your Email"></input>
                            </div>
                            <div>
                                <label for="phone">Phone: </label>
                                <input 
                                    type="tel" id="phone" placeholder="1234567890" 
                                    aria-label="Your Phone Number"></input>
                            </div>
                        </section>
                        <textarea 
                            cols="40" 
                            rows="10" 
                            id="message" placeholder="your message"></textarea>

                        <input 
                            className={styles.submit} type="submit" 
                            value="Send" 
                            aria-label="Send Message"></input>

                    </form>

                    <address className={styles.addressLinks}>
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:17188202506"><img src="./phone.png" width="50px"/></a>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:adantag@gmail.com"><img src="./email.png" width="50px"/></a>
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <a href="https://github.com/AdantaGriffin" target="_blank"><img src="./githubBW.png" width="50px"/></a>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <a href="#" target="_blank"><img src="./linkedinBW.png" width="50px"/></a>
                            </div>
                    </address>
                </article>
            </section>
        </>
    )
};

export default Contact