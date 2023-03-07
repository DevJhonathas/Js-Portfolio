import React from 'react'
import styles from "./Home.module.css";
import hand from "../../img/Programming.jpg";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title_home}>
        <h1>Bem Vindo ao meu Portfolio!</h1>
      </div>

      <div className={styles.apresetation_home}>
        <div className={styles.image_title}>
          <img src={hand} alt="Computador" />
        </div>
        <div className={styles.subtitle}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo, autem sit alias ut dolorem harum nisi nostrum deleniti ipsum quae dicta laboriosam amet provident. Quisquam veniam doloribus libero vero Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quod enim nulla. Eius, laboriosam. Commodi consequuntur quasi a, suscipit maxime enim dicta nobis error dolorem obcaecati asperiores dolorum omnis voluptatem?</p>
        </div>
      </div>

    </main>
  )
}

export default Home