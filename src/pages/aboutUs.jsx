import { Footer, NavBar } from '../components'
import Globe from 'react-globe.gl';

export const AboutUs = () => {

  return (
    <>
      <NavBar />
      <div className='location'>
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelLat={37.77806}
          labelLng={-121.96400}
          labelSize={3}
          labelDotRadius={1}
          labelText="Indian Kebabs and Wraps"
          labelColor={() => 'rgba(255, 165, 0, 0.75)'}
          labelResolution={2}
          labelIncludeDot={true}
        />,
      </div>
      <Footer />
    </>
  )
}
