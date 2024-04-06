import React from 'react'

const Card = (props) => {
    const {num,name,para} = props;
    console.log(name);
  return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg w-[300px] h-[150px] m-auto bg-white relative z-10'>
            <div className='px-6 py-4'>
            <div className='font-bold text-purple-500 text-normal mb-2'>{name}</div>
            <h1 className='text-3xl font-bold'>{num}</h1>
            </div>
            <div className='px-6 py-4'>
                <p className="opacity-[0.7]">{para} Completed</p>
            </div>
    </div>
  )
}

export default Card
