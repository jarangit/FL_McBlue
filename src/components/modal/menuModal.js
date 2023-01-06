import React, { useEffect, useState } from 'react'
import { IMAGE_STORE } from '../../constants/imageStores';

// const safeDocument = typeof document !== 'undefined' ? document : {};

const MenuModal = ({ onClose, show }) => {
  const [showCardMenu, setShowCardMenu] = useState(false)
  const styled = {
    root: `fixed h-screen z-[99] w-full backdrop-sepia-0 bg-white/70 md:hidden overflow-hidden transition-all`,
    card: `my_card_blue p-3 flex flex-col items-center rounded-xl border border-yellow-dark !w-[100px]`,
    box:`flex gap-2  relative overflow-hidden transition-all duration-700 justify-between w-full`
  }
  useEffect(() => {
    if (show) {
      // blockScroll()
      setTimeout(() => {
        setShowCardMenu(true)
      }, 300);

    }
  }, [show])

  return (
    <>
      <div className={`${styled.root} ${show ? "max-h-[1000px]" : "max-h-0"}`} onClick={() => onClose(false)}>
        <div className='flex items-center justify-center h-full px-3'>
          <div className={`${styled.box} ${showCardMenu ? "top-0" : "-top-24"}`}>
            <div className={`${styled.card}`}>
              <div className=' mx-auto'>
                <img src={IMAGE_STORE.top_menu1} alt="" width={45} />
              </div>
              <div>โปรโมชั่น</div>
            </div>
            <div className={`${styled.card}`}>
              <div className=' mx-auto'>
                <img src={IMAGE_STORE.top_menu2} alt="" width={45} />
              </div>
              <div>บทความ</div>
            </div>
            <div className={`${styled.card}`}>
              <div className=' mx-auto'>
                <img src={IMAGE_STORE.lineIcon} alt="" width={45} />
              </div>
              <div>ติดต่อเรา</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuModal