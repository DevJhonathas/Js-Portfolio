import React from 'react'
import styles from "./Home.module.css";
import computerHand from "../../img/HandComputer.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.title_container}>
        <h1>Introdução:</h1>
        <div className={styles.subtitle}>
        <p>Bem vindo ao meu <span>Portfolio</span>.</p>
        <p>Aqui irei mostrar alguns projetos e falar um pouco sobre mim.</p>
        </div>
      </div>
      <main className={styles.main_container}>
          <div className={styles.image_svg}>
            <img src={computerHand} alt="Hand typing on computer" />
           </div>
          <div className={styles.about_me}>
              <div className={styles.myself}>
                <img src="" alt="Minha foto" />
              </div>
              <div className={styles.about}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quis rerum ipsam debitis qui, sapiente architecto unde facilis nemo cupiditate soluta aliquam dolores deleniti perferendis tenetur impedit error iure et.</p>
              </div>
          </div>
      </main>

    </>
  )
}

export default Home