import styles from './CardBioAlvaro.module.scss'
import MarcoFoto from '../../marcoFoto/MarcoFoto.component'
import { useState } from 'react'

const CardBioAlvaro = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = (): void => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <div className={styles.Card__click} onClick={handleOpen}>
        <MarcoFoto
          alt="Alvaro-Alvin"
          src="/chiquialvaro.jpg"
          nombre="Alvaro"
          srcAdulto="alvaroAdulto.jpg"
        />
      </div>

      <div
        className={styles.Card}
        style={{ display: `${isOpened ? 'block' : 'none'}` }}
      >
        <div className={styles.Card__Container}>
          <h1 className={styles.Container__title}>ÁLVARO</h1>
          <img
            src="/heroAlvaro.png"
            alt="alvin"
            className={styles.Container__img}
          />
          <img
            src="/aroAlvaro.png"
            alt="alvin-apodo"
            className={styles.Container__aro}
          />
          <div className={styles.Container__card}>
            <div className={styles.Container__parrafos}>
              <p className={styles.Container__parrafo}>
                Soy Álvaro, empecé relativamente tarde en la música a
                comparación de los demás miembros de la banda. Cuando cursaba el
                quinto de secundaria mis mejores amigos de colegio me invitaron
                a formar una banda, necesitaban a un bajista para una
                presentación por el Día del padre. Yo no contaba con ningún
                instrumento, ni sabía tocar alguno, pero quería ser parte de esa
                banda, así que pedí a mis padres que me compren un bajo por mi
                cumpleaños 16 y fue recién allí cuando me gustó la música y los
                escenarios. No obstante, dejé de tocar por un largo tiempo y no
                fue hasta que formé parte de The Waris que decidí enfocarme al
                bajo.
              </p>
              <br />
            </div>

            <div className={styles.Container__icon}>
              <img
                src="/back-icon.png"
                alt="back-the-waris"
                style={{ width: '5vw', cursor: 'pointer' }}
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardBioAlvaro
