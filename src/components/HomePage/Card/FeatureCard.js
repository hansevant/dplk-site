import React from 'react'

const FeatureCard = (props) => {
const { img } = props;
const { text } = props;
const { desc } = props;
  return (
    <div className="w-96 h-40 relative rounded-lg">
    <div className="w-16 h-16 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
      <img src={img} alt='icon' />
    </div>
    <div className="pr-8 pt-px pb-1 left-[90px] top-[-5px] absolute rounded-lg flex-col justify-start items-start gap-5 inline-flex">
      <p className="text-gray-700 text-xl font-bold font-['DM Sans']">{text}</p>
      <p className="w-60 h-28 text-slate-500 text-base font-normal font-['DM Sans'] leading-loose">{desc}</p>
    </div>
  </div>
  )
}

export default FeatureCard