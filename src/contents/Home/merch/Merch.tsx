import { useInView } from 'react-intersection-observer'
import styles from './Merch.module.scss'
const Merch = (): JSX.Element => {
  const { ref: refMerch, inView: isViewMerch } = useInView()
  return (
    <div className={styles.Section} id="store">
      <div className={styles.Section__bg} ref={refMerch} />

      <div className={styles.Section__Left}>
        <img
          src="/bolsoMerch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__bolso}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
        <img
          src="/poleraMerch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__polera}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
      </div>
      <div className={styles.Section__Center}>
        <img
          src="/gorraMerch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__gorra}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
        <img
          src="/logoMerch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__logo}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
        <a href="https://www.instagram.com/plazaquattro/" className={styles.Section__link} >
          Comprar Merch
        </a>
      </div>
      <div className={styles.Section__Right}>
        <img
          src="/polera2Merch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__polera2}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
        <img
          src="/polera3Merch.png"
          alt="merch-the-waris"
          className={isViewMerch ? `${styles.Section__img} ${styles.Animate__polera3}` : styles.Section__img}
          style={{ opacity: isViewMerch ? 1 : 0 }}
        />
      </div>
    </div>
  )
}

export default Merch
