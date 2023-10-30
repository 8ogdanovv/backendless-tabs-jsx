import NavigationLayout from '../components/NavigationLayout';

const MainStyles = {
  width: '100%',
  height: 'fit-content',
  margin: '0',
  position: 'relative',
  zIndex: '1',
  background: 'linear-gradient(135deg, var(--bg-dark), var(--bg-light))',
}

export default function Main() {
  return (
    <main style={ MainStyles }>
      <NavigationLayout />
    </main>
  )
}
