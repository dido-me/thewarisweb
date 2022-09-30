import { useState } from 'react'
import styles from './MarcoFoto.module.scss'

interface MarcoFotoProps {
  src: string
  srcAdulto: string
  alt: string
  nombre: string
}

const MarcoFoto = ({ src, alt, nombre, srcAdulto }: MarcoFotoProps): JSX.Element => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseIn = (): void => {
    setIsHover(true)
  }

  const handleMouseOut = (): void => {
    setIsHover(false)
  }

  return (
    <div className={styles.Foto}>
      <div className={styles.Foto__container} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <img src={isHover ? srcAdulto : src} alt={alt} className={styles.Foto__img} />
        <h3 className={styles.Foto__nombre}>{nombre}</h3>
      </div>
    </div>
  )
}

export default MarcoFoto
