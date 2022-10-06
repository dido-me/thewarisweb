import { useState } from 'react'
import Slider from 'react-slick'
import styles from './Discos.module.scss'

function Discos (): JSX.Element {
  const discos = [
    {
      img: '/disco-suso.png',
      link: 'https://open.spotify.com/album/5PwloThwcrPj6CcoJb4MB9?si=5tiZsZHoT5Ob9gkYX7hSJw'
    },
    {
      img: '/disco-mentiras.png',
      link: 'https://open.spotify.com/album/59aqwqsEXt7l0wbZFAjl4e?si=CBz_NzdzTA2w24pZOcQTMA'
    },
    {
      img: '/disco-suso.png',
      link: 'https://open.spotify.com/album/5PwloThwcrPj6CcoJb4MB9?si=5tiZsZHoT5Ob9gkYX7hSJw'
    },
    {
      img: '/disco-suso.png',
      link: 'https://open.spotify.com/album/5PwloThwcrPj6CcoJb4MB9?si=5tiZsZHoT5Ob9gkYX7hSJw'
    }
  ]

  const [imageIndex, setImageIndex] = useState(0)

  const NextArrow = ({ onClick }: any): JSX.Element => {
    return (
      <div className={styles.nextArrow} onClick={onClick}>
        <i className={'gg-arrow-right-o'}></i>
      </div>
    )
  }

  const PrevArrow = ({ onClick }: any): JSX.Element => {
    return (
      <div className={styles.prevArrow} onClick={onClick}>
        <i className={'gg-arrow-left-o'}></i>
      </div>
    )
  }

  const settings = {
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setImageIndex(next)
  }

  return (
    <div className={styles.Section} id="discos">
      <div className={styles.Section__bg} />
      <div className={styles.Section__slider}>
        <Slider {...settings}>
          {discos.map((disco, index) => (
            <div
              key={index}
              className={
                index === imageIndex
                  ? `${styles.Section__card} ${styles.Section__active} `
                  : `${styles.Section__card}`
              }
            >
              <a href={index === imageIndex ? discos[imageIndex].link : '#'}>
                <img src={disco.img} alt="disco" />
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <a href={discos[imageIndex].link} className={styles.Section__escuchar}>
        escuchar
      </a>
    </div>
  )
}

export default Discos
