import { motion } from 'framer-motion'

const pathVariants = (delay = 0) => ({
  initial: { pathLength: 0, opacity: 1 },
  animate: {
    pathLength: [0, 1, 1, 0],
    opacity:    [1, 1, 1, 1],
    transition: {
      pathLength: {
        duration: 7.0,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: 'easeInOut',
        times: [0, 0.45, 0.55, 1],
      },
    },
  },
})

export default function LogoAnimator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="60"
      viewBox="0 0 90 60"
      fill="none"
    >
      {/* Path 1 — Y stroke, placed left */}
      <g transform="translate(4, 7)">
        <motion.path
          d="M 33.59 0 C 33.59 0 12.782 31.562 4.763 40.58 C 0.695 45.155 9.82 38.043 21.452 20.29 C 20.706 6.007 -5.944 2.606 1.222 0"
          stroke="rgb(158, 87, 28)"
          strokeWidth="3.04"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants(0)}
          initial="initial"
          animate="animate"
        />
      </g>

      {/* Path 2 — T stroke, placed right with gap */}
      <g transform="translate(50, 7)">
        <motion.path
          d="M 15.954 44.638 C 15.954 44.638 24.235 33.155 19.494 22.319 C 14.753 11.482 -3.011 1.292 0.442 0 C 0.442 0 10.189 0 16.037 0 C 21.885 0 23.834 0 23.834 0 L 31.632 0"
          stroke="rgb(158, 87, 28)"
          strokeWidth="3.04"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants(0.2)}
          initial="initial"
          animate="animate"
        />
      </g>
    </svg>
  )
}
