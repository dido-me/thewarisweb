import styles from './CardBioLeo.module.scss'
import MarcoFoto from '../../marcoFoto/MarcoFoto.component'
import { useState } from 'react'

const CardBioLeo = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = (): void => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <div className={styles.Card__click} onClick={handleOpen}>
        <MarcoFoto
          alt="Leonardo-Leoso"
          src="/chiquileo.jpg"
          nombre="Leo"
          srcAdulto="leoAdulto.jpg"
        />
      </div>

      <div
        className={styles.Card}
        style={{ display: `${isOpened ? 'block' : 'none'}` }}
      >
        <div className={styles.Card__Container}>
          <h1 className={styles.Container__title}>LEONARDO</h1>
          <img
            src="/heroLeo.png"
            alt="leoso"
            className={styles.Container__img}
          />
          <img
            src="/aroLeo.png"
            alt="leoso-apodo"
            className={styles.Container__aro}
          />
          <div className={styles.Container__card}>
            <div className={styles.Container__parrafos}>
              <p className={styles.Container__parrafo}>
                Soy Leonardo conocí a la música por esto y me gusta hacer esto.
              </p>
              <br />
              <p>
                Sucedió por la interacción de gente, que quería a hacer música y
                tenía la necesidad de expresarlo. No sé si las ideas representan
                a cada uno de los miembros, pero las bandas son así y el arte es
                cuestión de tiempo para que se entienda como tales, espero que
                llegue a ser tomada de esa perspectiva en un futuro y vibras.{' '}
              </p>
              <br />
              <p>
                Cómo Leonardo, solo tocó la guitarra y se dio la chance de
                conocer gente que quería grabar y el resto es Historia.
              </p>
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

export default CardBioLeo
