import React, { useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Slider from "react-slick";
import SliderCard from './Card/SliderCard';

const Testi = () => {

  const men = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const women = 'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const testimonials = [
      {id: 1, name:"Prisca Yuliana", img: women, star: 5, position : 'MANAGER'},
      {id: 2, name:"Fachrie Malyan", img: men, star: 4, position : 'SENIOR MANAGER'},
      {id: 3, name:"Ernita Deliami", img: women, star: 5, position : 'MANAGER'},
      {id: 4, name:"Abizar Ramadhan", img: men, star: 3, position : 'OFFICER'},
      {id: 4, name:"Ichsan Gifari", img: men, star: 4, position : 'OFFICER'},
    ]
  
      const sliderRef = useRef(null);
      const next = () => {
        sliderRef.current.slickNext();
      };
      const previous = () => {
        sliderRef.current.slickPrev();
      };
    
  
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: null, // Set to null to hide the previous arrow
      nextArrow: null, // Set to null to hide the next arrow
    };
  
  return (
    
    <div className="container my-12 mx-auto md:px-6">
        <h5 className="text-center text-sky-800 text-sm font-bold font-['DM Sans'] uppercase leading-tight tracking-widest">Testimonial</h5>
        <h2 className="text-center mt-2 mb-12 text-gray-700 text-3xl font-bold font-['DM Sans'] leading-10">Dengarkan Cerita Mereka</h2>

        <div className="slider-container text-center">

            <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testi) => (
                <SliderCard key={testi.id} img={testi.img} position={testi.position} name={testi.name} star={testi.star} />
                ))}
            </Slider>

            <div className="slider-controls mt-4 flex justify-center">
                <button className="slider-button text-4xl text-slate-300 hover:text-slate-400 transition py-2 px-4 rounded" onClick={previous}>
                <FiArrowLeft/>
                </button>
                <button className="slider-button text-4xl text-slate-300 hover:text-slate-400 transition py-2 px-4 rounded" onClick={next}>
                <FiArrowRight />
                </button>
            </div>
        </div>

    </div>
  )
}

export default Testi