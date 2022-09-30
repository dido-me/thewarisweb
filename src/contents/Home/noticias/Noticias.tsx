import styles from './Noticias.module.scss'

function Noticias (): JSX.Element {
  return (
    <div className={styles.Section} id='noticias'>
      <div className={styles.Section__bg} />
      <div className={styles.Section__BigNoticias}>
        <div className={styles.BigNoticias__1}>
          <div className={styles.Card}>
            <h3 className={styles.TitleNoticia}>La Mula</h3>
            <p className={styles.Fecha}>2022-09-20</p>
            <a
              className={styles.Img}
              href="https://esciclope.lamula.pe/2022/09/20/the-waris-la-banda-ayacuchana-que-deberia-conocer-estreno-videoclip/esciclope/"
            >
              <img
                src="https://lamula.pe/media/uploads/t/addc4d04424bd08249af2c221c76d860.jpg"
                alt="La mula"
              />
              <div className={styles.Img__blur} />
              <p className={styles.Img__desc}>
                The Waris, la banda ayacuchana que debería conocer estrenó
                videoclip
              </p>
            </a>
          </div>
        </div>
        <div className={styles.BigNoticias__2}>
          <div className={styles.Card}>
            <h3 className={styles.TitleNoticia}>Indie Criollo</h3>
            <p className={styles.Fecha}>2022-09-20</p>
            <a
              className={styles.Img}
              href="https://indiecriollo.com/2022/09/20/the-waris-presenta-videoclip-de-cenizas-su-single-debut/"
            >
              <img
                src="https://indiecriollo696697434.files.wordpress.com/2021/07/logo-indie-criollo-2021.png?w=500"
                alt="La mula"
              />
              <div className={styles.Img__blur} />
              <p className={styles.Img__desc}>
                THE WARIS PRESENTA VIDEOCLIP DE «CENIZAS», SU SINGLE DEBUT.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Section__SmallNoticias}>
        <div className={styles.SmallNoticias__1}>
          <a
            className={styles.CardSmall}
            href="https://workedmusic.com/the-waris-presenta-su-nuevo-videoclip-cenizas/"
          >
            <h3 className={styles.TitleNoticia}>Worked Music</h3>
            <p className={styles.Fecha}>2022-09-16</p>
            <p>The Waris presenta su nuevo videoclip ‘Cenizas’</p>
          </a>
        </div>
        <div className={styles.SmallNoticias__2}>
          <a
            className={styles.CardSmall}
            href="https://huamangazo.pe/thewariselexitoestaenlaperseverancia/"
          >
            <h3 className={styles.TitleNoticia}>Huamangazo</h3>
            <p className={styles.Fecha}>2022-09-13</p>
            <p>
              The Waris: “El éxito está en la perseverancia y enfocarse en lo
              que quieres lograr”
            </p>
          </a>
        </div>
        <div className={styles.SmallNoticias__3}>
          <a
            className={styles.CardSmall}
            href="https://conciertosperu.com.pe/the-waris-estrena-el-videoclip-de-cenizas-su-primer-sencillo/"
          >
            <h3 className={styles.TitleNoticia}>Conciertos Perú</h3>
            <p className={styles.Fecha}>2022-09-11</p>
            <p>
              The Waris estrena el videoclip de “Cenizas”, su primer sencillo
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Noticias
