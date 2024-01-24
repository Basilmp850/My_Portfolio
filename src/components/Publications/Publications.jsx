import React from "react";

import styles from "./Publications.module.css";

import projects from "../../data/publications.json";

import { Publication } from "./Publication";

export const Publications = () => {
  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <Publication key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
