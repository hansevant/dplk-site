import React from 'react'

const SliderCard = ({ name, star }) => {
    const stars = [];
  
    for (let i = 0; i < star; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return (
        <div className='p-4'>
            <div className="bg-white rounded-lg shadow-md p-4 text-left gap-y-4 flex flex-col">
                <h3 className="text-xl font-semibold">
                {stars}
                </h3>
                <p className="text-gray-700 text-base font-bold font-['DM Sans'] leading-snug">MANAGER</p>
                <p className="text-slate-500 text-base font-normal font-['DM Sans'] leading-normal">Saya sangat senang dengan pelayanan yang diberikan oleh DPLK BRI. Tim mereka sangat profesional dan membantu saya dengan semua pertanyaan saya mengenai dana pensiun saya. </p>
                <div className="h-14 pr-24 rounded-lg justify-start items-center mt-5 gap-5 inline-flex">
                    <img className="w-14 h-14 rounded-3xl" src="https://via.placeholder.com/55x55" alt='ava' />
                    <div className="self-stretch pb-px rounded-lg flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-gray-700 text-base font-bold font-['DM Sans'] leading-snug">{name}</div>
                        <div className="text-blue-400 text-base font-medium font-['DM Sans'] leading-tight">@{name.replace(/\s+/g, '_').toLowerCase()}</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SliderCard