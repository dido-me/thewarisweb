const frameCount = 72

export const preloadImages = (): void => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image()
    img.src = currentFrame(i)
  }
}

export const currentFrame = (index: number): string => (
  `https://res.cloudinary.com/dufdmfj67/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1662777425/thewaris/ahorasi/${index.toString().padStart(4, '0')}.jpg`
)

export default function Scroll (): void {
  const $ = document

  const html = $.documentElement
  const canvas: HTMLCanvasElement = $.querySelector('.Container__canvas')!
  const context = canvas.getContext('2d')

  const img = new Image()
  img.src = currentFrame(0)
  canvas.width = 1728
  canvas.height = 1117
  img.onload = function () {
    context!.drawImage(img, 0, 0)
  }

  const updateImage = (index: number): void => {
    img.src = currentFrame(index)
    context!.drawImage(img, 0, 0)
  }

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop
    const maxScrollTop = html.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(scrollFraction * frameCount)
    )

    requestAnimationFrame(() => updateImage(frameIndex))
  })

  preloadImages()
}
