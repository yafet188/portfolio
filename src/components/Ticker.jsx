import { useRef, useEffect } from 'react'
import './Ticker.css'

const ITEMS = [
  'TYPESCRIPT', '◆', 'JAVASCRIPT', '◆',
  'REACT', '◆', 'C++', '◆',
  'HTML & CSS', '◆', 'NODE.JS', '◆',
  'PYTHON', '◆', 'UI/UX DESIGN', '◆',
]

export default function Ticker({ reverse = false }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf
    let pos = reverse ? -track.scrollWidth / 2 : 0
    const speed = reverse ? 0.4 : -0.4

    const tick = () => {
      pos += speed
      const half = track.scrollWidth / 2
      if (pos <= -half) pos = 0
      if (pos >= 0 && reverse) pos = -half
      track.style.transform = `translateX(${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reverse])

  const items = [...ITEMS, ...ITEMS]

  return (
    <div className="ticker">
      <div className="ticker__track" ref={trackRef}>
        {items.map((item, i) => (
          <span key={i} className={`ticker__item ${item === '◆' ? 'ticker__star' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
