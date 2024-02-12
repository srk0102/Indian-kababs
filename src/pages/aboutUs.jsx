import Globe from 'react-globe.gl';
import hexRgb from 'hex-rgb';

import globeImage from '../assets/earth-dark.jpg';

import { Footer, NavBar } from '../components'

export const AboutUs = () => {

  const myData = [
    {
      label: 'Indian Wraps and Kebabs',
      lat: 37.77806,
      lng: -121.96400,
      radius: 20,
      color: '#00ff33',
      speed: 10,
      repeat: 500,
      altitude: 0.1
    }
  ];

  return (
    <>
      <NavBar />
      <div>
        <Globe
          globeImageUrl={globeImage}
          ringsData={myData}
          ringMaxRadius='radius'
          ringColor={(ring) => (time) => {
            const { red, green, blue } = hexRgb(ring.color);
            return `rgba(${red},${green},${blue},${Math.sqrt(1 - time)})`;
          }}
          ringPropagationSpeed='speed'
          ringRepeatPeriod='repeat'
          htmlAltitude='altitude'
          pointLat={myData.lat}
          pointLng={myData.lng}
          htmlElement={(data) => {
            const { city, color } = data;
            const element = document.createElement('div');
            element.style.color = color;
            element.innerHTML = `
          <div>
            <svg viewBox="0 0 24 24" style="width:24px;margin:0 auto;">
              <path fill="currentColor" fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <strong style="font-size:10px;text-align:center">${city}</strong>
          </div>`;
            return element;
          }}
        />
      </div>
      <Footer />
    </>
  )
}
