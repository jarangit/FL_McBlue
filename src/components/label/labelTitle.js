import React from 'react'

const LabelTitle = ({ image, text }) => {
  return (
    <div className='my_bg_title_text relative flex items-center gap-4 mt-10 mb-3'>
      <div className={`absolute left-2`}>
        <img src={image} alt="" width={'60px'} />
      </div>
      <div className='text-2xl pl-20'>
        {text}
      </div>
    </div>
  )
}

export default LabelTitle