import styles from './CenizasAnimate.module.scss'

const CenizasAnimate = (): JSX.Element => {
  return (
    <div className={styles.Section}>
      <img src={'/cenizas_animate.gif'} alt="Cenizas - The Waris" />

      <a href="https://www.youtube.com/watch?v=5YM_qMdGwWI">
        <div className={styles.Section__verVideo}>
          <img src="/verVideo.png" alt="ver video" />
        </div>
      </a>

      <ul className={styles.Section__redesDesktop}>
        <li>
          <a href="https://www.instagram.com/thewarismusica">
            <img
              src="/insta.png"
              alt="instagram-the-waris"
              style={{ width: '2vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://linktr.ee/thewaris">
            <img
              src="/music.svg"
              alt="music-the-waris"
              style={{ width: '2vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/TheWaris">
            <img
              src="/youtube.svg"
              alt="youtube-the-waris"
              style={{ width: '2vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://wa.me/51966101172?text=Hola%20soy%20fan">
            <img
              src="/thewaris.png"
              alt="whatsapp-the-waris"
              style={{ width: '2vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/TheWarisMusica">
            <img
              src="/face.png"
              alt="facebook-the-waris"
              style={{ width: '1vw' }}
            />
          </a>
        </li>
      </ul>

      <ul className={styles.Section__redesMobile}>
        <li>
          <a href="https://www.instagram.com/thewarismusica">
            <img
              src="/insta.png"
              alt="instagram-the-waris"
              style={{ width: '3.5vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://linktr.ee/thewaris">
            <img
              src="/music.svg"
              alt="music-the-waris"
              style={{ width: '3.5vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/TheWaris">
            <img
              src="/youtube.svg"
              alt="youtube-the-waris"
              style={{ width: '3.5vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://wa.me/51966101172?text=Hola%20soy%20fan">
            <img
              src="/thewaris.png"
              alt="whatsapp-the-waris"
              style={{ width: '3.5vw' }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/TheWarisMusica">
            <img
              src="/face.png"
              alt="facebook-the-waris"
              style={{ width: '2vw' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CenizasAnimate
