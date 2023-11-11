import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => (
  <div className="mb-2">
    <div className='flex justify-between gap-3 items-center' onClick={toggleAccordion}>
        <button className="text-left w-full text-gray-700 text-xl font-medium font-['DM Sans'] leading-7">
        {title}
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M12 8.5V16.5M8 12.5H16M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z" stroke="#5EA9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
    <div
      className={`p-2 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 h-0'
      }`}
    >
      <div className='text-left'>{content}</div>
    </div>
    <hr className='mt-3'/>
  </div>
);

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          content={item.answer}
          isOpen={index === activeItem}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;