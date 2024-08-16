import React, { useState } from 'react';
import { faqImg } from '../assets';

/**
 * The FAQ component provides answers to common questions about MoneyMap.
 */
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex items-center justify-between bg-gray-100 py-16 px-16">
      {/* FAQ Image */}
      <div className="w-1/2 pr-8">
        <img src={faqImg} alt="FAQ Image" className="rounded-lg shadow-lg" />
      </div>
      {/* FAQ Content */}
      <div className="w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-blue-600">Do You Have Any Questions?</h2>
        <ul className="space-y-4">
          <li className={`border-b pb-4 ${activeIndex === 0 ? 'text-blue-600' : 'text-black'}`} onClick={() => toggleFAQ(0)}>
            <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
              What is the meaning of Lorem Ipsum?
              <span>{activeIndex === 0 ? '-' : '+'}</span>
            </h3>
            {activeIndex === 0 && <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          </li>
          <li className={`border-b pb-4 ${activeIndex === 1 ? 'text-blue-600' : 'text-black'}`} onClick={() => toggleFAQ(1)}>
            <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
              Why is Lorem Ipsum Dolor used?
              <span>{activeIndex === 1 ? '-' : '+'}</span>
            </h3>
            {activeIndex === 1 && <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          </li>
          <li className={`border-b pb-4 ${activeIndex === 2 ? 'text-blue-600' : 'text-black'}`} onClick={() => toggleFAQ(2)}>
            <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
              What is the most used version?
              <span>{activeIndex === 2 ? '-' : '+'}</span>
            </h3>
            {activeIndex === 2 && <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          </li>
          <li className={`border-b pb-4 ${activeIndex === 3 ? 'text-blue-600' : 'text-black'}`} onClick={() => toggleFAQ(3)}>
            <h3 className="text-xl font-semibold cursor-pointer flex justify-between items-center">
              What are the origins of Lorem Ipsum Dolor Sit?
              <span>{activeIndex === 3 ? '-' : '+'}</span>
            </h3>
            {activeIndex === 3 && <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
