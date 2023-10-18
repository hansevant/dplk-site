import React from 'react'
import Navbar from '../components/Navbar'
import Mobile from '../assets/img/Mobile.png'
import '../assets/css/Simulation.css'
import Input from '../components/SimulationPage/Input'
import Output from '../components/SimulationPage/Output'

const Simulation = () => {

  const [isCalculated, setIsCalculated] = React.useState(false); // Initial range value

  const handleInput = (e) => {
    setIsCalculated(true);
  };
  const handleOutput = (e) => {
    setIsCalculated(false);
  };

  return (
    <div>
    <Navbar />
    <div className="max-w-screen-lg px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:flex justify-between">

        <div className="lg:col-span-5">
          <h1 className="text-sky-800 text-sm ml-8 font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Simulasi</h1>
          <p className="text-gray-700 text-4xl my-3 font-bold font-['DM Sans'] leading-10">Tertarik melakukan investasi? <br/> coba hitung simulasi DPLK</p>
          
          { isCalculated ? (
            <Output Clicks={handleOutput} />) : (
            <Input Clicks={handleInput} />)
            }

        </div>

        <div className="hidden lg:block ml-6">
            <img src={Mobile} alt="mockup" style={{ width: '325px', height: '555px' }} />
        </div>

        </div>
    </div>
  )
}

export default Simulation