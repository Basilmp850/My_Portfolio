import React from 'react'
import certificates from './../../data/certificates.json'
import styles from "./Certfications.module.css";
import Certificate from './Certificate';

const Certifications = () => {
    return (
        <section className={styles.container} id="certificates">
            <h2 className={styles.title}>Certificates</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <section className={styles.container} id="projects">
                        
                        <div className={styles.projects}>
                            {certificates.map((certificate, id) => {
                                return <Certificate key={id} certificate={certificate} />;
                            })}
                        </div>
                    </section>
                </div>

            </div>
        </section>
    )
}

export default Certifications