import React from 'react'


const Title = ({text1, text2}) => {
  return (
    <div>
      <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-[aliceblue]'>{text1} <span className='text-sky-500 '>{text2}</span></p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[aliceblue] '></p>
    </div>
    </div>
  )
}

export default Title
