import React, { useState, useEffect } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
const Menu = ({ setShowMenuMB }) => {
  const [showCardMenu, setShowCardMenu] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowCardMenu(true)
    }, 300);
  }, [])
  return (
    <div className={`h-[75px] my_bg_blue drop-shadow-xl flex items-center justify-between px-3 md:px-6 fixed w-full z-50`}>
      <div className='flex gap-2 items-center'>
        <div className='md:hidden' onClick={() => setShowMenuMB(true)}>
          <AiOutlineMenu size={30} />
        </div>
        <div className='w-24'>
          <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2022/08/logo.png" alt="" width={170} />
        </div>
      </div>

      {/* menu right */}
      <div className={`flex items-center gap-2 `}>
        <div className={`hidden md:flex gap-2  relative overflow-hidden transition-all duration-700  ${showCardMenu ? "top-0" : "-top-24"}`}>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2022/03/download-1.png" alt="" width={45} />
            </div>
            <div>โปรโมชั่น</div>
          </div>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2022/04/menu-hot-ic2.png" alt="" width={45} />
            </div>
            <div>บทความ</div>
          </div>
          <div className={`my_card_blue`}>
            <div className=' mx-auto'>
              <img src="https://ideabet.org/theme/mcblue/wp-content/uploads/2021/07/line.png" alt="" width={45} />
            </div>
            <div>ติดต่อเรา</div>
          </div>
        </div>
        <div className={`relative hidden md:block`}>
          <input type="text" className={`my_input max-w-[150px]`} placeholder="ชื่อผู้ใช้" />
          <div className={`absolute top-2 left-2`}>
            <FaUserAlt size={20} color="#F5DAAB" />
          </div>
        </div>
        <div className={`relative hidden md:block`}>
          <input type="text" className={`my_input max-w-[150px]`} placeholder="รหัสผู้ใช้งาน" />
          <div className={`absolute top-2 left-2`}>
            <FaLock size={20} color="#F5DAAB" />
          </div>
        </div>
        <div>
          <button className={`my_but_blue_light !p-1 !rounded-lg !text-xs md:text-md`}>เข้าสู่ระบบ</button>
        </div>

        <div>
          <button className={`my_but_orange !p-1 !rounded-lg !text-xs md:text-md`}>สมัครสมาชิก</button>
        </div>
      </div>
    </div>
  )
}

export default Menu