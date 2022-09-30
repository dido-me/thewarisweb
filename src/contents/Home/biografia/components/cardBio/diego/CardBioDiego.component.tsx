import styles from './CardBioDiego.module.scss'
import MarcoFoto from '../../marcoFoto/MarcoFoto.component'
import { useState } from 'react'

const CardBioDiego = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = (): void => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <div className={styles.Card__click} onClick={handleOpen}>
      <MarcoFoto
          alt="Diego-wonder"
          src="/chiquidiego.jpg"
          nombre="Diego"
          srcAdulto="/diegoAdulto.jpg"
        />
      </div>

      <div className={styles.Card}
      style={{ display: `${isOpened ? 'block' : 'none'}` }}
      >
        <div className={styles.Card__Container}>
              <h1 className={styles.Container__title}>DIEGO</h1>
              <img src="/heroDiego.png" alt="banadog" className={styles.Container__img} />
              <img src="/aroDiego.png" alt="banadog-apodo" className={styles.Container__aro} />
              <div className={styles.Container__card}>
                <div className={styles.Container__parrafos}>
                <p className={styles.Container__parrafo }>Soy Diego, creo que me gustó la música desde muy niño, trataba de repetir los ritmos golpeando cosas, valdes y ollas 😅 por esta razon mi abuelo me dio la idea de entrar a la escuela de música y me me matriculé a los 5 años para estudiar en ese momento pensé en la batería pero no había como carrera solo como curso de instrumento, entonces lo pensé  elegí el piano, después de eso me enamoré aunque fue amor y odio con el piano.</p>
                <br />

                </div>

                <div className={styles.Container__icon}>
                <img src="/back-icon.png" alt="back-the-waris" style={{ width: '5vw', cursor: 'pointer' }} onClick={handleOpen} />
                </div>

              </div>

        </div>
      </div>
    </>
  )
}

export default CardBioDiego
