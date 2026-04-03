export default function SectionDivider({ fillColor = 'var(--color-dark)', direction = 'left', flip = false }) {
  const points = direction === 'left' ? '0,0 100,40 0,40' : '0,40 100,0 100,40'
  const style = {
    display: 'block',
    width: '100%',
    height: 'clamp(40px, 6vw, 80px)',
    ...(flip ? { transform: 'scaleY(-1)' } : {}),
  }

  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      style={style}
      aria-hidden="true"
    >
      <polygon points={points} fill={fillColor} />
    </svg>
  )
}
