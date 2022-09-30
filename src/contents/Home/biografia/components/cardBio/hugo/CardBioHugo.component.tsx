import styles from './CardBioHugo.module.scss'
import MarcoFoto from '../../marcoFoto/MarcoFoto.component'
import { useState } from 'react'

const CardBioHugo = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = (): void => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <div className={styles.Card__click} onClick={handleOpen}>
      <MarcoFoto
          alt="Hugo-Loquita"
          src="/chiquiandre.jpg"
          nombre="Hugo"
          srcAdulto="/hugoAdulto.jpg"
        />
      </div>

      <div className={styles.Card}
      style={{ display: `${isOpened ? 'block' : 'none'}` }}
      >
        <div className={styles.Card__Container}>
              <h1 className={styles.Container__title}>HUGO</h1>
              <img src="/heroHugo.png" alt="andre" className={styles.Container__img} />
              <img src="/aroHugo.png" alt="aero-apodo" className={styles.Container__aro} />
              <div className={styles.Container__card}>
                <div className={styles.Container__parrafos}>
                <p className={styles.Container__parrafo }>Soy André, tengo una historia muy complicada en cuanto a mi familia. Pero es a raíz de ella que me dedico a la música. En mi infancia, gracias a mi papá escuchaba surf rock instrumental, beatles y rock psicodélico. Por mi mamá, escuchaba música de la nueva ola y soundtracks de películas. Por mis tíos, me influenciaron bastante el new wave y música de los 80, sobre todo con hartos videoclips. Por mi hermana, baladas y música pop de los 2000. Así, una mezcla musical muy desordenada pero rica. A raíz de ver conciertos y juegos como Guitar Hero, fue que me pegué bastante con querer tocar en grandes escenarios como Aerosmith, Led Zeppelin, Pink Floyd o David Bowie. Al día de hoy, sigo fiel a ese sueño. Es allí donde entra The Waris, quienes son parte de esa meta. Mis compañeros y yo somos una mezcla muy convulsa de gustos musicales,pero al igual que mi infancia allí está lo interesante.</p>
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

export default CardBioHugo
