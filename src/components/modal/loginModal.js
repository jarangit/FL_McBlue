

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Backdrop from './backDrop'
import { IMAGE_STORE } from '../../constants/imageStores';
import { IoIosClose } from 'react-icons/io'

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const LoginModal = ({ handleClose, open, onSubmit }) => {
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={handleClose}
          open={open}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" bg-gradient-to-r from-[#3250a1] to-[#030e49cc] max-w-[500px] w-full h-fit p-8 rounded-2xl drop-shadow-lg"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className='flex flex-col items-center gap-4 relative'>
              <div className={`absolute -top-10 -right-10 text-white bg-red rounded-full cursor-pointer `} onClick={() => handleClose(false)}>
                <IoIosClose size={30} />
              </div>
              <div>
                <img src={IMAGE_STORE.logo} alt="" width={200} />
              </div>
              <div className='font-bold text-xl'>เข้าสู่ระบบ</div>
              <div className='w-full'>
                <form action="" className='flex flex-col gap-4 w-full'>
                  <input type="text" placeholder='UserName' className={`outline-none bg-[#00000085] p-2 rounded-lg w-full drop-shadow-2xl border-2  border-white/30`} />
                  <input type="text" placeholder='รหัสผ่าน' className={`outline-none bg-[#00000085] p-2 rounded-lg w-full drop-shadow-2xl border-2  border-white/30`} />
                </form>
              </div>
              <button className='bg-gradient-to-r from-[#fdd826] to-[#fdb311] h-14 px-6 text-white rounded-lg w-full' onClick={() => handleClose(false)}>เข้าสู่ระบบ</button>
              <div className='flex justify-between w-full'>
                <div>
                  ท่านยังไม่มีบัญชี?
                  <span className='underline ml-2'>สมัครสมาชิก</span>
                </div>
                <div>
                  <a href="/">
                    ลืมรหัสผ่าน ?
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default LoginModal