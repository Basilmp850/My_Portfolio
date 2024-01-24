import React from 'react'
import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

const Certificate = ({ certificate : {title, imageSrc} }) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            {/* <p className={styles.description}>{description}</p> */}
           
            {/* <div className={styles.links}>
                <a href={demo} className={styles.link}>
                    View
                </a> 
            </div> */}
        </div>
    )
}

export default Certificate