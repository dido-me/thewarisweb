import styles from './CardBioGonza.module.scss'
import MarcoFoto from '../../marcoFoto/MarcoFoto.component'
import { useState } from 'react'

const CardBioGonza = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = (): void => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <div className={styles.Card__click} onClick={handleOpen}>
        <MarcoFoto
          alt="Gonzalo-Banadog"
          src="/chiquigonza.jpg"
          nombre="Gonzalo"
          srcAdulto="/gonzaloAdulto.jpg"
        />
      </div>

      <div className={styles.Card}
      style={{ display: `${isOpened ? 'block' : 'none'}` }}
      >
        <div className={styles.Card__Container}>
              <h1 className={styles.Container__title}>GONZALO</h1>
              <img src="/heroGonzalo.png" alt="banadog" className={styles.Container__img} />
              <img src="/aroGonza.png" alt="banadog-apodo" className={styles.Container__aro} />
              <div className={styles.Container__card}>
                <div className={styles.Container__parrafos}>
                <p className={styles.Container__parrafo }>Soy Gonzalo baterista en The Waris me gusta la música desde que mi hermano me hizo escuchar a The Beatles;  desde ese momento, es decir cuando tenia 11 años, comencé a querer tocar sus canciones lo que terminó eventualmente a los 16 años en la formación una banda con mis amigos y hermano para que, finalmente, compartas con nosotros la vibra de The Waris , te interese y leas esto.</p>
                <br />
                <p className={styles.Container__parrafo }>La primera canción que compusimos con la banda fue Cenizas y personalmente es una canción que me ha acompañado en momentos de total soledad le pone sal a la herida, pero siempre con una vibra emocionante y esperanzadora que me reanima.</p>
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

export default CardBioGonza
