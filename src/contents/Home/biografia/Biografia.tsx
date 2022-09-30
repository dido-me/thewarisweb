import styles from './Biografia.module.scss'
import { CardBioAlvaro, CardBioDiego, CardBioGonza, CardBioHugo, CardBioLeo } from './components'

const Biografia = (): JSX.Element => {
  return (
    <div className={styles.Section} id={'bio'}>
      <div className={styles.Section__bg}></div>
      <div className={styles.Section__Right}>
        <CardBioGonza />
        <CardBioDiego />
      </div>
      <div className={styles.Section__Center}>
        <CardBioHugo />
      </div>
      <div className={styles.Section__Left}>
        <CardBioAlvaro />
        <CardBioLeo />
      </div>
    </div>
  )
}

export default Biografia
