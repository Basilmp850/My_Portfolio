import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Basil</h1>
        <p className={styles.description}>
          I am a software engineer passionate about Full Stack Development and Data Science
        </p>
        <div className={styles.buttons}>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a target = {"_blank"} href="https://docs.google.com/document/d/1hhkZpaGZg-5ioQBHiyIlBQAl35w2kmYj008wZurTv-k/edit?usp=sharing" className={styles.resumeBtn}>
           Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
