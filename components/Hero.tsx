import React from 'react';

const Hero = () => {
  return (
    <div className='h-[75vh] flex justify-center items-center mx-auto flex-col bg-[#363636] text-neutral-200'>
      {/* YOUR CODE BLOCK */}
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-emerald-400 text-5xl font-bold my-4'>
        Editor & Browser Side by Side
      </h1>
      <h1 className='text-2xl w-1/2 text-center'>
        Welcome Candidate :) Relax, don't rush. If you know what you're doing
        this will be a breeze
      </h1>

      <button className=' bg-emerald-700 text-white px-6 py-2 mt-8 shadow-lg rounded-2xl'>
        Click Me
      </button>
    </div>
  );
};

export default Hero;
