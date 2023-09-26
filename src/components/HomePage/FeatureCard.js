import React from 'react'

const FeatureCard = (props) => {
const { text } = props;
const { desc } = props;
  return (
    <div className="w-96 h-40 relative rounded-lg">
    <div className="w-16 h-16 left-0 top-0 absolute rounded-lg justify-center items-center inline-flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
        <path opacity="0.09" d="M47.7273 0.390625H22.2727C9.97182 0.390625 0 10.3624 0 22.6634V48.1179C0 60.4188 9.97182 70.3906 22.2727 70.3906H47.7273C60.0282 70.3906 70 60.4188 70 48.1179V22.6634C70 10.3624 60.0282 0.390625 47.7273 0.390625Z" fill="#2563FF"/>
      </svg>
    </div>
    <div className="pr-8 pt-px pb-1 left-[90px] top-[-5px] absolute rounded-lg flex-col justify-start items-start gap-5 inline-flex">
      <p className="text-gray-700 text-xl font-bold font-['DM Sans']">{text}</p>
      <p className="w-60 h-28 text-slate-500 text-base font-normal font-['DM Sans'] leading-loose">{desc}</p>
    </div>
  </div>
  )
}

export default FeatureCard