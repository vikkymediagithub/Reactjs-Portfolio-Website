import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-4xl text-sm md:text-5xl text-designColor text-gray-300 font-bold capitalize">{title}</h3>
      <div className='divider'></div>
      <h1 className="text-sm uppercase font-light tracking-wide">{des}</h1>
    </div>
  );
}

export default Title;

